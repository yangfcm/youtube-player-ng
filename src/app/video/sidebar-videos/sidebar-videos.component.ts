import { Component, OnInit, Input } from '@angular/core';
import { PlaylistService } from '../../playlist/playlist.service';
import { SearchService } from '../../search/search.service';
import { IVideoData } from '../interfaces/videoData';
import { environment } from 'src/environments/environment';
import { ISearchResultData } from 'src/app/search/interfaces/searchResultData';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar-videos',
  template: `
    <app-loader *ngIf="!errorMessage && !sidebarVideosData"></app-loader>
    <app-error-message *ngIf="errorMessage"
      >{{ errorMessage }}
    </app-error-message>
    <ng-container *ngIf="!errorMessage && sidebarVideosData">
      <app-video-list [videos]="sidebarVideosData.items"></app-video-list>
      <div
        class="ui two column centered grid"
        *ngIf="sidebarVideosData.nextPageToken"
      >
        <div class="column">
          <app-more-button
            [nextPageToken]="sidebarVideosData.nextPageToken"
            (onNextPage)="handleNextPage($event)"
            >More videos...</app-more-button
          >
        </div>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class SidebarVideosComponent implements OnInit {
  @Input() playlistId: string;
  @Input() videoId: string;

  sidebarVideosData: IVideoData | ISearchResultData;
  errorMessage: string;
  isLoadingNextPage = false;

  constructor(
    private playlistService: PlaylistService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    if (this.playlistId) {
      this.fetchPlaylistVideos();
    } else if (this.videoId) {
      this.fetchRelatedVideos();
    }
  }

  fetchSidebarVideos(pageToken = '') {
    if (this.playlistId) {
      // If the video currently playing is from a particular playlist,
      // sidebar will fetch and display the other videos from the playlist
      this.fetchPlaylistVideos(pageToken);
    } else {
      // Otherwise, sidebar will fetch and display related videos.
      this.fetchRelatedVideos(pageToken);
    }
  }

  fetchPlaylistVideos(pageToken = '') {
    this.playlistService
      .fetchPlaylistDetails(this.playlistId, pageToken)
      .subscribe(
        (data: IVideoData) => {
          if (pageToken) {
            this.sidebarVideosData = {
              ...this.sidebarVideosData,
              items: (this.sidebarVideosData as IVideoData).items.concat(
                data.items
              ),
              nextPageToken: data.nextPageToken,
              pageInfo: data.pageInfo,
            };
          } else {
            this.sidebarVideosData = data;
          }
          this.errorMessage = '';
          this.isLoadingNextPage = false;
        },
        (err) => {
          this.errorMessage = err;
          this.sidebarVideosData = undefined;
        }
      );
  }

  fetchRelatedVideos(pageToken = '') {
    this.searchService
      .searchVideos(
        {
          relatedToVideoId: this.videoId,
          type: 'video',
        },
        pageToken
      )
      .subscribe(
        (data: ISearchResultData) => {
          if (pageToken) {
            this.sidebarVideosData = {
              ...this.sidebarVideosData,
              items: (this.sidebarVideosData as ISearchResultData).items.concat(
                data.items
              ),
              nextPageToken: data.nextPageToken,
              pageInfo: data.pageInfo,
            };
          } else {
            this.sidebarVideosData = data;
          }
          this.errorMessage = '';
          this.isLoadingNextPage = false;
        },
        (err) => {
          this.errorMessage = err;
          this.sidebarVideosData = undefined;
        }
      );
  }

  handleNextPage($event) {
    if (this.isLoadingNextPage) return;
    this.isLoadingNextPage = true;
    this.fetchSidebarVideos($event);
  }
}
