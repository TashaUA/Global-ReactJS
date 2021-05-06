const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';
module.exports = merge(common, {
    name: 'client',
    target: 'web',

    entry: [
        devMode && 'webpack-hot-middleware/client',
        './src/client.jsx',
    ].filter(Boolean),

    plugins: [
        devMode && new webpack.HotModuleReplacementPlugin(),
        (process.env.NODE_ENV === 'production') && new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: ['./dist/']}),
    ].filter(Boolean)
});