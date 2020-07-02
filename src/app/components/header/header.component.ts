import { Component, OnInit, NgZone } from '@angular/core'; 
import { Router } from '@angular/router';
import {  GoogleAuthService, IAuth } from '../../auth/google-auth.service';
import { Subscription } from 'rxjs';

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
          <div *ngIf="auth"> 
            <button *ngIf="auth.signedIn === false"
              class="ui button primary basic"
              style="margin-left: 1rem; width: 110px;"
              (click)="handleSignIn()"
            >
              <i class="sign in alternate icon"></i>
              Sign in
            </button>
            <img *ngIf="auth.signedIn === true" 
              [src]="auth.user.picture"
              class="ui tiny image circular"
            />
            <button *ngIf=" auth.signedIn === true"(click)="handleSignOut()" 
              class="ui button negative basic"
            >
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
  auth$: Subscription;
  auth: IAuth  

  constructor( private router: Router, private googleAuthService: GoogleAuthService,
    private ngZone: NgZone) { 
  }

  ngOnInit(): void { 
    this.auth$ = this.googleAuthService.authEmitter.subscribe((data) => {       
      this.ngZone.run(() => {
        // Must be wrapped by ngZone.run(), otherwise the view cannot be updated.
        // Reference: https://stackoverflow.com/questions/50519200/angular-6-view-is-not-updated-after-changing-a-variable-within-subscribe
        this.auth = data;  
      })
    }, (err) => {
      console.log(err.message);
      this.auth = undefined;
    }); 
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
