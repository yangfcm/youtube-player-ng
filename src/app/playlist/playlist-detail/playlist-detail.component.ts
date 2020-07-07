import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../playlist.service';
import { IVideoData } from '../../video/interfaces/videoData';

@Component({
  selector: 'app-playlist-detail',
  template: `
    <app-margin></app-margin>
    <app-loader *ngIf="!errorMessage && !playlistDetailData"></app-loader>
    <app-error-message *ngIf="errorMessage"
      >{{ errorMessage }}
    </app-error-message>
    <ng-container *ngIf="!errorMessage && playlistDetailData">
      <app-video-list [videos]="playlistDetailData.items"></app-video-list>
    </ng-container>
  `,
  styles: [],
})
export class PlaylistDetailComponent implements OnInit {
  playlistDetailData: IVideoData;
  errorMessage: string;
  playlistId: string;

  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playlistId = params.id;
    });

    this.playlistService.fetchPlaylistDetails(this.playlistId).subscribe(
      (data) => {
        console.log(data);
        this.playlistDetailData = data;
        this.errorMessage = '';
      },
      (err) => {
        console.log(err);
        this.errorMessage = err;
        this.playlistDetailData = undefined;
      }
    );
  }
}
