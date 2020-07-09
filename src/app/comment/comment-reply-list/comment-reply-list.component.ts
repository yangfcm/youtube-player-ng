import { Component, OnInit, Input } from '@angular/core';
import { ICommentItem } from '../interfaces/commentItem';
import { IReplyData } from '../interfaces/replyData';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-reply-list',
  template: `
    <div *ngIf="commentItem.snippet.totalReplyCount > 0">
      <a (click)="handleToggleShowReplies()" style="cursor: pointer;"
        >{{ showReplies ? 'Hide' : 'Show' }}
        {{ commentItem.snippet.totalReplyCount }}
        {{ commentItem.snippet.totalReplyCount === 1 ? 'Reply' : 'Replies' }}
      </a>
      <div style="margin-bottom: 8px;"></div>
      <app-loader *ngIf="showReplies && !errorMessage && !replies"></app-loader>
      <app-error-message *ngIf="errorMessage">
        {{ errorMessage }}
      </app-error-message>
      <ng-container *ngIf="showReplies && replies"
        ><app-comment-item
          *ngFor="let replyItem of replies.items"
          [replyItem]="replyItem"
        ></app-comment-item>
        <div *ngIf="replies.nextPageToken">
          <a
            (click)="handleNextPage(replies.nextPageToken)"
            style="cursor: pointer;"
            class="ui red"
            >More replies...</a
          >
        </div>
      </ng-container>
    </div>
  `,
  styles: [],
})
export class CommentReplyListComponent implements OnInit {
  @Input() commentItem: ICommentItem;
  replies: IReplyData;
  errorMessage = '';
  showReplies = false;
  isLoadingNextPage = false;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  handleToggleShowReplies() {
    this.showReplies = !this.showReplies;
    if (this.replies) return;

    const commentId = this.commentItem.id;
    this.commentService.fetchCommentReplies(commentId).subscribe(
      (data: IReplyData) => {
        this.replies = data;
        this.errorMessage = '';
      },
      (err) => {
        this.errorMessage = err;
        this.replies = undefined;
      }
    );
  }

  handleNextPage($event) {
    if (this.isLoadingNextPage) return;
    this.isLoadingNextPage = true;
    this.commentService
      .fetchCommentReplies(this.commentItem.id, $event)
      .subscribe(
        (data: IReplyData) => {
          this.replies = {
            ...this.replies,
            items: this.replies.items.concat(data.items),
            nextPageToken: data.nextPageToken,
            pageInfo: data.pageInfo,
          };
          this.errorMessage = '';
        },
        (err) => {
          this.errorMessage = err;
          this.replies = undefined;
        },
        () => {
          this.isLoadingNextPage = false;
        }
      );
  }
}
