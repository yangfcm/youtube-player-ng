import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ISearchResultData } from './interfaces/searchResultData';

interface ISerachCommand {
  filter: object;
  pageToken?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  apiUrl = environment.apiUrl;
  // searchInput: Subject<ISerachCommand>;
  // searchResultOutput: Observable<any>;

  constructor(private http: HttpClient) {
    // this.searchInput = new Subject<ISerachCommand>();
    // this.searchResultOutput = this.searchInput.pipe(
    // map( (searchCommand) => {
    //   return new HttpParams().set('key', environment.apiKey)
    //     .set('part', 'snippet')
    //     .set('maxResults', '15')
    //     .set('pageToken', searchCommand.pageToken )
    //     .set('q', searchCommand.searchKeyWord)
    // } ),
    // switchMap((searchCommand) => {
    //   return this.searchVideos(searchCommand.filter, searchCommand.pageToken);
    // })
    // );
  }

  // search(searchKeyWord = '', pageToken = '') {
  //   this.searchInput.next({
  //     filter: { q: searchKeyWord },
  //     pageToken,
  //   });
  // }

  searchVideos(filter: object, pageToken = '') {
    return this.http
      .get<ISearchResultData>(`${this.apiUrl}/search`, {
        params: {
          key: environment.apiKey,
          part: 'snippet',
          maxResults: '12',
          pageToken,
          ...filter,
        },
      })
      .pipe(
        catchError((err) => {
          let errorMessage: string;
          if (!err.error || !err.error.error) {
            errorMessage = environment.errorMessage.failedToSearch;
          } else {
            errorMessage = err.error.error.message;
          }
          throw errorMessage;
        })
      );
  }
}
