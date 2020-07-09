import { Component, OnInit, Input } from '@angular/core';
import { ICommentItem } from '../interfaces/commentItem';
import { IReplyItem } from '../interfaces/replyItem';

@Component({
  selector: 'app-comment-item',
  template: `
    <div class="ui feed">
      <div class="event">
        <div class="label">
          <img [src]="commentReplyItem.authorProfileImageUrl" />
        </div>
        <div class="content">
          <div class="summary">
            <a>{{ commentReplyItem.authorDisplayName }} </a>
            <div class="date">
              {{ commentReplyItem.publishedAt | date: 'd LLL, yyyy' }}
            </div>
          </div>
          <div
            class="extra text"
            style="max-width: 100%;"
            [innerHTML]="commentReplyItem.textDisplay"
          ></div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class CommentItemComponent implements OnInit {
  @Input() commentItem: ICommentItem;
  @Input() replyItem: IReplyItem;

  constructor() {}
  get commentReplyItem() {
    if (this.commentItem) {
      return {
        authorProfileImageUrl: this.commentItem.snippet.topLevelComment.snippet
          .authorProfileImageUrl,
        authorDisplayName: this.commentItem.snippet.topLevelComment.snippet
          .authorDisplayName,
        publishedAt: this.commentItem.snippet.topLevelComment.snippet
          .publishedAt,
        textDisplay: this.commentItem.snippet.topLevelComment.snippet
          .textDisplay,
      };
    }
    if (this.replyItem) {
      return {
        authorProfileImageUrl: this.replyItem.snippet.authorProfileImageUrl,
        authorDisplayName: this.replyItem.snippet.authorDisplayName,
        publishedAt: this.replyItem.snippet.publishedAt,
        textDisplay: this.replyItem.snippet.textDisplay,
      };
    }
    return {};
  }
  ngOnInit(): void {}
}
