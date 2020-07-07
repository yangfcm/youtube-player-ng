import { IReplyItem } from './replyItem';

export interface IReplyData {
  kind: string;
  items: IReplyItem[];
  pageInfo: {
    resultsPerPage: number;
  };
  nextPageToken?: string;
}
