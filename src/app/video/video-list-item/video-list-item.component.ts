import { Component, OnInit, Input } from '@angular/core';
import { IVideoItem } from '../interfaces/videoItem';

@Component({
  selector: 'app-video-list-item',
  template: `
    <div class="ui card app-list-card" *ngIf="video.snippet">
      <a
        class=" app-card-image-container"
        [routerLink]="['/video/' + videoId]"
        [queryParams]="{ playlistId: video.snippet.playlistId }"
      >
        <img
          [src]="video.snippet.thumbnails.medium.url"
          class="app-list-card-image"
          [title]="video.snippet.title"
        />
      </a>
      <div class="content app-list-card-content">
        <a
          class="header app-list-card-title"
          [routerLink]="['/video/' + videoId]"
          [queryParams]="{ playlistId: video.snippet.playlistId }"
          [title]="video.snippet.title"
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
      .app-card-image-container {
        display: flex;
        align-items: center;
      }
      .app-list-card-image {
        max-width: 140px;
        height: auto;
      }
      .app-list-card-title {
        line-height: 23px;
        max-height: 46px;
        overflow: hidden;
        text-overflow: ellipsis;
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

  get videoId() {
    let videoId = '';
    if (this.video && this.video.snippet && this.video.snippet.resourceId) {
      videoId = this.video.snippet.resourceId.videoId;
    } else if (this.video && this.video.id) {
      videoId = (this.video.id as {
        kind: string;
        videoId: string;
      }).videoId;
    }
    return videoId;
  }
  constructor() {}

  ngOnInit(): void {}
}
