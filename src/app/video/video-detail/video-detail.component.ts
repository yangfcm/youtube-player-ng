import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../video.service';
import { IVideoDetail } from '../interfaces/videoDetail';

@Component({
  selector: 'app-video-detail',
  template: `
    <app-margin></app-margin>
    <app-loader *ngIf="!errorMessage && !videoDetail"></app-loader>
    <app-error-message *ngIf="errorMessage">
      {{ errorMessage }}
    </app-error-message>
    <ng-container *ngIf="!errorMessage && videoDetail"
      ><div class="ui grid stackable">
        <div class="sixteen wide tablet ten wide computer column">
          <app-video-player [videoId]="videoId"></app-video-player>
          <app-video-info [videoDetail]="videoDetail"></app-video-info>
          <app-margin></app-margin>
          <app-comment-list
            [videoId]="videoId"
            [channelId]="channelId"
          ></app-comment-list>
        </div>
        <div class="sixteen wide tablet six wide computer column">
          <app-sidebar-videos
            [playlistId]="playlistId"
            [videoId]="videoId"
          ></app-sidebar-videos>
        </div>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class VideoDetailComponent implements OnInit {
  videoDetail: IVideoDetail;
  errorMessage: string;
  videoId: string;
  playlistId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  get channelId() {
    return this.videoDetail.snippet.channelId;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.videoId = params.id;
    });
    this.route.queryParams.subscribe((params) => {
      this.playlistId = params.playlistId;
    });
    this.fetchVideoDetail();
  }

  fetchVideoDetail() {
    this.videoService.fetchVideo(this.videoId).subscribe(
      (data) => {
        console.log(data);
        if (!data) {
          this.router.navigateByUrl('/not-found');
          return;
        }
        this.videoDetail = data;
        this.errorMessage = '';
      },
      (err) => {
        this.videoDetail = undefined;
        this.errorMessage = err;
      }
    );
  }
}
