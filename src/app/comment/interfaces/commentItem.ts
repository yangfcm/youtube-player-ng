export interface ICommentItem {
  id: string;
  kind: string;
  snippet: {
    videoId: string;
    totalReplyCount: number;
    canReplay: boolean;
    topLevelComment: {
      id: string;
      kind: string;
      snippet: {
        authorChannelId: {
          value: string;
        };
        authorChannelUrl: string;
        authorDisplayName: string;
        authorProfileImageUrl: string;
        likeCount: number;
        publishedAt: string;
        textDisplay: string;
        textOriginal: string;
        updatedAt: string;
        videoId: string;
      };
    };
  };
}
