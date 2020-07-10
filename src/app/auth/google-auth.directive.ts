import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appGoogleAuth]',
})
export class GoogleAuthDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
