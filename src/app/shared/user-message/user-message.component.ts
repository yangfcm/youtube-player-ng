import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-message',
  template: `
    <h3 class="ui grey header center aligned">
      <i class="info circle icon"> </i>
      <ng-content></ng-content>
    </h3>
  `,
  styles: [],
})
export class UserMessageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
