import { Component, OnInit, Input } from '@angular/core';
import { IAuth } from '../../auth/google-auth.service';
import { PlaylistService } from '../playlist.service';
import { IPlaylistData } from '../interfaces/playlistData';

@Component({
  selector: 'app-my-auth-playlist',
  template: `
    <app-loader *ngIf="!errorMessage && !playlistData"></app-loader>
    <app-error-message *ngIf="errorMessage"
      >{{ errorMessage }}
    </app-error-message>
    <ng-container *ngIf="!errorMessage && playlistData">
      <app-page-title> My Playlist</app-page-title>
      <!-- <app-error-message *ngIf="playlistData.items.length === 0">
          No playlist created
        </app-error-message> -->
      <app-playlist-list [playlists]="playlistData.items"></app-playlist-list>
      <app-margin></app-margin>
      <div
        class="ui two column centered grid"
        *ngIf="playlistData.nextPageToken"
      >
        <div class="column">
          <app-more-button
            [nextPageToken]="playlistData.nextPageToken"
            (onNextPage)="handleNextPage($event)"
            >More playlist...</app-more-button
          >
        </div>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class MyAuthPlaylistComponent implements OnInit {
  @Input() auth: IAuth;
  errorMessage = '';
  playlistData: IPlaylistData;
  isLoadingNextPage = false;

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    // this.auth = this.googleAuthService.googleAuth;
    // this.googleAuthService.authEmitter.subscribe(
    //   (data) => {
    //     this.ngZone.run(() => {
    //       this.auth = data;
    //       this.fetchMyPlaylist();
    //     });
    //   },
    //   (err) => {
    //     console.log(err.message);
    //     this.auth = {
    //       signedIn: false,
    //       user: undefined,
    //     };
    //   }
    // );

    if (this.auth && this.auth.signedIn) {
      this.fetchMyPlaylist();
    }
  }

  fetchMyPlaylist() {
    this.errorMessage = '';
    this.playlistService.fetchMyPlaylist().subscribe(
      (data) => {
        // console.log(data);
        this.errorMessage = '';
        this.playlistData = data;
      },
      (err) => {
        this.errorMessage = err;
        this.playlistData = undefined;
      }
    );
  }

  handleNextPage($event) {
    if (this.isLoadingNextPage) return;
    this.isLoadingNextPage = true;
    const pageToken = $event;
    this.playlistService.fetchMyPlaylist(pageToken).subscribe(
      (data) => {
        this.errorMessage = '';
        this.playlistData = {
          ...this.playlistData,
          items: this.playlistData.items.concat(data.items),
          nextPageToken: data.nextPageToken,
          pageInfo: data.pageInfo,
        };
      },
      (err) => {
        this.errorMessage = err;
        this.playlistData = undefined;
      },
      () => {
        this.isLoadingNextPage = false;
      }
    );
  }
}
