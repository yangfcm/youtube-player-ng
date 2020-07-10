import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import { ICommentItem } from '../interfaces/commentItem';

@Component({
  selector: 'app-comment-form',
  template: `
    <!-- <app-google-auth
      ><div auth> -->
    <div class="ui form">
      <div class="field">
        <label>Publish your comment</label>
        <textarea rows="2" [(ngModel)]="commentText"></textarea>
      </div>
      <div class="ui red message" *ngIf="errorMessage">
        {{ errorMessage }}
      </div>
      <div>
        <button
          class="ui primary button"
          (click)="handlePublishComment()"
          [disabled]="!commentText.trim() || isPublishing"
        >
          Submit
        </button>
      </div>
    </div>
    <div class="ui divider"></div>
    <div *ngFor="let commentItem of publishedComments">
      <app-comment-item [commentItem]="commentItem"> </app-comment-item>
      <div class="ui divider"></div>
    </div>
    <!-- </div> 
    </app-google-auth> -->
  `,
  styles: [],
})
export class CommentFormComponent implements OnInit {
  @Input() props: any;

  get videoId() {
    return this.props.videoId;
  }
  get channelId() {
    return this.props.channelId;
  }

  commentText = '';
  errorMessage = '';
  publishedComments: ICommentItem[] = [];
  isPublishing = false;
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  handlePublishComment() {
    this.isPublishing = true;
    this.commentService
      .addComment(this.channelId, this.videoId, this.commentText)
      .subscribe(
        (data: ICommentItem) => {
          this.publishedComments.push(data);
          this.errorMessage = '';
        },
        (err) => {
          this.errorMessage = err;
        },
        () => {
          console.log('finish');
          this.commentText = '';
          this.isPublishing = false;
        }
      );
  }
}
