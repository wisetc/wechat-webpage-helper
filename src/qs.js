/**
 * Get value by query key.
 * @param {string} href
 * @param {string} key
 */
module.exports.getValue = function getValue(href, key) {
  // is there hash mark? 'use right' : use default
  const path = href.includes('#/') ? href.split('#/')[1] : href;

  if (!path.includes('?')) return;

  // there must be a question mark.
  const arr = path.split('?');
  const seg = arr[1];

  if (!seg) return;
  else if (!seg.includes(key)) return;

  // key must be in seg.
  const lPairStr = seg.split('&');
  // there are many paris
  const pairStr = lPairStr.find(p => p.includes(key));
  // = in pair or not, first item will be key
  const lPair = pairStr.split('=');
  if (lPair.length === 1) return '';
  else return lPair[1];
};

/**
 * 放入 query 参数
 * @param {string} href
 * @param {string} pair
 */
module.exports.putQuery = function putQuery(href, pair) {
  if (!href.includes('?')) {
    return href + `?${pair}`;
  } else {
    return href + `&${pair}`;
  }
};
