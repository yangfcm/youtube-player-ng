import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `
    <br />
    <br />
    <h3 class="ui red header center aligned">
      <i class="exclamation triangle icon"> </i><ng-content></ng-content>
    </h3>
  `,
  styles: [],
})
export class ErrorMessageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
