import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-recommended-videos',
  template: `
    <app-loader></app-loader>
    <p>recommended-videos works!</p>
  `,
  styles: [],
})
export class RecommendedVideosComponent implements OnInit {
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
        },
        (err) => {
          console.log('error ', err);
        }
      );
  }
}
