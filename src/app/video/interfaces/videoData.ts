import { IVideoItem } from './videoItem';

export interface IVideoData {
  kind: string;
  items: IVideoItem[];
  prevPageToken?: string;
  nextPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
