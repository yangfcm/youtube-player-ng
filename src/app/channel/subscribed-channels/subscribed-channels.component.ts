import { Component, OnInit, Input } from '@angular/core';
import { IAuth } from '../../auth/google-auth.service';
import { ChannelService } from '../channel.service';
import { IChannelData } from '../interfaces/channelData';

@Component({
  selector: 'app-subscribed-channels',
  template: `
    <app-loader *ngIf="!errorMessage && !subscriptionData"></app-loader>
    <app-error-message *ngIf="errorMessage"
      >{{ errorMessage }}
    </app-error-message>
    <ng-container *ngIf="subscriptionData && !errorMessage">
      <app-page-title>My Subscriptions</app-page-title>
      <app-error-message *ngIf="subscriptionData.items.length === 0">
        You have not subscribed any channel.
      </app-error-message>
      <div class="app-subscribed-channel-container">
        <app-subscribed-channel-item
          *ngFor="let channel of subscriptionData.items"
          [channel]="channel"
        ></app-subscribed-channel-item>
      </div>
      <app-margin></app-margin>
      <div
        class="ui two column centered grid"
        *ngIf="subscriptionData.nextPageToken"
      >
        <div class="column">
          <app-more-button
            [nextPageToken]="subscriptionData.nextPageToken"
            (onNextPage)="handleNextPage($event)"
            >More channels...</app-more-button
          >
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .app-subscribed-channel-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
        gap: 0.5rem;
      }
    `,
  ],
})
export class SubscribedChannelsComponent implements OnInit {
  @Input() auth: IAuth;
  errorMessage = '';
  subscriptionData: IChannelData;
  isLoadingNextPage = false;

  constructor(private channelService: ChannelService) {}

  ngOnInit(): void {
    if (this.auth && this.auth.signedIn) {
      this.fetchSubscription();
    }
  }

  fetchSubscription() {
    this.errorMessage = '';
    this.channelService.fetchSubscriptions().subscribe(
      (data) => {
        this.errorMessage = '';
        this.subscriptionData = data;
      },
      (err) => {
        this.errorMessage = err;
        this.subscriptionData = undefined;
      }
    );
  }

  handleNextPage($event) {
    if (this.isLoadingNextPage) return;
    this.isLoadingNextPage = true;
    const pageToken = $event;
    this.channelService.fetchSubscriptions(pageToken).subscribe(
      (data) => {
        this.errorMessage = '';
        this.subscriptionData = {
          ...this.subscriptionData,
          items: this.subscriptionData.items.concat(data.items),
          nextPageToken: data.nextPageToken,
          pageInfo: data.pageInfo,
        };
      },
      (err) => {
        this.errorMessage = err;
        this.subscriptionData = undefined;
      },
      () => {
        this.isLoadingNextPage = false;
      }
    );
  }
}
