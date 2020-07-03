import { Component, OnInit, Input } from '@angular/core';
import { IChannelItem } from '../interfaces/channelItem';

@Component({
  selector: 'app-subscribed-channel-item',
  template: `
    <div class="ui card centered ">
      <a
        class="image"
        [routerLink]="'/channel/' + channel.snippet.resourceId.channelId"
      >
        <img [src]="channel.snippet.thumbnails.medium.url" />
      </a>
      <div class="content" style="overflow: hidden; min-height: 72px;">
        <a
          class="header ui aligned center"
          [routerLink]="'/channel/' + channel.snippet.resourceId.channelId"
        >
          {{ channel.snippet.title }}
        </a>
      </div>
    </div>
  `,
  styles: [],
})
export class SubscribedChannelItemComponent implements OnInit {
  @Input() channel: IChannelItem;

  constructor() {}

  ngOnInit(): void {}
}
