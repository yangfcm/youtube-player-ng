import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';
import { environment } from '../../environments/environment';
import { IChannelData } from './interfaces/channelData';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  /** Fetch the channels subscribed by the current user */
  fetchSubscriptions(pageToken = '') {
    const accessToken = localStorage.getItem('access_token');
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
}
