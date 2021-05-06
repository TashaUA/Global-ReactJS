const path = require('path');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.js',

  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  devtool: 'inline-source-map',
});
