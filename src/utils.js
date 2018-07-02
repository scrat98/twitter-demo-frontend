/* eslint import/prefer-default-export: 0 */

import numbro from 'numbro';
import { matchPath } from 'react-router-dom';

export function getFormattedTweets(tweets) {
  const shortNumberFormat = {
    thousandSeparated: true,
  };

  const longNumberFormat = {
    average: true,
    thousandSeparated: true,
    mantissa: 1,
    trimMantissa: true,
  };

  if (tweets < 10000) {
    return numbro(tweets)
      .format(shortNumberFormat)
      .toUpperCase();
  }

  return numbro(tweets)
    .format(longNumberFormat)
    .toUpperCase();
}

export function computeMatch(pathname, { path, strict, exact, sensitive }) {
  return !!matchPath(pathname, { path, strict, exact, sensitive });
}
