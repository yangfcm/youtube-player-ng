import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SearchService } from '../search.service';
import { ISearchResultData } from '../interfaces/searchResultData';

@Component({
  selector: 'app-result',
  template: `
    <div class="ui divider hidden"></div>
    <app-loader *ngIf="!errorMessage && !searchResultData"></app-loader>
    <app-error-message *ngIf="errorMessage && !searchResultData">{{
      errorMessage
    }}</app-error-message>
    <ng-container *ngIf="!errorMessage && searchResultData">ok</ng-container>
  `,
  styles: [],
})
export class ResultComponent implements OnInit {
  errorMessage = '';
  searchResultData: ISearchResultData;
  isLoadingNextPage = false;
  searchKeyWord = '';

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const searchKeyWord = params.keyword;
      console.log(searchKeyWord);
    });
    // this.searchService.searchResultOutput.subscribe((data) => {
    //   console.log(data);
    // });
    this.route.params
      .pipe(
        switchMap(({ keyword }) => {
          this.searchKeyWord = keyword;
          return this.searchService.searchVideos({ q: this.searchKeyWord });
        })
      )
      .subscribe(
        (data) => {
          this.errorMessage = '';
          this.searchResultData = data;
          console.log(data);
        },
        (err) => {
          this.errorMessage = err;
          this.searchResultData = undefined;
        }
      );
  }
}
