const config = require('./webpack.site.dev.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UploadToQiniuWebpackPlugin = require('upload-to-qiniu-webpack-plugin');

delete config.devServer;

// config.plugins.push(new BundleAnalyzerPlugin());
config.plugins.push(new UploadToQiniuWebpackPlugin({
    qiniuAccessKey: 'rqLh8BpwLdcG************AYpE0sg-TaASlT',
    qiniuSecretKey: 'UiUBP4KH0zbP************Pv2fO7r6qHu6olC',
    qiniuBucket: 'yhcms',
    qiniuZone: 'Zone_z0',
    uploadLogPath: __dirname,
}));

module.exports = Object.assign(config, {
    mode: 'production',
});