import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentReplyListComponent } from './comment-reply-list/comment-reply-list.component';

@NgModule({
  declarations: [
    CommentFormComponent,
    CommentListComponent,
    CommentItemComponent,
    CommentReplyListComponent,
  ],
  imports: [CommonModule, SharedModule, AuthModule],
  exports: [CommentListComponent],
})
export class CommentModule {}
