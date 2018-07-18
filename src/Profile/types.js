// @flow

export type UserInfo = {
  id: number,
  name: string,
  username: string,
  avatar: string,
  background: string,
  tweetsCount: string,
  followingCount: number,
  followersCount: number,
  likes: number,
  lists: number,
  about: string,
  joined: number,
  ownUrl: string,
  official: boolean | null,
};

export type FollowerInfo = {
  id: number,
  name: string,
  username: string,
  avatar: string,
  about: string,
  official: boolean | null,
};

export type Attachment = {
  id: number,
  type: 'image' | 'video' | 'gifv' | 'unknown',
  url: string,
  remote_url: string | null,
  preview_url: string,
  text_url: string | null,
  meta: string | null,
  description: string | null,
};

export type Tweet = {
  id: number,
  content: string,
  time: number,
  replies: number,
  retweets: number,
  likes: number,
  userFullName: string,
  userNickName: string,
  userAvatar: string,
  username: string,
  userId: number,
  media: Attachment[],
  pinned: boolean,
};

export type MediaPreview = {
  preview_url: string,
};

export type Trend = {
  caption: string,
  description?: string,
  tweets: number,
};
