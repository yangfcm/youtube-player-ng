import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
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

  authInput = new Subject<IAuth>();
  authOutput: Observable<IAuth>

  signedIn: boolean;
  user: IAuthUser; 
  auth: any;

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
       const googleAuthUser = this.auth.currentUser.get();
       const accessToken = `${googleAuthUser.wc.token_type} ${googleAuthUser.wc.access_token}`;
       localStorage.setItem('access_token', accessToken);
       this.http.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
       {
        headers: {
          Authorization: accessToken,
        },
      }).subscribe((data: IAuthUser) => { 
        this.authInput.next({
          signedIn: true,
          user: data
        }); 
      },
      (err) => {
        console.log(err);
      })
     } else { 
        localStorage.removeItem('access_token');
        this.authInput.next({
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
