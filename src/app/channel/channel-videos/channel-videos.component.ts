import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from '../channel.service';
import { ISearchResultData } from '../../search/interfaces/searchResultData';

@Component({
  selector: 'app-channel-videos',
  template: `
    <app-margin></app-margin>
    <app-loader *ngIf="!errorMessage && !videoData"></app-loader>
    <app-error-message *ngIf="errorMessage">{{
      errorMessage
    }}</app-error-message>
    <ng-container *ngIf="videoData && !errorMessage">
      <app-video-grid [videos]="videoData.items"></app-video-grid>
      <app-margin></app-margin>
      <div class="ui two column centered grid" *ngIf="videoData.nextPageToken">
        <div class="column">
          <app-more-button
            [nextPageToken]="videoData.nextPageToken"
            (onNextPage)="handleNextPage($event)"
            >More videos...</app-more-button
          >
        </div>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class ChannelVideosComponent implements OnInit {
  errorMessage = '';
  videoData: ISearchResultData;
  isLoadingNextPage = false;
  channelId: string;
  channelTitle: string;

  constructor(
    private route: ActivatedRoute,
    private channelService: ChannelService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.channelId = data.channelIntro.id;
      this.channelService.fetchChannelVideos(this.channelId, '').subscribe(
        (data) => {
          this.errorMessage = '';
          this.videoData = data;
          console.log(this.videoData);
        },
        (err) => {
          this.errorMessage = err;
          this.videoData = undefined;
        }
      );
    });
  }

  handleNextPage($event) {
    if (this.isLoadingNextPage) return; // Avoid duplicate request.
    this.isLoadingNextPage = true;
    this.channelService.fetchChannelVideos(this.channelId, $event).subscribe(
      (data) => {
        this.videoData = {
          ...this.videoData,
          items: this.videoData.items.concat(data.items),
          nextPageToken: data.nextPageToken,
          pageInfo: data.pageInfo,
        };
        this.errorMessage = '';
      },
      (err) => {
        this.errorMessage = err;
        this.videoData = undefined;
      },
      () => {
        this.isLoadingNextPage = false;
      }
    );
  }
}
