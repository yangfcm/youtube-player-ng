import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  /**
   * Generate error message returned to user
   * If err has a certain message returned from google api, return this message,
   * If not but if custMessage is provided when calling the service, return the custMessage,
   * If not return a default message
   * @param err: an error object returned from google api
   * @param custMessage customized message
   */
  createErrorMessage(err: any, custMessage: string) {
    let errorMessage: string;
    if (err === environment.errorMessage.noChannelFound) {
      errorMessage = environment.errorMessage.noChannelFound;
    } else if (err.error && err.error.error && err.error.error.message) {
      errorMessage = err.error.error.message;
    } else if (custMessage) {
      errorMessage = custMessage;
    } else {
      errorMessage = 'Operation failed';
    }
    return errorMessage;
  }
}
