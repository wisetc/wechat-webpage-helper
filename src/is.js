module.exports.wechat = function() {
  return /micromessenger/i.test(window.navigator.userAgent);
};

module.exports.ios = function() {
  return /iphone|ipod|ipad/i.test(window.navigator.appVersion);
};
