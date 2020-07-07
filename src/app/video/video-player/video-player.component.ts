import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  template: `
    <div>
      <div class="app-player-container">
        <iframe
          [src]="videoSrc"
          alt="video"
          title="video player"
          class="app-player"
        ></iframe>
      </div>
    </div>
  `,
  styles: [
    `
      .app-player-container {
        position: relative;
        max-width: 100%;
        height: 0;
        overflow: hidden;
        background: #dcddde;
        padding-bottom: 62%;
      }
      .app-player {
        width: 100%;
        height: 100%;
        position: absolute;
      }
    `,
  ],
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoId: string;
  videoSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoId}`
    );
  }
}
