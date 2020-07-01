import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import {  GoogleAuthService, IAuth } from '../../auth/google-auth.service';

@Component({
  selector: 'app-header',
  template: `
    <div class="ui menu stackable">
      <a routerLink="/" class="header item ui">
        <i class="video icon red"></i>
        FanTube</a
      >
      <div class="right menu">
        <div class="item">
          <div class="ui icon input" style="min-width: 10px;">
            <input
              type="text"
              placeholder="Search video..."
              [(ngModel)]="searchKeyWord"
            />
            <i class="search icon link" (click)="handleSearch()"></i>
          </div>
          <div>
            <button *ngIf="auth && auth.signedIn === false"
              class="ui button primary"
              style="margin-left: 1rem; width: 110px;"
              (click)="handleSignIn()"
            >
              <i class="sign in alternate icon"></i>
              Sign in
            </button>
            <img *ngIf=" auth && auth.signedIn === true" 
              [src]="auth.user.picture"
            />
            <button *ngIf="auth && auth.signedIn === true"(click)="handleSignOut()" >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class HeaderComponent implements OnInit {
  searchKeyWord = '';
  signedIn: boolean;
  user: any;
  auth: IAuth;

  constructor( private router: Router, private googleAuthService: GoogleAuthService) {}

  ngOnInit(): void {
    console.log(this.googleAuthService.signedIn);
    this.signedIn = this.googleAuthService.signedIn;
    this.user = this.googleAuthService.user;
    this.googleAuthService.authInput.subscribe((data: IAuth) => {
      this.auth = data;
      console.log(this.auth)
    })
  }

  handleSearch() {
    if (this.searchKeyWord.trim() === '') return;
    this.router.navigateByUrl(`/search/${this.searchKeyWord.trim()}`);
    this.searchKeyWord = '';
  }

  handleSignIn() {
    this.googleAuthService.googleSignIn(); 
  }

  handleSignOut() {
    this.googleAuthService.googleSignOut(); 
  }
}
