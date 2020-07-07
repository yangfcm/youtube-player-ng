import { Component, OnInit, Input } from '@angular/core';
import { IVideoItem } from '../interfaces/videoItem';

@Component({
  selector: 'app-video-list',
  template: `
    <div class="ui segment basic" *ngIf="!videos || videos.length === 0">
      <h3 class="ui center aligned header red">
        No videos found
      </h3>
    </div>
    <div *ngIf="videos && videos.length > 0" class="app-list-container">
      <h2 class="ui header">Play list videos</h2>
      <app-video-list-item
        *ngFor="let video of videos"
        [video]="video"
      ></app-video-list-item>
    </div>
  `,
  styles: [
    `
      .app-list-container {
        max-width: 750px;
        margin: 0 auto;
      }
    `,
  ],
})
export class VideoListComponent implements OnInit {
  @Input() videos: IVideoItem[];
  constructor() {}

  ngOnInit(): void {}
}
