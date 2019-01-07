const path = require('path');

const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const metadata = require('./package.json');

module.exports = {
    entry: {
        main: [
            path.join(__dirname, 'src', 'index.scss'),
            path.join(__dirname, 'src', 'index.jsx'),
        ],
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.m?jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                '@babel/plugin-syntax-dynamic-import'
                            ],
                            presets: [
                                ['@babel/preset-env', {
                                    useBuiltIns: 'usage',
                                }],
                                '@babel/preset-react',
                            ],
                        },
                    }
                ],
            },
            {
                exclude: /node_modules/,
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer(),
                            ],
                        },
                    },
                ],
            },
            {
                exclude: /node_modules/,
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    enforce: true,
                    name: 'vendor',
                    test: /node_modules/,
                },
            },
        },
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/[name].[hash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: path.join(__dirname, 'src', 'favicon.ico'),
            filename: path.join('..', 'index.html'),
            meta: {
                author: metadata.author,
                description: metadata.description,
                keywords: metadata.keywords.join(','),
                viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
            },
            template: path.join(__dirname, 'src', 'index.html'),
            title: '',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css',
        }),
        new OptimizeCssAssetsPlugin({}),
    ],
};
