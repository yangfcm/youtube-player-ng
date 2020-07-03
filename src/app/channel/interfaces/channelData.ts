import { IChannelItem } from './channelItem';

export interface IChannelData {
  kind: string;
  items: IChannelItem[];
  prevPageToken?: string;
  nextPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
