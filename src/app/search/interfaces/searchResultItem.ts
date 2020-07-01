interface IThumbnails {
  height: number;
  width: number;
  url: string;
}

export interface ISearchResultItem {
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
  };
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: IThumbnails;
      high: IThumbnails;
      medium: IThumbnails;
      standard: IThumbnails;
    };
    title: string;
  };
}
