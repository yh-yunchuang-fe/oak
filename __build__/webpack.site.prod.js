const config = require('./webpack.site.dev.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UploadToQiniuWebpackPlugin = require('upload-to-qiniu-webpack-plugin')
const qiniu = require('./qiniu.config.js')
delete config.devServer

// config.plugins.push(new BundleAnalyzerPlugin());
config.plugins.push(new UploadToQiniuWebpackPlugin({
    qiniuAccessKey: qiniu.ak,
    qiniuSecretKey: qiniu.sk,
    qiniuBucket: 'yhcms',
    qiniuZone: 'Zone_z0',
    uploadLogPath: __dirname,
}))

module.exports = Object.assign(config, {
    mode: 'production',
})