/* eslint import/prefer-default-export: 0 */
import trends from '../data/trends';

const apiUrl = 'https://twitter-demo.erodionov.ru/api/v1';
const token = process.env.REACT_APP_ACCESS_TOKEN;

export function getUserInfoById(id) {
  return fetch(`${apiUrl}/accounts/${id}?access_token=${token}`)
    .then(response => {
      if (!response.ok) {
        throw response.status;
      }

      return response.json();
    })
    .then(userInfo => ({
      id: userInfo.id,
      name: userInfo.display_name,
      username: userInfo.username,
      avatar: userInfo.avatar_static,
      background: userInfo.header_static,
      tweetsCount: userInfo.statuses_count,
      followingCount: userInfo.following_count,
      followersCount: userInfo.followers_count,
      likes: 0,
      lists: 0,
      about: userInfo.note,
      joined: userInfo.created_at,
      ownUrl: userInfo.url,
      official: !userInfo.bot,
    }));
}

export function getUserFollowers(userId) {
  return fetch(`${apiUrl}/accounts/${userId}/followers?access_token=${token}`)
    .then(response => {
      if (!response.ok) {
        throw response.status;
      }

      return response.json();
    })
    .then(followers =>
      followers.map(follower => ({
        id: follower.id,
        name: follower.display_name,
        username: follower.username,
        avatar: follower.avatar_static,
        about: follower.note,
        official: !follower.bot,
      })),
    );
}

export function getUserFollowing(userId) {
  return fetch(`${apiUrl}/accounts/${userId}/following?access_token=${token}`)
    .then(response => {
      if (!response.ok) {
        throw response.status;
      }

      return response.json();
    })
    .then(followers =>
      followers.map(follower => ({
        id: follower.id,
        name: follower.display_name,
        username: follower.username,
        avatar: follower.avatar_static,
        about: follower.note,
        official: !follower.bot,
      })),
    );
}

export function getUserTweets(userId) {
  return fetch(`${apiUrl}/accounts/${userId}/statuses?access_token=${token}`)
    .then(response => {
      if (!response.ok) {
        throw response.status;
      }

      return response.json();
    })
    .then(tweets =>
      tweets.map(tweet => ({
        id: tweet.id,
        content: tweet.content,
        time: tweet.created_at,
        replies: tweet.mentions.left,
        retweets: tweet.reblogs_count,
        likes: tweet.favourites_count,
        userFullName: tweet.account.display_name,
        userNickName: tweet.account.username,
        userAvatar: tweet.account.avatar_static,
        username: tweet.account.username,
        userId: tweet.account.id,
        media: tweet.media_attachments,
        pinned: tweet.pinned,
      })),
    );
}

export function getUserMediaPreview(userId) {
  return fetch(
    `${apiUrl}/accounts/${userId}/statuses?only_media=yes&access_token=${token}`,
  )
    .then(response => {
      if (!response.ok) {
        throw response.status;
      }

      return response.json();
    })
    .then(tweets => {
      const previews = tweets.map(tweet =>
        tweet.media_attachments.map(attachment => attachment.preview_url),
      );
      return [].concat(...previews);
    });
}

// Need user auth
export function getCommonFollowers(userId) {
  return getUserFollowers(userId);
}

export function getSuggestedUsers(userId) {
  return getUserFollowing(userId);
}

export function getTrends() {
  return Promise.resolve(trends);
}
