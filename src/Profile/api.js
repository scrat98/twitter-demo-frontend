/* eslint import/prefer-default-export: 0 */

import users from '../data/users';
import commonFollowers from '../data/commonFollowers';
import media from '../data/media';
import tweets from '../data/tweets';
import suggestedUsers from '../data/suggestedUsers';
import trends from '../data/trends';

export function isUserExist(userId) {
  return !(users.find(user => user.id === userId) === undefined);
}

export function getUserInfoById(id) {
  return users.find(user => user.id === id);
}

export function getCommonFollowers() {
  return commonFollowers;
}

export function getUserMediaPreview() {
  return media;
}

export function getUserTweets() {
  return tweets;
}

export function getSuggestedUsers() {
  return suggestedUsers;
}

export function getTrends() {
  return trends;
}
