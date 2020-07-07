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
    console.log(err);
    if (
      (err.error && err.error.error && err.error.error.code == 404) ||
      err === environment.errorMessage.channelNotFound
    ) {
      // If error code returned from Google API is 404... or return 'no channel found.' message
      // The error info returned from Google API is not always consistent.
      errorMessage = environment.errorMessage.notFound;
    } else if (err.error && err.error.error && err.error.error.message) {
      // If there is errorMessage (other than 404) returned from API
      errorMessage = err.error.error.message;
    } else if (custMessage) {
      // If not, return customized message passed as an argument
      errorMessage = custMessage;
    } else {
      // If not, only return default general error message.
      errorMessage = 'Operation failed';
    }
    return errorMessage;
  }
}
