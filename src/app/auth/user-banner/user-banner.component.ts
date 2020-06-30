import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-banner',
  template: `
    <div class="app-banner-container">
      <div class="app-banner-image">
        <img
          class="ui tiny image circular"
          src="https://lh3.googleusercontent.com/a-/AOh14GgHZ_IO2RUfg770gLs9V6UOsJaDMsWmGKP4AUna"
        />
      </div>
      <div class="app-banner-title">
        <h2 class="ui header app-banner-title-text">
          <span style="margin-right: 3px;">Welcome,</span> <span>Fan Yang</span>
        </h2>
      </div>
    </div>
  `,
  styles: [
    `
      .app-banner-container {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        display: flex;
      }
      .app-banner-image {
        margin-right: 2rem;
      }
      .app-banner-title {
        display: flex !important;
        align-items: center;
      }
      .app-banner-title-text {
        display: flex;
      }
      @media (max-width: 576px) {
        .app-banner-title-text {
          flex-direction: column;
        }
      }
    `,
  ],
})
export class UserBannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
