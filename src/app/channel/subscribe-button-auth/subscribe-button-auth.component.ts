import { Component, OnInit, Input } from '@angular/core';
import { SubscribeButtonComponent } from '../subscribe-button/subscribe-button.component';
import { EmptyComponent } from '../../shared/empty/empty.component';

@Component({
  selector: 'app-subscribe-button-auth',
  template: `
    <app-google-auth
      [AuthedComponent]="SubscribeButtonComponent"
      [UnauthedComponent]="EmptyComponent"
      [props]="props"
    ></app-google-auth>
  `,
  styles: [],
})
export class SubscribeButtonAuthComponent implements OnInit {
  @Input() channelId: string;
  SubscribeButtonComponent = SubscribeButtonComponent;
  EmptyComponent = EmptyComponent;

  get props() {
    return {
      channelId: this.channelId,
    };
  }
  constructor() {}

  ngOnInit(): void {}
}
