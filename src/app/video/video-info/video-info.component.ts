import { Component, OnInit, Input } from '@angular/core';
import { IVideoDetail } from '../interfaces/videoDetail';

@Component({
  selector: 'app-video-info',
  template: `
    <p>
      video-info works!
    </p>
  `,
  styles: [],
})
export class VideoInfoComponent implements OnInit {
  @Input() videoDetail: IVideoDetail;
  constructor() {}

  ngOnInit(): void {}
}
