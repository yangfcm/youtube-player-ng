import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: ` <div>
    <br />
    <br />
    <div class="ui active centered inline loader "></div>
    <br />
    <br />
  </div>`,
  styles: [``],
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
