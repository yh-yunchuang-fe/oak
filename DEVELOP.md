# Development(开发者说明)

### Folders
```
|
|--- src          # oak weui source code
|
|--- docs         # documentation website layout and code
|
|--- demo         # oak weui demo weapp source code
|
|--- __build__    # oak build script
|
|--- package.json
```

## Local development

`Fork` and `git clone`.

### Component development

```s
$ npm install
$ npm start
```

###  Documentation development

```s
$ npm run docs:dev
```


## Creat new Demo Page or Component

### New Component

```s
$ npm run new -- --c {NewComponentName}

# Creat multiple components at once
$ npm run new -- --c {NewComponentName1,NewComponentName2,NewComponentName3}
```

### New Demo Page

```s
$ npm run new -- --p {NewPage}

# Creat multiple demp pages at once
$ npm run new -- --p {NewPage1,NewPage2,NewPage3}
```


## Build Release

```s
$ npm run build
```

## Publish site to [gh-pages](https://yh-yunchuang-fe.github.io/oak/)

```s
$ npm run docs
```

## 组件文档添加预览图

- 生成组件对应页面的小程序码并上传七牛
```s
$ npm run qrcode pages/button/index //生成小程序码
$ npm run upload_static //上传静态文件目录
```

- 在组件 Markdown 中添加以下文档

```text
<!--PreviewGifLink: https://static.yonghuivip.com/wechatapp/static/gif/button_1.gif --> // 录屏GIF
<!--PreviewQrCodeLink: https://static.yonghuivip.com/wechatapp/static/images/pages_button_index.png --> // 小程序码
```