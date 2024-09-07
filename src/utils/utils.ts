import qs from 'query-string';
import type { RemoveUrlQueryParams, UrlQueryParams } from '~/shared/types';

/**
 * Function to format a number in thousands (K) or millions (M) format depending on its value
 * @param {number} number - number to format
 * @param {number} digits - number of digits after the decimal point
 * @returns {string} formatted number
 */
export const getSuffixNumber = (number: number, digits: number = 1): string => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const lookupItem = lookup
    .slice()
    .reverse()
    .find((item) => number >= item.value);
  return lookupItem ? (number / lookupItem.value).toFixed(digits).replace(rx, '$1') + lookupItem.symbol : '0';
};

/**
 * Constructs a URL query string by adding/updating a key-value pairs based on the provided parameters.
 * @param {string} params - current URL query string
 * @param {string} key - key to add/update
 * @param {string} value - value associated with the key to add/update
 * @returns {string} - updated URL query string
 */
export const formUrlQuery = ({ params, key, value }: UrlQueryParams): string => {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true },
  );
};

/**
 * Constructs a URL query string by removing the specified keys from the provided parameters.
 * @param {string} params - current URL query string
 * @param {string[]} keysToRemove - keys to remove from the URL query string
 * @returns {string} - updated URL query string
 */
export const removeKeysFromUrlQuery = ({ params, keysToRemove }: RemoveUrlQueryParams): string => {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => delete currentUrl[key]);

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true },
  );
};
