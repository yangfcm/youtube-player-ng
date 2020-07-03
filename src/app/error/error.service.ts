import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  createErrorMessage(err: any, custMessage: string) {
    let errorMessage: string;
    if (err.error && err.error.error && err.error.error.message) {
      errorMessage = err.error.error.message;
    } else if (custMessage) {
      errorMessage = custMessage;
    } else {
      errorMessage = 'Operation failed';
    }
    return errorMessage;
  }
}
