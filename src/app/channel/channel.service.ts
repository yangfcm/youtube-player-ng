import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, pluck, map } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';
import { SearchService } from '../search/search.service';
import { PlaylistService } from '../playlist/playlist.service';
import { environment } from '../../environments/environment';
import { IChannelData } from './interfaces/channelData';
import { IChannelIntro } from './interfaces/channelIntro';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  apiUrl = environment.apiUrl;
  accessToken: string;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private searchService: SearchService,
    private playlistService: PlaylistService
  ) {
    this.accessToken = localStorage.getItem('access_token');
  }

  /** Fetch the channels subscribed by the current user */
  fetchSubscriptions(pageToken = '') {
    return this.http
      .get<IChannelData>(`${this.apiUrl}/subscriptions`, {
        headers: {
          Authorization: this.accessToken,
        },
        params: {
          key: environment.apiKey,
          part: 'snippet',
          maxResults: '50',
          pageToken,
          order: 'alphabetical',
          mine: 'true',
        },
      })
      .pipe(
        catchError((err) => {
          const errorMessage = this.errorService.createErrorMessage(
            err,
            environment.errorMessage.failedToFetchSubscription
          );
          throw errorMessage;
        })
      );
  }

  /** Fetch channel intro */
  fetchChannelIntro(channelId) {
    return this.http
      .get<IChannelIntro>(`${this.apiUrl}/channels`, {
        params: {
          key: environment.apiKey,
          part: 'snippet,statistics',
          id: channelId,
        },
      })
      .pipe(
        pluck('items'),
        map((items) => {
          if (items && items[0]) {
            return items[0];
          } else {
            throw 'No channel found.';
          }
        }),
        catchError((err) => {
          const errorMessage = this.errorService.createErrorMessage(
            err,
            environment.errorMessage.failedToFetchSubscription
          );
          throw errorMessage;
        })
      );
  }

  /**
   * Give a channel id, if it is subscribed by the authorized user,
   * return true, otherwise return false
   */
  fetchChannelSubsctiption(channelId) {}

  /** Subscribe a channel */
  subscribeChannel(channelId) {}

  /** Unsubscribe a channel */
  unsubscribeChannel(channelId) {}

  /** Get videos under a channel */
  fetchChannelVideos(channelId: string, pageToken = '') {
    return this.searchService.searchVideos(
      { channelId, order: 'date' },
      pageToken
    );
  }

  /** Get playlist under a channel */
  fetchChannelPlaylist(channelId: string, pageToken = '') {
    return this.playlistService.fetchPlaylist(channelId, pageToken);
  }
}
