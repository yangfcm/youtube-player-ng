import { ICommentItem } from './commentItem';

export interface ICommentData {
  kind: string;
  items: ICommentItem[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  nextPageToken?: string;
}
