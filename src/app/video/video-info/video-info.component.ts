import { Component, OnInit, Input } from '@angular/core';
import { IVideoDetail } from '../interfaces/videoDetail';

@Component({
  selector: 'app-video-info',
  template: `
    <app-margin></app-margin>
    <div class="ui unstackable items">
      <div class="item">
        <div class="content">
          <h2 class="ui blue header">{{ videoDetail.snippet.title }}</h2>
          <div style="margin-bottom: 8px;"></div>
          <a [routerLink]="'/channel/' + videoDetail.snippet.channelId">
            {{ videoDetail.snippet.channelTitle }}
          </a>
          <div style="margin-bottom: 12px;"></div>
          <div class="meta">
            <span>
              <i class="calendar plus icon"></i>
              {{ videoDetail.snippet.publishedAt | date: 'd LLL, yyyy' }} |
              <i class="eye icon"></i>
              {{ videoDetail.statistics.viewCount }}</span
            >
            <span class="ui right floated">
              <i class="thumbs up icon"></i>
              {{ videoDetail.statistics.likeCount | number }} |
              <i class="thumbs down icon"></i>
              {{ videoDetail.statistics.dislikeCount | number }}
            </span>
          </div>
          <div class="ui divider"></div>
          <div class="description" style="overflow: auto;">
            {{ videoDetail.snippet.description }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class VideoInfoComponent implements OnInit {
  @Input() videoDetail: IVideoDetail;
  constructor() {}

  ngOnInit(): void {}
}
