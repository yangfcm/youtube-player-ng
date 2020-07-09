import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
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
  ) {}

  /** Fetch the channels subscribed by the current user */
  fetchSubscriptions(pageToken = '') {
    const accessToken = localStorage.getItem('access_token') || '';
    return this.http
      .get<IChannelData>(`${this.apiUrl}/subscriptions`, {
        headers: {
          Authorization: accessToken,
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
  fetchChannelIntro(channelId: string) {
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
            environment.errorMessage.failedToFetchChannel
          );
          throw errorMessage;
        })
      );
  }

  /**
   * Give a channel id, if it is subscribed by the authorized user,
   * return true, otherwise return false
   */
  fetchChannelSubsctiption(channelId: string) {
    const accessToken = localStorage.getItem('access_token') || '';

    return this.http
      .get<any>(`${this.apiUrl}/subscriptions`, {
        headers: {
          Authorization: accessToken,
        },
        params: {
          key: environment.apiKey,
          part: 'snippet',
          forChannelId: channelId,
          mine: 'true',
        },
      })
      .pipe(
        pluck('items'),
        map((items) => {
          if (items && items[0]) {
            return items[0].id;
          } else {
            return '';
          }
        }),
        catchError(() => {
          return EMPTY;
        })
      );
  }

  /** Subscribe a channel */
  subscribeChannel(channelId: string) {
    const accessToken = localStorage.getItem('access_token') || '';

    return this.http.post<any>(
      `${this.apiUrl}/subscriptions`,
      {
        snippet: {
          resourceId: {
            kind: 'youtube#channel',
            channelId,
          },
        },
      },
      {
        headers: {
          Authorization: accessToken,
        },
        params: {
          part: 'snippet',
        },
      }
    );
  }

  /** Unsubscribe a channel */
  unsubscribeChannel(subscriptionId: string) {
    const accessToken = localStorage.getItem('access_token') || '';

    return this.http.delete<any>(`${this.apiUrl}/subscriptions`, {
      headers: {
        Authorization: accessToken,
      },
      params: {
        id: subscriptionId,
      },
    });
  }

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
