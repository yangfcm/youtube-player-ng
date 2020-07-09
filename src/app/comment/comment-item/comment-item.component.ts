import { Component, OnInit, Input } from '@angular/core';
import { ICommentItem } from '../interfaces/commentItem';

@Component({
  selector: 'app-comment-item',
  template: `
    <div class="ui feed">
      <div class="event">
        <div class="label">
          <img
            [src]="
              commentItem.snippet.topLevelComment.snippet.authorProfileImageUrl
            "
          />
        </div>
        <div class="content">
          <div class="summary">
            <a
              >{{
                commentItem.snippet.topLevelComment.snippet.authorDisplayName
              }}
            </a>
            <div class="date">
              {{
                commentItem.snippet.topLevelComment.snippet.publishedAt
                  | date: 'd LLL, yyyy'
              }}
            </div>
          </div>
          <div
            class="extra text"
            style="max-width: 100%;"
            [innerHTML]="
              commentItem.snippet.topLevelComment.snippet.textDisplay
            "
          ></div>
        </div>
      </div>
      <div class="ui divider"></div>
    </div>
  `,
  styles: [],
})
export class CommentItemComponent implements OnInit {
  @Input() commentItem: ICommentItem;
  constructor() {}

  ngOnInit(): void {}
}
