import { Component, OnInit, Input } from '@angular/core';
import { IVideoItem } from '../interfaces/videoItem';

@Component({
  selector: 'app-video-grid',
  template: `
    <div class="ui segment basic" *ngIf="!videos || videos.length === 0">
      <h3 class="ui center aligned header red">
        No videos displayed
      </h3>
    </div>
    <div class="app-video-grid" *ngIf="videos && videos.length > 0">
      <app-video-grid-item
        *ngFor="let video of videos"
        [video]="video"
      ></app-video-grid-item>
    </div>
  `,
  styles: [
    `
      .app-video-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
        gap: 1.8rem;
      }
    `,
  ],
})
export class VideoGridComponent implements OnInit {
  @Input() videos: IVideoItem[];
  constructor() {}

  ngOnInit(): void {}
}
