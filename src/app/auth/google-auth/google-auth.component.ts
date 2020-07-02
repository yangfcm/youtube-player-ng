import { Component, OnInit } from '@angular/core';
import {  GoogleAuthService, IAuth } from '../../auth/google-auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-google-auth',
  template: `
    <ng-container>
      <ng-content></ng-content>
    </ng-container>
  `,
  styles: [
  ]
})
export class GoogleAuthComponent implements OnInit {

  auth: IAuth  
  auth$: Subscription;
  constructor( private googleAuthService: GoogleAuthService) { }

  ngOnInit(): void {
    this.auth$ = this.googleAuthService.authEmitter.subscribe((data) => { 
      this.auth = data;
      console.log(this.auth)
    }, (err) => {
      console.log(err.message);
      this.auth = undefined;
    }); 
  }

}
