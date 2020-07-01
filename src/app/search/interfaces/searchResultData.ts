import { ISearchResultItem } from './searchResultItem';

export interface ISearchResultData {
  kind: string;
  prevPageToken?: string;
  nextPageToken?: string;
  items: ISearchResultItem[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
