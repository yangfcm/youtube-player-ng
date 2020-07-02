import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'; 
import { environment } from '../../environments/environment';

interface IAuthUser {
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

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  authEmitter = new Subject<IAuth>(); 
  auth: any;
  signedIn: boolean;

  constructor(private http: HttpClient) {
    if(!(window as any).gapi) return;
    (window as any).gapi.load("client:auth2", () => {
      (window as any).gapi.client.init({
        clientId: environment.clientId,
        scope: environment.scope
      }).then(() => { 
        this.auth = (window as any).gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    }); 
   }

   onAuthChange = (isSignedIn) => {
     if(isSignedIn) {
       // Sign in
       const googleAuthUser = this.auth.currentUser.get();
       // Get and save auth token
       const accessToken = `${googleAuthUser.wc.token_type} ${googleAuthUser.wc.access_token}`;
       localStorage.setItem('access_token', accessToken); 
       this.http.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
       {
        headers: {
          Authorization: accessToken,
        },
      }).subscribe((data: IAuthUser) => { 
        this.authEmitter.next({
          signedIn: true,
          user: data
        });
        this.signedIn = true;
      }, (err) => {
        console.log(err.message);
        localStorage.removeItem('access_token');
        this.authEmitter.next({
          signedIn: false,
          user: undefined
        });
      })
     } else { 
       // sign out
        localStorage.removeItem('access_token'); 
        this.authEmitter.next({
          signedIn: false,
          user: undefined
        });
     }
   }

   googleSignIn() {
     this.auth.signIn();
   }

   googleSignOut() {
     this.auth.signOut();
   }
}
