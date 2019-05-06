const path = require('path');
const config = require('./webpack.site.dev.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

delete config.devServer;

// config.plugins.push(new BundleAnalyzerPlugin());
module.exports = Object.assign(config, {
    mode: 'production',
});