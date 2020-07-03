export interface IPlaylistItem {
  id: string;
  kind: string;
  contentDetails: {
    itemCount: number;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: { url: string };
      high: { url: string };
      medium: { url: string };
    };
    title: string;
  };
}
