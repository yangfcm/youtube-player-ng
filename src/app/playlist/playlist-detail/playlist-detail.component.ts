import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistService } from '../playlist.service';
import { IVideoData } from '../../video/interfaces/videoData';
import { environment } from '../../../environments/environment';

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
      <div
        class="ui two column centered grid"
        *ngIf="playlistDetailData.nextPageToken"
      >
        <div class="column">
          <app-more-button
            [nextPageToken]="playlistDetailData.nextPageToken"
            (onNextPage)="handleNextPage($event)"
            >More playlist...</app-more-button
          >
        </div>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class PlaylistDetailComponent implements OnInit {
  playlistDetailData: IVideoData;
  errorMessage: string;
  playlistId: string;
  isLoadingNextPage = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playlistService: PlaylistService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playlistId = params.id;
    });

    this.playlistService.fetchPlaylistDetails(this.playlistId).subscribe(
      (data: IVideoData) => {
        console.log(data);
        this.playlistDetailData = data;
        this.errorMessage = '';
      },
      (err) => {
        console.log(err);
        if (err === environment.errorMessage.notFound) {
          this.router.navigateByUrl('/not-found');
        } else {
          this.errorMessage = err;
          this.playlistDetailData = undefined;
        }
      }
    );
  }

  handleNextPage($event) {
    if (this.isLoadingNextPage) return; // Avoid duplicate request.
    this.isLoadingNextPage = true;
    this.playlistService
      .fetchPlaylistDetails(this.playlistId, $event)
      .subscribe(
        (data) => {
          this.playlistDetailData = {
            ...this.playlistDetailData,
            items: this.playlistDetailData.items.concat(data.items),
            nextPageToken: data.nextPageToken,
            pageInfo: data.pageInfo,
          };
          this.errorMessage = '';
        },
        (err) => {
          this.errorMessage = err;
          this.playlistDetailData = undefined;
        },
        () => {
          this.isLoadingNextPage = false;
        }
      );
  }
}
