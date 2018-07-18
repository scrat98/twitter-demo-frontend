/* eslint import/prefer-default-export: 0 */

import numbro from 'numbro';
import { matchPath } from 'react-router-dom';
import { format } from 'date-fns';

export function getFormattedNumber(number) {
  const shortNumberFormat = {
    thousandSeparated: true,
  };

  const longNumberFormat = {
    average: true,
    thousandSeparated: true,
    mantissa: 1,
    trimMantissa: true,
  };

  if (number < 10000) {
    return numbro(number)
      .format(shortNumberFormat)
      .toUpperCase();
  }

  return numbro(number)
    .format(longNumberFormat)
    .toUpperCase();
}

export function getFormattedDate(timestamp, formatPattern = 'MMMM YYYY') {
  return format(timestamp, formatPattern);
}

export function computeMatch(pathname, { path, strict, exact, sensitive }) {
  return !!matchPath(pathname, { path, strict, exact, sensitive });
}
