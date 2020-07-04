import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChannelIntro } from '../interfaces/channelIntro';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channel-intro',
  template: `
    <div class="ui segments">
      <div class="ui segment">
        <p>title</p>
      </div>
      <div class="ui segment">
        <p>Middle</p>
      </div>
      <div class="ui segment">
        <p>Middle</p>
      </div>
    </div>
  `,
  styles: [],
})
export class ChannelIntroComponent implements OnInit {
  channelIntro: IChannelIntro;
  channelId: string;

  constructor(
    private route: ActivatedRoute,
    private channelService: ChannelService
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   this.channelId = params.id;
    // });
    // this.channelService.fetchChannelIntro(this.channelId).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.channelIntro = data;
    //   },
    //   (err) => {
    //     console.log(err);
    //     this.channelIntro = undefined;
    //   }
    // );
  }
}
