import { Component, OnInit, Input } from '@angular/core';
import { ISearchResultItem } from '../interfaces/searchResultItem';

@Component({
  selector: 'app-playlist-item',
  template: `<div class="ui items ">
    <div class="item">
      <a
        class="ui small image"
        style="position: relative"
        [routerLink]="'/plalist/' + playlist.id.playlistId"
      >
        <img [src]="playlist.snippet.thumbnails.medium.url" />
        <div class="app-image-cover">
          <p>
          <i class="list icon"></i>  
        Play List</p></div>
          
      </a>
      <div class="content ">
        <a
          class="header"
          [routerLink]="'/playlist/' + playlist.id.playlistId"
          >{{ playlist.snippet.title }}</a
        >
        <div class="meta">
          <a [routerLink]="'/channel/' + playlist.snippet.channelId">
            {{ playlist.snippet.channelTitle }}</a
          >

          <div class="ui right floated">
            <i class="calendar plus icon"></i
            >{{ playlist.snippet.publishedAt | date: 'd LLL, yyyy' }}
          </div>
        </div>
        <div class="description" style="overflow: auto;">
          {{ playlist.snippet.description }}
        </div>
      </div>
    </div>
  </div> `,
  styles: [
    `
      .app-image-cover {
        height: 100%;
        width: 100%;
        color: white;
        position: absolute;
        z-index: 10;
        background: rgba(0, 0, 0, 0.4);
        top: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class PlaylistItemComponent implements OnInit {
  @Input() playlist: ISearchResultItem;
  constructor() {}

  ngOnInit(): void {}
}
