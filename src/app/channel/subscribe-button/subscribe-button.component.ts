import { Component, OnInit, Input, NgZone } from '@angular/core';
import { ChannelService } from '../channel.service';
import { GoogleAuthService, IAuth } from '../../auth/google-auth.service';

@Component({
  selector: 'app-subscribe-button',
  template: `
    <button class="ui inverted red button">
      {{ subscriptionId ? 'Subscribed' : 'Unsubscribed' }}
    </button>
  `,
  styles: [],
})
export class SubscribeButtonComponent implements OnInit {
  @Input() channelId: string;
  subscriptionId: string;
  auth: IAuth;
  isProcessing = false;

  constructor(
    private channelService: ChannelService,
    private googleAuthService: GoogleAuthService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.auth = this.googleAuthService.googleAuth;
    this.googleAuthService.authEmitter.subscribe(
      (data) => {
        this.ngZone.run(() => {
          this.auth = data;
          this.fetchSubscriptionId();
        });
      },
      (err) => {
        console.log(err);
        this.subscriptionId = '';
      }
    );

    if (this.auth && this.auth.signedIn) {
      this.fetchSubscriptionId();
    }
  }

  fetchSubscriptionId() {
    this.channelService
      .fetchChannelSubsctiption(this.channelId)
      .subscribe((data: string) => {
        this.subscriptionId = data;
        console.log(this.subscriptionId);
      });
  }
}
