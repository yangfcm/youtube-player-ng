import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SearchService } from '../search.service';
import { ISearchResultData } from '../interfaces/searchResultData';

@Component({
  selector: 'app-result',
  template: `
    <app-margin></app-margin>
    <app-loader *ngIf="!errorMessage && !searchResultData"></app-loader>
    <app-error-message *ngIf="errorMessage && !searchResultData">{{
      errorMessage
    }}</app-error-message>
    <ng-container *ngIf="!errorMessage && searchResultData">
      <div class="app-container">
        <h2 class="ui header">
          Search result with keyword:
          <span class="ui header red">{{ searchKeyWord }}</span>
        </h2>
        <div
          class="ui segment basic"
          *ngIf="!searchResultData.items || searchResultData.items.length === 0"
        >
          <app-error-message>
            There is no matched result
          </app-error-message>
        </div>
        <ng-container>
          <app-result-item
            *ngFor="let item of searchResultData.items"
            [item]="item"
          ></app-result-item
        ></ng-container>
        <app-margin></app-margin>
        <div
          class="ui two column centered grid"
          *ngIf="searchResultData.nextPageToken"
        >
          <div class="column">
            <app-more-button
              [nextPageToken]="searchResultData.nextPageToken"
              (onNextPage)="handleNextPage($event)"
              >More results...</app-more-button
            >
          </div>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .app-container {
        max-width: 770px;
        margin: 0 auto;
      }
    `,
  ],
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
        },
        (err) => {
          this.errorMessage = err;
          this.searchResultData = undefined;
        }
      );
  }

  handleNextPage($event) {
    if (this.isLoadingNextPage) return;
    this.isLoadingNextPage = true;
    this.searchService
      .searchVideos(
        {
          q: this.searchKeyWord,
        },
        $event
      )
      .subscribe(
        (data) => {
          this.searchResultData = {
            ...this.searchResultData,
            items: this.searchResultData.items.concat(data.items),
            nextPageToken: data.nextPageToken,
            pageInfo: data.pageInfo,
          };
          this.errorMessage = '';
        },
        (err) => {
          this.errorMessage = err;
          this.searchResultData = undefined;
        },
        () => {
          this.isLoadingNextPage = false;
        }
      );
  }
}
