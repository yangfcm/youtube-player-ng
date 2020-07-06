import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from '../channel.service';
import { IPlaylistData } from '../../playlist/interfaces/playlistData';

@Component({
  selector: 'app-channel-playlist',
  template: `
    <app-margin></app-margin>
    <app-loader *ngIf="!errorMessage && !playlistData"></app-loader>
    <app-error-message *ngIf="errorMessage">{{
      errorMessage
    }}</app-error-message>
    <ng-container *ngIf="playlistData && !errorMessage">
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
export class ChannelPlaylistComponent implements OnInit {
  errorMessage = '';
  playlistData: IPlaylistData;
  isLoadingNextPage = false;
  channelId: string;
  channelTitle: string;

  constructor(
    private route: ActivatedRoute,
    private channelService: ChannelService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.channelId = data.channelIntro.id;
      this.channelService.fetchChannelPlaylist(this.channelId, '').subscribe(
        (data) => {
          this.errorMessage = '';
          this.playlistData = data;
        },
        (err) => {
          this.errorMessage = err;
          this.playlistData = undefined;
        }
      );
    });
  }

  handleNextPage($event) {
    if (this.isLoadingNextPage) return; // Avoid duplicate request.
    this.isLoadingNextPage = true;
    this.channelService.fetchChannelPlaylist(this.channelId, $event).subscribe(
      (data) => {
        this.playlistData = {
          ...this.playlistData,
          items: this.playlistData.items.concat(data.items),
          nextPageToken: data.nextPageToken,
          pageInfo: data.pageInfo,
        };
        this.errorMessage = '';
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
