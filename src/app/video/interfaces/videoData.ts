import { IVideoItem } from './videoItem';

export interface IVideoData {
  kind: string;
  items: IVideoItem[];
  nextPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
