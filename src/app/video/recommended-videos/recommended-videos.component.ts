import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { VideoService } from '../video.service';
import { IVideoData } from '../interfaces/videoData';

@Component({
  selector: 'app-recommended-videos',
  template: `
    <app-loader *ngIf="!errorMessage && !videoData"></app-loader>
    <app-error-message *ngIf="errorMessage && !videoData">{{
      errorMessage
    }}</app-error-message>
    <app-video-grid
      *ngIf="videoData && !errorMessage"
      [videos]="videoData.items"
    ></app-video-grid>
  `,
  styles: [],
})
export class RecommendedVideosComponent implements OnInit {
  errorMessage = '';
  videoData: IVideoData;
  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService
      .fetchVideos({ chart: 'mostPopular' }, '')
      .pipe(
        catchError((err) => {
          throw err;
        })
      )
      .subscribe(
        (data) => {
          console.log('success ', data);
          this.errorMessage = '';
          this.videoData = data;
        },
        (err) => {
          this.errorMessage = err.error.error.message;
          this.videoData = undefined;
        }
      );
  }
}
