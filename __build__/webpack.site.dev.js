const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV !== 'production';

const DIST = path.join(__dirname, '../docs/dist');
const sourcePath = [path.resolve(__dirname, '../docs/src'), path.resolve(__dirname, '../../src')];

const config = {
    entry: {
        docs: './docs/src/App.jsx',
    },
    mode: 'development',
    output: {
        path: DIST,
        filename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
        chunkFilename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
        publicPath: isDev ? '/' : '//static.yonghuivip.com/',
    },
    devServer: {
        contentBase: DIST,
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '.',
            cacheGroups: {
                base: {
                    name: 'base',
                    test: (module) => {
                        return /react|prop-types|antd|rc-/.test(module.context);
                    },
                    chunks: 'initial',
                    priority: 10,
                },
                babel: {
                    name: 'babel',
                    test: (module) => {
                        return /babel|core-js/.test(module.context);
                    },
                    chunks: 'initial',
                    priority: 10,
                },
            },
        },
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: sourcePath,
            use: [{
                loader: 'babel-loader?cacheDirectory=true',
            }]
        }, {
            test: /\.(le|c)ss$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev,
                        reloadAll: true,
                    },
                },
                {
                    loader: 'css-loader',
                    options: {
                        import: true
                    }
                },
                //   'postcss-loader',
                'less-loader',
            ],
        }, {
            test: /\.md$/,
            use: ['raw-loader'],
        }, {
            test: /.(gif|jpg|png)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'images/[name].[hash:8].[ext]'
                }
            }]
        },],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [DIST],
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: './docs/src/index.html',
            filename: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: isDev ? '[name].css' : '[name].[contenthash:8].css',
            // chunkFilename: '[id].[hash:8].css',
        }),
    ],
};

isDev && config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;
