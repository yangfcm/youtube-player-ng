import { IPlaylistItem } from './playlistItem';

export interface IPlaylistData {
  kind: string;
  items: IPlaylistItem[];
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
