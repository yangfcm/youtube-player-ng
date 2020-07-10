import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, pluck, map } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';
import { environment } from '../../environments/environment';
import { IVideoData } from './interfaces/videoData';
import { IVideoDetailData } from './interfaces/videoDetail';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  apiUrl: string;
  apiKey: string;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private configService: ConfigService
  ) {
    // console.log(this.configService.config);
    this.apiUrl = this.configService.config.apiUrl;
    this.apiKey = this.configService.config.apiKey;
  }

  /**
   * Get a set of videos based on filter,
   * e.g. videos belonging to a channel or videos belonging to a play list etc.
   */
  fetchVideos(filter: any, pageToken: string) {
    return this.http
      .get<IVideoData>(`${this.apiUrl}/videos`, {
        params: {
          key: this.apiKey,
          part: 'snippet,statistics',
          maxResults: '15',
          pageToken,
          ...filter,
        },
      })
      .pipe(
        catchError((err) => {
          const errorMessage = this.errorService.createErrorMessage(
            err,
            environment.errorMessage.failedToFetchVideo
          );
          throw errorMessage;
        })
      );
  }

  /**
   * Fetch a video by id
   */
  fetchVideo(videoId: string) {
    return this.http
      .get<IVideoDetailData>(`${this.apiUrl}/videos`, {
        params: {
          key: this.apiKey,
          part: 'snippet,statistics',
          id: videoId,
        },
      })
      .pipe(
        pluck('items'),
        map((items) => items[0]),
        catchError((err) => {
          const errorMessage = this.errorService.createErrorMessage(
            err,
            environment.errorMessage.failedToFetchVideo
          );
          throw errorMessage;
        })
      );
  }
}
