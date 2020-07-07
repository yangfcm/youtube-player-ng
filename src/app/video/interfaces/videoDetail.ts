interface IThumbnails {
  height: number;
  width: number;
  url: string;
}

export interface IVideoDetailData {
  kind: string;
  items: IVideoDetail[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface IVideoDetail {
  id: string;
  kind: string;
  snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    description: string;
    publishedAt: string;
    tags: string[];
    thumbnails: IThumbnails[];
    title: string;
  };
  statistics: {
    viewCount: string;
    commentCount: string;
    likeCount: string;
    dislikeCount: string;
  };
}
