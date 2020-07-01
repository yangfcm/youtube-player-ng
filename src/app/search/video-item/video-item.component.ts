import { Component, OnInit, Input } from '@angular/core';
import { ISearchResultItem } from '../interfaces/searchResultItem';

@Component({
  selector: 'app-video-item',
  template: `
    <div class="ui items ">
      <div class="item">
        <a class="ui small image" [routerLink]="'/video/' + video.id.videoId">
          <img [src]="video.snippet.thumbnails.medium.url" />
        </a>
        <div class="content ">
          <a class="header" [routerLink]="'/video/' + video.id.videoId">{{
            video.snippet.title
          }}</a>
          <div class="meta">
            <a [routerLink]="'/channel/' + video.snippet.channelId">
              {{ video.snippet.channelTitle }}</a
            >

            <div class="ui right floated">
              <i class="calendar plus icon"></i
              >{{ video.snippet.publishedAt | date: 'd LLL, yyyy' }}
            </div>
          </div>
          <div class="description" style="overflow: auto;">
            {{ video.snippet.description }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class VideoItemComponent implements OnInit {
  @Input() video: ISearchResultItem;
  constructor() {}

  ngOnInit(): void {}
}
