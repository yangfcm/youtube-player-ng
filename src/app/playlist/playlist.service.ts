import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';
import { environment } from '../../environments/environment';
import { IPlaylistData } from './interfaces/playlistData';
import { IVideoData } from '../video/interfaces/videoData';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  /** Fetch the playlist created by the current user */
  fetchMyPlaylist(pageToken = '') {
    const accessToken = localStorage.getItem('access_token');
    return this.http
      .get<IPlaylistData>(`${this.apiUrl}/playlists`, {
        headers: {
          Authorization: accessToken,
        },
        params: {
          key: environment.apiKey,
          part: 'snippet,contentDetails,status',
          maxResults: '10',
          pageToken,
          mine: 'true',
        },
      })
      .pipe(
        catchError((err) => {
          const errorMessage = this.errorService.createErrorMessage(
            err,
            environment.errorMessage.failedToFetchPlaylist
          );
          throw errorMessage;
        })
      );
  }

  /** Fetch the playlist under a particular channel */
  fetchPlaylist(channelId: string, pageToken = '') {
    return this.http
      .get<IPlaylistData>(`${this.apiUrl}/playlists`, {
        params: {
          key: environment.apiKey,
          part: 'snippet,contentDetails,status',
          maxResults: '10',
          pageToken,
          channelId,
        },
      })
      .pipe(
        catchError((err) => {
          const errorMessage = this.errorService.createErrorMessage(
            err,
            environment.errorMessage.failedToFetchPlaylist
          );
          throw errorMessage;
        })
      );
  }

  /** Fetch the videos under a particular play list */
  fetchPlaylistDetails(playlistId: string, pageToken = '') {
    return this.http
      .get<IVideoData>(`${this.apiUrl}/playlistItems`, {
        params: {
          key: environment.apiKey,
          part: 'snippet,contentDetails,status',
          maxResults: '10',
          pageToken,
          playlistId,
        },
      })
      .pipe(
        catchError((err) => {
          const errorMessage = this.errorService.createErrorMessage(
            err,
            environment.errorMessage.failedToFetchPlaylistDetail
          );
          throw errorMessage;
        })
      );
  }
}
