import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: ` <div class="ui active centered inline loader"></div>`,
  styles: [``],
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
