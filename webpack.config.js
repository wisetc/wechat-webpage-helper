// @ts-check
/** @typedef {import('webpack').Configuration} Configuration */
const path = require('path');

/**
 * @param {Configuration[]} options
 * @returns {Configuration[]}
 */
function mapCommon(options) {
  return options.map(opt => ({
    ...opt,
    mode: 'production',
    resolve: {
      extensions: ['.js'],
    },
    module: {
      rules: [
        {
          test: /.*\.js$/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  }));
}

/** @type {Configuration} */
module.exports = mapCommon([
  {
    entry: './src/ios-input-polyfill.js',
    output: {
      filename: 'ios-input-polyfill.js',
      path: path.resolve('./lib'),
      libraryTarget: 'umd',
    },
  },
  {
    entry: './src/is.js',
    output: {
      filename: 'is.js',
      path: path.resolve('./lib'),
      library: 'WeHelper.is',
      libraryTarget: 'umd',
    },
  },
  {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve('./lib'),
      library: 'WeHelper',
      libraryTarget: 'umd',
    },
  },
]);
