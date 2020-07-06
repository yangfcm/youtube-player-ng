import { Component, OnInit, Input } from '@angular/core';
import { IPlaylistItem } from '../interfaces/playlistItem';

@Component({
  selector: 'app-playlist-list',
  template: `
    <app-error-message *ngIf="!playlists || playlists.length === 0">
      No playlist created
    </app-error-message>
    <div
      class="app-subscribed-channel-container"
      *ngIf="playlists && playlists.length > 0"
    >
      <app-playlist-item
        *ngFor="let playlist of playlists"
        [playlist]="playlist"
      ></app-playlist-item>
    </div>
  `,
  styles: [
    `
      .app-subscribed-channel-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
        gap: 0.5rem;
      }
    `,
  ],
})
export class PlaylistListComponent implements OnInit {
  @Input() playlists: IPlaylistItem[];
  constructor() {}

  ngOnInit(): void {}
}
