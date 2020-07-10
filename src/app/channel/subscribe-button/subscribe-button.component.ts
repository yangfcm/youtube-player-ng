import { Component, OnInit, Input } from '@angular/core';
import { ChannelService } from '../channel.service';
import { IAuth } from '../../auth/google-auth.service';

enum ButtonText {
  Unsubscribe = 'Unsubscribe',
  Subscribe = 'Subscribe',
  Subscribing = 'Subscribing',
  Unsubscribing = 'Unsubscribing',
  Subscribed = 'Subscribed',
  Unsubscribed = 'Unsubscribed',
}

@Component({
  selector: 'app-subscribe-button',
  template: `
    <button
      class="ui inverted button"
      [class]="subscriptionId ? 'red' : 'orange'"
      *ngIf="auth && auth.signedIn && subscriptionId !== undefined"
      (mouseover)="handleMouseOver()"
      (mouseleave)="handleMouseLeave()"
      (click)="subscriptionId ? handleUnsubscribe() : handleSubscribe()"
      style="width: 120px;"
      [disabled]="
        buttonText === 'Subscribing' || buttonText === 'Unsubscribing'
      "
    >
      {{ buttonText }}
    </button>
  `,
  styles: [],
})
export class SubscribeButtonComponent implements OnInit {
  @Input() props: any;
  @Input() auth: IAuth;

  get channelId() {
    return this.props.channelId;
  }
  subscriptionId: string;
  isProcessing = false;
  buttonText: ButtonText;

  constructor(private channelService: ChannelService) {}

  ngOnInit(): void {
    if (this.auth && this.auth.signedIn) {
      this.fetchSubscriptionId();
    }
  }

  fetchSubscriptionId() {
    this.channelService
      .fetchChannelSubsctiption(this.channelId)
      .subscribe((data: string) => {
        this.subscriptionId = data;
        if (this.subscriptionId) {
          this.buttonText = ButtonText.Subscribed;
        } else {
          this.buttonText = ButtonText.Unsubscribed;
        }
      });
  }

  handleMouseOver() {
    if (this.buttonText === 'Subscribed') {
      this.buttonText = ButtonText.Unsubscribe;
    }
    if (this.buttonText === 'Unsubscribed') {
      this.buttonText = ButtonText.Subscribe;
    }
  }

  handleMouseLeave() {
    if (this.buttonText === 'Subscribe') {
      this.buttonText = ButtonText.Unsubscribed;
    }
    if (this.buttonText === 'Unsubscribe') {
      this.buttonText = ButtonText.Subscribed;
    }
  }

  handleUnsubscribe() {
    this.buttonText = ButtonText.Unsubscribing;
    this.channelService
      .unsubscribeChannel(this.subscriptionId)
      .subscribe(() => {
        this.subscriptionId = '';
        this.buttonText = ButtonText.Unsubscribed;
      });
  }

  handleSubscribe() {
    this.buttonText = ButtonText.Subscribing;
    this.channelService.subscribeChannel(this.channelId).subscribe((data) => {
      this.fetchSubscriptionId();
      this.buttonText = ButtonText.Subscribed;
    });
  }
}
