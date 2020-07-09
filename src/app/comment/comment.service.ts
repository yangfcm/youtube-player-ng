import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';
import { environment } from '../../environments/environment';
import { ICommentData } from './interfaces/commentData';
import { ICommentItem } from './interfaces/commentItem';
import { IReplyData } from './interfaces/replyData';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  /** Fetch the comments for a video
   * If user is logged in, it will also fetch the comments by the user
   */
  fetchComments(videoId: string, pageToken = '', order = 'relevance') {
    const accessToken = localStorage.getItem('access_token');
    return this.http
      .get<ICommentData>(`${this.apiUrl}/commentThreads`, {
        headers: {
          Authorization: accessToken,
        },
        params: {
          key: environment.apiKey,
          part: 'snippet',
          videoId,
          pageToken,
          maxResults: '12',
          order: order === 'relevance' ? 'relevance' : 'time',
        },
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          const errorMessage = this.errorService.createErrorMessage(
            err,
            environment.errorMessage.failedToFetchComment
          );
          throw errorMessage;
        })
      );
  }

  /** Add a comment. Auth required */
  addComment(channelId: string, videoId: string, commentText: string) {
    const accessToken = localStorage.getItem('access_token');
    const requestBody = {
      snippet: {
        channelId,
        videoId,
        topLevelComment: {
          snippet: {
            textOriginal: commentText,
          },
        },
      },
    };
    return this.http
      .post<ICommentItem>(`${this.apiUrl}/commentThreads`, requestBody, {
        headers: {
          Authorization: accessToken,
        },
        params: {
          key: environment.apiKey,
          part: 'snippet',
        },
      })
      .pipe(
        catchError((err) => {
          const errorMessage = this.errorService.createErrorMessage(
            err,
            environment.errorMessage.failedToFetchComment
          );
          throw errorMessage;
        })
      );
  }

  /** Fetch replies to a comment */
  fetchCommentReplies(commentId: string, pageToken = '') {
    const accessToken = localStorage.getItem('access_token');
    return this.http
      .get<IReplyData>(`${this.apiUrl}/comments`, {
        params: {
          key: environment.apiKey,
          part: 'snippet',
          parentId: commentId,
          maxResults: '12',
          pageToken,
        },
      })
      .pipe(
        catchError((err) => {
          const errorMessage = this.errorService.createErrorMessage(
            err,
            environment.errorMessage.failedToFetchComment
          );
          throw errorMessage;
        })
      );
  }
}
