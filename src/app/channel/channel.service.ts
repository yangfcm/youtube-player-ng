import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';
import { environment } from '../../environments/environment';

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
      .get<any>(`${this.apiUrl}/subscriptions`, {
        headers: {
          Authorizations: accessToken,
        },
        params: {
          part: 'snippet',
          maxResults: '10',
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
