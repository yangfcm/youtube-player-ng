export interface IChannelItem {
  id: string;
  kind: string;
  snippet: {
    channelId: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: { url: string };
      high: { url: string };
      medium: { url: string };
    };
    title: string;
    resourceId: {
      channelId: string;
      kind: string;
    };
  };
}
