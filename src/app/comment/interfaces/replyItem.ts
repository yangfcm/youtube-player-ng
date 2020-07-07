export interface IReplyItem {
  id: string;
  kind: string;
  snippet: {
    authorChannelId: { value: string };
    authorChannelUrl: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    likeCount: number;
    parentId: string;
    publishedAt: string;
    textDisplay: string;
    textOriginal: string;
    updatedAt: string;
  };
}
