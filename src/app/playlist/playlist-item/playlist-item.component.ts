import { Component, OnInit, Input } from '@angular/core';
import { IPlaylistItem } from '../interfaces/playlistItem';

@Component({
  selector: 'app-playlist-item',
  template: `
    <div class="ui card centered">
      <a class="image" [routerLink]="'/playlist/' + playlist.id">
        <img [src]="playlist.snippet.thumbnails.medium.url" />
      </a>
      <div class="content">
        <a class="header" [routerLink]="'/playlist/' + playlist.id">{{
          playlist.snippet.title
        }}</a>

        <div
          class="ui blue label tiny"
          style="margin-left: 0; margin-top: 3px;"
        >
          {{ playlist.contentDetails.itemCount }} video<span
            *ngIf="playlist.contentDetails.itemCount > 1"
            >s</span
          >
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PlaylistItemComponent implements OnInit {
  @Input() playlist: IPlaylistItem;
  constructor() {}

  ngOnInit(): void {}
}
