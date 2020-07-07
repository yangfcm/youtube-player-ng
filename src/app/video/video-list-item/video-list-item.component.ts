import { Component, OnInit, Input } from '@angular/core';
import { IVideoItem } from '../interfaces/videoItem';

@Component({
  selector: 'app-video-list-item',
  template: `
    <div class="ui card app-list-card">
      <a
        class="image "
        [routerLink]="
          '/video/' +
          video.snippet.resourceId.videoId +
          '?playlistId=' +
          video.snippet.playlistId
        "
      >
        <img
          [src]="video.snippet.thumbnails.medium.url"
          class="app-list-card-image"
        />
      </a>
      <div class="content app-list-card-content">
        <a
          class="header"
          [routerLink]="
            '/video/' +
            video.snippet.resourceId.videoId +
            '?playlistId=' +
            video.snippet.playlistId
          "
          >{{ video.snippet.title }}</a
        >
        <a [routerLink]="'/channel/' + video.snippet.channelId">
          {{ video.snippet.channelTitle }}
        </a>
        <div class="meta">
          <i class="calendar icon"></i>
          {{ video.snippet.publishedAt | date: 'd LLL, yyyy' }}
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .app-list-card {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-bottom: 10px !important;
        border: none;
        box-shadow: none;
      }
      .app-list-card-image {
        max-width: 150px;
        height: auto;
      }
      .app-list-card-content {
        flex-grow: 1;
        border: none !important;
      }
    `,
  ],
})
export class VideoListItemComponent implements OnInit {
  @Input() video: IVideoItem;
  constructor() {}

  ngOnInit(): void {}
}
