import { Component, OnInit, Input } from '@angular/core';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { EmptyComponent } from '../../shared/empty/empty.component';

@Component({
  selector: 'app-comment-form-auth',
  template: `<app-google-auth
    [AuthedComponent]="CommentFormComponent"
    [UnauthedComponent]="EmptyComponent"
    [props]="props"
  ></app-google-auth> `,
  styles: [],
})
export class CommentFormAuthComponent implements OnInit {
  @Input() channelId: string;
  @Input() videoId: string;
  CommentFormComponent = CommentFormComponent;
  EmptyComponent = EmptyComponent;

  get props() {
    return {
      channelId: this.channelId,
      videoId: this.videoId,
    };
  }
  constructor() {}

  ngOnInit(): void {}
}
