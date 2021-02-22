const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
        entry: {
            app: './src/index.jsx',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "bundle.js"
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: [path.resolve(__dirname, './src'), 'node_modules'],
        },
        watch: false,
        module: {
            rules: [
                {
                    test: /\.(jsx|js)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    "targets": "defaults"
                                }],
                                '@babel/preset-react'
                            ]
                        }
                    }]
                },
                {
                    test: /\.(s*)css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                },
                {
                    test: /\.(jpeg|jpg|gif|png)$/i,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images/",
                        publicPath: "images/"
                    }
                },
                {
                    test: /\.(eot|otf|svg|ttf|woff|woff2)$/i,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts/",
                        publicPath: "fonts/"
                    }
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({template: 'src/index.html'}),
            new MiniCssExtractPlugin(),
        ]
};