import { Component, OnInit, Input } from '@angular/core';
import { IVideoItem } from '../interfaces/videoItem';

@Component({
  selector: 'app-video-grid',
  template: `
    <div class="app-video-grid">
      <app-video-grid-item
        *ngFor="let video of videos"
        [video]="video"
      ></app-video-grid-item>
    </div>
  `,
  styles: [
    `
      .app-video-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
        gap: 1.8rem;
      }
    `,
  ],
})
export class VideoGridComponent implements OnInit {
  @Input() videos: IVideoItem[];
  constructor() {}

  ngOnInit(): void {}
}
