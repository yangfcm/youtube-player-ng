import { Component, OnInit, NgZone } from '@angular/core';
import {  GoogleAuthService, IAuth } from '../../auth/google-auth.service';

@Component({
  selector: 'app-user-banner',
  template: `
    <div class="app-banner-container">
      <ng-container *ngIf="auth">
        <div class="app-banner-image">
          <img *ngIf="auth.signedIn"
            class="ui tiny image circular"
            [src]=" auth.user.picture"
          />
          <i *ngIf="!auth.signedIn" class="user secret icon huge"  ></i>
        </div>
        <div class="app-banner-title">
          <h2 class="ui header app-banner-title-text">
            <span style="margin-right: 3px;">Welcome<span *ngIf="auth.user"> back,</span> </span> 
            <span *ngIf="auth.user">{{ auth.user.name }}</span>
          </h2>
        </div>
      </ng-container>     
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
export class UserBannerComponent implements OnInit {
  
  auth: IAuth  
  constructor(private googleAuthService: GoogleAuthService,
    private ngZone: NgZone) {}

  ngOnInit(): void { 
    this.auth = this.googleAuthService.googleAuth;
    this.googleAuthService.authEmitter.subscribe((data) => {       
      this.ngZone.run(() => {
        this.auth = data;  
      })
    }, (err) => {
      console.log(err.message);
      this.auth = undefined;
    }); 
  }
}
