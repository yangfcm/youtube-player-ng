import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelService } from '../channel.service';
import { IChannelIntro } from '../interfaces/channelIntro';

@Component({
  selector: 'app-channel-detail',
  template: `
    <app-margin></app-margin>
    <app-channel-banner [channelIntro]="channelIntro"></app-channel-banner>
    <app-margin></app-margin>
    <app-channel-nav></app-channel-nav>
    <app-margin></app-margin>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class ChannelDetailComponent implements OnInit {
  channelIntro: IChannelIntro;
  channelId: string;
  errorMessage: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private channelService: ChannelService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.channelId = params.id;
    });
    this.channelService.fetchChannelIntro(this.channelId).subscribe(
      (data) => {
        this.channelIntro = data;
        this.errorMessage = '';
      },
      (err) => {
        console.log(err);
        // this.router.navigateByUrl('/not-found');
        this.channelIntro = undefined;
        this.errorMessage = err;
      }
    );
  }
}
