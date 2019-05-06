const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV !== 'production';

const DIST = path.join(__dirname, '../docs/dist');
const sourcePath = [path.resolve(__dirname, '../docs/src'), path.resolve(__dirname, '../../src')];

module.exports = {
    entry: {
        docs: './docs/src/App.jsx',
    },
    mode: 'development',
    output: {
        path: DIST,
        filename: '[name].[hash:8].js',
        // chunkFilename: '[id].[hash:8].js',
        publicPath: isDev ? '/' : '//yh-yunchuang-fe.github.io/oak/',
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
                reactBase: {
                    name: 'react.base',
                    test: (module) => {
                        return /react|prop-types/.test(module.context);
                    },
                    chunks: 'initial',
                    priority: 10,
                },
                common: {
                    name: 'common',
                    chunks: 'initial',
                    priority: 2,
                    minChunks: 2,
                },
            }
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: sourcePath,
            use: [{
                loader: 'babel-loader?cacheDirectory=true',
            }]
        }, {
            test: /\.(sa|sc|c)ss$/,
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
                'sass-loader',
            ],
        }, {
            test: /\.md$/,
            use: ['raw-loader']
        }, {
            loader: 'webpack-ant-icon-loader',
            enforce: 'pre',
            include: [
                path.resolve('node_modules/@ant-design/icons/lib/dist')
            ]
        }],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [DIST],
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './docs/src/index.html',
            filename: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[hash:8].css',
            // chunkFilename: '[id].[hash:8].css',
        }),
    ]
};