import { Component, OnInit, Input } from '@angular/core';
import { IVideoItem } from '../interfaces/videoItem';

@Component({
  selector: 'app-video-grid-item',
  template: `
    <div class="ui card" style="height: 100%; width: 100%;">
      <a class="image" [routerLink]="'/video/' + video.id">
        <img
          [src]="video.snippet.thumbnails.medium.url"
          [title]="video.snippet.title"
        />
      </a>
      <div class="content">
        <div class="header app-video-title">
          <a [routerLink]="'/video/' + video.id" [title]="video.snippet.title">
            {{ video.snippet.title }}</a
          >
        </div>
        <div class="meta">
          <a [routerLink]="'/channel/' + video.snippet.channelId">{{
            video.snippet.channelTitle
          }}</a>
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
          {{ video.snippet.publishedAt | date: 'd LLL, yyyy' }}
        </span>
        <span>
          {{ video.statistics.viewCount | number }}
        </span>
      </div>
    </div>
  `,
  styles: [
    `
      .app-video-title {
        line-height: 23px;
        max-height: 46px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `,
  ],
})
export class VideoGridItemComponent implements OnInit {
  @Input() video: IVideoItem;
  constructor() {}

  ngOnInit(): void {}
}