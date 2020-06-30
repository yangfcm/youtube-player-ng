import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-more-button',
  template: `
    <button class="fluid ui button" (click)="handleClickNextPage()">
      <ng-content></ng-content>
    </button>
  `,
  styles: [],
})
export class MoreButtonComponent implements OnInit {
  @Input() nextPageToken: string;
  @Output() onNextPage = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  handleClickNextPage() {
    this.onNextPage.emit(this.nextPageToken);
  }
}
