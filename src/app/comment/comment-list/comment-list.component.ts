import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import { ICommentData } from '../interfaces/commentData';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-comment-list',
  template: `
    <app-margin></app-margin>
    <app-loader *ngIf="!errorMessage && !commentData"></app-loader>
    <app-user-message *ngIf="errorMessage === commentsDisabled">
      {{ commentsDisabled }}</app-user-message
    >
    <app-error-message
      *ngIf="errorMessage && errorMessage !== commentsDisabled"
      >{{ errorMessage }}</app-error-message
    >
    <ng-container *ngIf="!errorMessage && commentData"
      ><h3 class="ui header">
        <i class="comments icon"></i>
        <div class="content">
          Comments
        </div>
      </h3>
      <app-comment-form-auth
        [videoId]="videoId"
        [channelId]="channelId"
      ></app-comment-form-auth>
      <app-user-message *ngIf="commentData.items.length === 0"
        >No comment</app-user-message
      >

      <ng-container *ngFor="let commentItem of commentData.items">
        <app-comment-item [commentItem]="commentItem"> </app-comment-item>
        <div style="padding-left: 5%;">
          <app-comment-reply-list
            [commentItem]="commentItem"
          ></app-comment-reply-list>
        </div>
        <div class="ui divider"></div>
      </ng-container>
      <div
        class="ui two column centered grid"
        *ngIf="commentData.nextPageToken"
      >
        <div class="column">
          <app-more-button
            [nextPageToken]="commentData.nextPageToken"
            (onNextPage)="handleNextPage($event)"
            >More comments...</app-more-button
          >
        </div>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class CommentListComponent implements OnInit {
  @Input() videoId: string;
  @Input() channelId: string;
  commentData: ICommentData;
  errorMessage: string;
  isLoadingNextPage = false;
  commentsDisabled = environment.errorMessage.commentDisabled;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.fetchComments();
  }

  ngOnChanges(): void {
    this.fetchComments();
  }

  fetchComments() {
    this.commentService.fetchComments(this.videoId).subscribe(
      (data: ICommentData) => {
        this.commentData = data;
        this.errorMessage = '';
      },
      (err) => {
        this.commentData = undefined;
        this.errorMessage = err;
      }
    );
  }

  handleNextPage($event) {
    if (this.isLoadingNextPage) return;
    this.isLoadingNextPage = true;
    this.commentService.fetchComments(this.videoId, $event).subscribe(
      (data: ICommentData) => {
        this.commentData = {
          ...this.commentData,
          items: this.commentData.items.concat(data.items),
          nextPageToken: data.nextPageToken,
          pageInfo: data.pageInfo,
        };
        this.errorMessage = '';
      },
      (err) => {
        this.errorMessage = err;
        this.commentData = undefined;
      },
      () => {
        this.isLoadingNextPage = false;
      }
    );
  }
}
