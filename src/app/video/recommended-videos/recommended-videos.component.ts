import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { IVideoData } from '../interfaces/videoData';

@Component({
  selector: 'app-recommended-videos',
  template: `
    <app-user-banner></app-user-banner>
    <app-nav></app-nav>
    <app-margin></app-margin>
    <app-loader *ngIf="!errorMessage && !videoData"></app-loader>
    <app-error-message *ngIf="errorMessage">{{
      errorMessage
    }}</app-error-message>
    <ng-container *ngIf="videoData && !errorMessage">
      <app-page-title>Recommended Videos</app-page-title>
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
export class RecommendedVideosComponent implements OnInit {
  errorMessage = '';
  videoData: IVideoData;
  isLoadingNextPage = false;
  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.fetchVideos({ chart: 'mostPopular' }, '').subscribe(
      (data) => {
        this.errorMessage = '';
        this.videoData = data;
      },
      (err) => {
        this.errorMessage = err;
        this.videoData = undefined;
      }
    );
  }

  handleNextPage($event) {
    if (this.isLoadingNextPage) return; // Avoid duplicate request.
    this.isLoadingNextPage = true;
    this.videoService.fetchVideos({ chart: 'mostPopular' }, $event).subscribe(
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
