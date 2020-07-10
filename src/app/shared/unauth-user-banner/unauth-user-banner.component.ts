import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauth-user-banner',
  template: `<div class="app-banner-container">
    <div class="app-banner-image">
      <i class="user secret icon huge"></i>
    </div>
    <div class="app-banner-title">
      <h2 class="ui header app-banner-title-text">
        <span style="margin-right: 3px;">Welcome </span>
      </h2>
    </div>
  </div> `,
  styles: [
    `
      .app-banner-container {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
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
      }
      @media (max-width: 576px) {
        .app-banner-title-text {
          flex-direction: column;
        }
      }
    `,
  ],
})
export class UnauthUserBannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
