const pattern = /iphone|ipod|ipad/i;
pattern.test(window.navigator.appVersion) &&
  document.addEventListener(
    'blur',
    () => {
      document.body.scrollIntoView(false);
    },
    true
  );

module.exports = {};
