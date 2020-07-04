export interface IChannelIntro {
  id: string;
  kind: string;
  snippet: {
    title: string;
    country: string;
    description: string;
    punishedAt: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
  };
  statistics: {
    commentCount: string;
    subscriberCount: string;
    videoCount: string;
    viewCount: string;
  };
}
