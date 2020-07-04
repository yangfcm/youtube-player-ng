import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChannelIntro } from '../interfaces/channelIntro';

@Component({
  selector: 'app-channel-intro',
  template: `
    <div class="ui segments">
      <div class="ui segment">
        <p>{{ channelIntro.snippet.publishedAt.toString() }}</p>
      </div>
      <div class="ui segment">
        <p>{{ channelIntro.snippet.description }}</p>
      </div>
      <div class="ui segment">
        <p>{{ channelIntro.statistics.subscriberCount }} subscribers</p>
      </div>
      <div class="ui segment">
        <p>{{ channelIntro.statistics.viewCount }} views</p>
      </div>
    </div>
  `,
  styles: [],
})
export class ChannelIntroComponent implements OnInit {
  channelIntro: IChannelIntro;
  channelId: string;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      console.log(data.channelIntro.snippet.publishedAt.toString());
      this.channelIntro = data.channelIntro;
    });
  }

  ngOnInit(): void {}
}
