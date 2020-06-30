import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: ` <div class="ui segment" style="height: 100px;  border: none;">
    <div class="ui active inverted dimmer">
      <div class="ui text loader">Loading...</div>
    </div>
    <p></p>
  </div>`,
  styles: [``],
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
