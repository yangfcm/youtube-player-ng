import { Component, OnInit, Input } from '@angular/core';
import { IChannelIntro } from '../interfaces/channelIntro';

@Component({
  selector: 'app-channel-banner',
  template: `
    <div class="app-banner-container" *ngIf="channelIntro">
      <div class="app-banner-title-container">
        <div class="app-banner-image">
          <img
            class="ui tiny image circular"
            [src]="channelIntro.snippet.thumbnails.medium.url"
          />
        </div>
        <div class="app-banner-title">
          <h2 class="ui header app-banner-title-text">
            {{ channelIntro.snippet.title }}
          </h2>
        </div>
      </div>
      <div>
        <app-subscribe-button-auth
          [channelId]="channelIntro.id"
        ></app-subscribe-button-auth>
      </div>
    </div>
  `,
  styles: [
    `
      .app-banner-container {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .app-banner-title-container {
        display: flex;
      }
      .app-banner-image {
        margin-right: 1rem;
        min-height: 80px;
        display: flex;
        align-items: center;
      }
      .app-banner-title {
        display: flex !important;
        align-items: center;
      }
      .app-banner-title-text {
        display: flex;
        padding-top: 5px;
        padding-bottom: 5px;
      }
      @media (max-width: 576px) {
        .app-banner-title-text {
          flex-direction: column;
        }
      }
      @media (max-width: 576px) {
        .app-banner-container {
          flex-direction: column;
        }
      }
    `,
  ],
})
export class ChannelBannerComponent implements OnInit {
  @Input() channelIntro: IChannelIntro;

  constructor() {}

  ngOnInit(): void {}
}
