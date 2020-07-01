import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-item',
  template: `
    <ng-container *ngIf="kind === 'channel'">
      <app-channel-item [channel]="item"></app-channel-item>
    </ng-container>
    <ng-container *ngIf="kind === 'playlist'">
      <app-playlist-item [playlist]="item"></app-playlist-item>
    </ng-container>
    <ng-container *ngIf="kind === 'video'">
      <app-video-item [video]="item"></app-video-item>
    </ng-container>
    <div class="ui divider"></div>
  `,
  styles: [],
})
export class ResultItemComponent implements OnInit {
  kind: string;
  @Input() item;
  constructor() {}

  ngOnInit(): void {
    this.kind = this.item.id.kind.split('#')[1];
  }
}
