import { Component, OnInit, Input } from '@angular/core';
import { ISearchResultItem } from '../interfaces/searchResultItem';

@Component({
  selector: 'app-channel-item',
  template: `
    <div class="ui items">
      <div class="ui item">
        <a
          class="ui small image circular"
          [routerLink]="'/channel/' + channel.id.channelId"
        >
          <img
            [src]="channel.snippet.thumbnails.medium.url"
            [title]="channel.snippet.channelTitle"
          />
        </a>
        <div class="content">
          <a class="header" [routerLink]="'/channel/' + channel.id.channelId"
            >{{ channel.snippet.channelTitle }}
          </a>
          <div class="description">
            {{ channel.snippet.description }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ChannelItemComponent implements OnInit {
  @Input() channel: ISearchResultItem;
  constructor() {}

  ngOnInit(): void {}
}
