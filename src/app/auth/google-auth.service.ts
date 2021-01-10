import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ConfigService } from '../config.service';

export interface IAuthUser {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  picture: string;
  name: string;
}

export interface IAuth {
  user: IAuthUser;
  signedIn: boolean;
}
export interface IAuthComponent {
  auth: IAuth;
  props: any;
}

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  authEmitter = new Subject<IAuth>();
  auth: any;
  googleAuth: IAuth;
  signedIn: boolean;

  constructor(private http: HttpClient, private configService: ConfigService) {
    if (!(window as any).gapi) return;
    (window as any).gapi.load('client:auth2', () => {
      (window as any).gapi.client
        .init({
          clientId: this.configService.config.clientId,
          scope: this.configService.config.scope,
        })
        .then(() => {
          this.auth = (window as any).gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      // Sign in
      const googleAuthUser = this.auth.currentUser.get();
      // Get and save auth token
      console.log(googleAuthUser);
      const accessToken = `${googleAuthUser.Bc.token_type} ${googleAuthUser.Bc.access_token}`;
      localStorage.setItem('access_token', accessToken);
      this.http
        .get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
          headers: {
            Authorization: accessToken,
          },
        })
        .subscribe(
          (data: IAuthUser) => {
            this.googleAuth = {
              signedIn: true,
              user: data,
            };
            this.authEmitter.next(this.googleAuth);
            this.signedIn = true;
          },
          (err) => {
            console.log(err.message);
            localStorage.removeItem('access_token');
            this.googleAuth = {
              signedIn: false,
              user: undefined,
            };
            this.authEmitter.next(this.googleAuth);
          }
        );
    } else {
      // sign out
      localStorage.removeItem('access_token');
      this.googleAuth = {
        signedIn: false,
        user: undefined,
      };
      this.authEmitter.next(this.googleAuth);
    }
  };

  googleSignIn() {
    this.auth.signIn();
  }

  googleSignOut() {
    this.auth.signOut();
  }
}
