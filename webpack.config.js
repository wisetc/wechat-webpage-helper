// @ts-check
/** @typedef {import('webpack').Configuration} Configuration */
const path = require('path');

/**
 * @param {Configuration[]} options
 * @returns {Configuration[]}
 */
function mapCommon(options) {
  return options.map(opt => ({ ...opt, mode: 'production' }));
}

/** @type {Configuration} */
module.exports = mapCommon([
  {
    entry: './src/ios-input-polyfill.js',
    output: {
      filename: 'ios-input-polyfill.js',
      path: path.resolve('./lib'),
      libraryTarget: 'commonjs2',
    },
  },
  {
    entry: './src/is.js',
    output: {
      filename: 'is.js',
      path: path.resolve('./lib'),
      libraryTarget: 'commonjs',
    },
  },
  {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve('./lib'),
      libraryTarget: 'commonjs',
    },
  },
]);
