interface IThumbnails {
  height: number;
  width: number;
  url: string;
}

export interface IVideoItem {
  id: string;
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    publishedAt: string;
    tags: string[];
    thumbnails: {
      default: IThumbnails;
      high: IThumbnails;
      medium: IThumbnails;
      standard: IThumbnails;
    };
    title: string;
  };
  statistics?: {
    commentCount: string;
    dislikeCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
}
