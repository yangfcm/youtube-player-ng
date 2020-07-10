import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ISearchResultData } from './interfaces/searchResultData';
import { ConfigService } from '../config.service';

interface ISerachCommand {
  filter: object;
  pageToken?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  apiUrl: string;
  apiKey: string;
  // searchInput: Subject<ISerachCommand>;
  // searchResultOutput: Observable<any>;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = this.configService.config.apiUrl;
    this.apiKey = this.configService.config.apiKey;
    // this.searchInput = new Subject<ISerachCommand>();
    // this.searchResultOutput = this.searchInput.pipe(
    // map( (searchCommand) => {
    //   return new HttpParams().set('key', this.apiKey)
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
          key: this.apiKey,
          part: 'snippet',
          maxResults: '15',
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
