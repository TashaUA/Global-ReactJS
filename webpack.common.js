const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
        mode: process.env.NODE_ENV,
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: "js/[name].js",
            publicPath: "/"
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                'react-dom': '@hot-loader/react-dom',
            },
        },
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
                                '@babel/preset-react',
                                '@babel/preset-flow'
                            ],
                            plugins: ["@babel/plugin-proposal-class-properties",
                                "@babel/plugin-transform-runtime",
                                "@babel/plugin-syntax-dynamic-import"
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
            new MiniCssExtractPlugin({
                    filename: '[name].css'
                }
            ),
            new LoadablePlugin()
        ].filter(Boolean)
};