# 快速上手
Oak 致力于为小程序开发者提供快速、高效、愉悦的开发体验。

> 使用 Oak 之前，请确保你开发过或者了解过小程序相关知识，如果没有请先阅读相关文档[小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)和[自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

<br/>

## 安装
#### 一、下载安装
直接下载 Oak 对应的release包即可，[点击下载](https://github.com/yh-yunchuang-fe/oak/releases)。

或者通过 git 下载 Oak 源代码，并将dist目录拷贝到自己的项目中。
```code
  git clone https://github.com/yh-yunchuang-fe/oak.git
```

#### 二、 通过 npm(yarn) 安装 (推荐)
小程序已经支持使用 npm 安装第三方包，详见 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)。

```code
# npm
npm install --save oak-weui

# yarn
yarn add oak-weui --production

```

<br/>

## 使用组件
在页面 `json` 中引入组件(以按钮组件为例)：

```json
// import in `page.json`:
"usingComponents": {
  "oak-button": "path/to/your/oakui/Button/button"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-button />
```

<br/>

## 在开发者工具中预览示例小程序
```bash
# 安装项目依赖
npm install

# 执行组件编译
npm start
```

打开[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，导入`demo`目录的项目就可以预览示例了。

## 自行构建
如果想自己维护工作流，我们推荐使用 [Gulp](https://gulpjs.com/) 进行构建和调试，相对于 [Webpack](https://webpack.js.org/) ,  Gulp更易于配置也能满足我们的需求。如果遇到问题，可以参考我们所用的 [Gulp配置](https://github.com/yh-yunchuang-fe/oak/blob/develop/__build__/gulpfile.babel.js)。理论上你可以利用前端生态圈中的各种脚手架进行开发，但是需要你自行配置。