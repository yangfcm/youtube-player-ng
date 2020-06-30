import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IVideoData } from './interfaces/videoData';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchVideos(filter: any, pageToken: string) {
    return this.http
      .get<IVideoData>(`${this.apiUrl}/videos`, {
        params: {
          key: environment.apiKey,
          part: 'snippet,statistics',
          maxResults: 15,
          pageToken,
          ...filter,
        },
      })
      .pipe(
        catchError((err) => {
          let errorMessage: string;
          if (!err.error || !err.error.error) {
            errorMessage = environment.errorMessage.failedToFetchVideo;
          } else {
            errorMessage = err.error.error.message;
          }
          throw errorMessage;
        })
      );
  }
}
