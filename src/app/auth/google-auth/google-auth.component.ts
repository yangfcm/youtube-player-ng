import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ComponentFactoryResolver,
  Input,
} from '@angular/core';
import { GoogleAuthDirective } from '../google-auth.directive';
import { GoogleAuthService, IAuth } from '../google-auth.service';
import { Subscription } from 'rxjs';
import { IAuthComponent } from '../google-auth.service';

@Component({
  selector: 'app-google-auth',
  template: `
    <ng-container>
      <ng-template appGoogleAuth></ng-template>
    </ng-container>
  `,
  styles: [],
})
export class GoogleAuthComponent implements OnInit {
  @Input() AuthedComponent;
  @Input() UnauthedComponent;
  @ViewChild(GoogleAuthDirective, { static: true })
  appGoogleAuth: GoogleAuthDirective;
  auth: IAuth;
  auth$: Subscription;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private googleAuthService: GoogleAuthService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.auth = this.googleAuthService.googleAuth;
    if (this.auth && this.auth.signedIn) {
      this.loadAuthedComponent();
      return;
    }
    if (this.auth && !this.auth.signedIn) {
      this.loadUnauthedComponent();
      return;
    }
    console.log('google auth');
    this.auth$ = this.googleAuthService.authEmitter.subscribe(
      (data) => {
        this.ngZone.run(() => {
          this.auth = data;
          if (this.auth.signedIn) {
            this.loadAuthedComponent();
          } else {
            this.loadUnauthedComponent();
          }
        });
        console.log(this.auth);
      },
      (err) => {
        console.log(err.message);
        this.auth = undefined;
        this.loadUnauthedComponent();
      }
    );
  }

  loadComponent() {}

  loadAuthedComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.AuthedComponent
    );
    const viewContainerRef = this.appGoogleAuth.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as IAuthComponent).auth = this.auth;
  }

  loadUnauthedComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.UnauthedComponent
    );
    const viewContainerRef = this.appGoogleAuth.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
