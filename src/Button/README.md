# Button 按钮
用于承载用户的点击操作

## 使用

在页面 `json` 中引入按钮组件：

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


## 代码演示
### 按钮类型
按钮类型有四种：主要按钮、普通按钮、危险按钮、信息按钮。默认为普通按钮
```html
<oak-button>Default</oak-button>
<oak-button type="primary">Primary</oak-button>
<oak-button type="danger">Danger</oak-button>
<oak-button type="info">Info</oak-button>
```
### 按钮大小
按钮大小有 大、中、小以及块状四种尺寸。块状按钮宽度为父元素100%。
通过设置`size`属性来控制，默认为中(`Default`)。
```html
<oak-button size='block'
            type="primary">Block</oak-button>
<oak-button size='large'>Large</oak-button>
<oak-button type="danger">Default</oak-button>
<oak-button size='small'
            type="info">Small</oak-button>
```
### 图标按钮
在按钮中嵌入图标有两种方式：

1. 设置 `icon` 属性，传入icon的名称。
2. 直接使用 `<Icon />` 组件。
```html
 <oak-button icon="downloader"
            type="primary"
            size="large">Downloader</oak-button>
<oak-button icon="search">Search</oak-button>
<oak-button icon="wechat"
            size='small'
            type="info">Wechat</oak-button>
<oak-button size="block"><Icon name='cart' /> 使用icon组件</oak-button>
```

### 按钮透明
设置`plain`属性可以使按钮的内容反色，背景透明。
```html
<oak-button plain>Default</oak-button>
<oak-button plain
            type="primary">Primary</oak-button>
<oak-button plain
            type="danger">Danger</oak-button>
<oak-button plain
            type="info">Info</oak-button>
```

### 按钮不可用
设置`disabled`属性使按钮变为不可用状态。
```html
<oak-button disabled>Default</oak-button>
<oak-button disabled
            type="primary">Primary</oak-button>
<oak-button disabled
            type="danger">Danger</oak-button>
<oak-button disabled
            type="info">Info</oak-button>
```

### 加载状态
添加 `loading` 属性即可让按钮处于加载状态，loading 状态下按钮与`disabled`具有相同的属性。
同时可以通过 `loaderColor` 控制loading的颜色。
```html
<oak-button loading
            size='block'
            loaderColor="#fff"
            type="primary"> 加载中...</oak-button>
<oak-button loading
            size='large'> Loading</oak-button>
<oak-button loading
            loaderColor="#fff"
            type="danger"> Loading</oak-button>
<oak-button loading
            size='small'
            type="info"> Loading</oak-button>
```

### 按钮形状
按钮形状有三种：圆角(`round`)、圆形(`circle`)、扁平(`square`)，不设置为默认样式。
```html
<oak-button>Default</oak-button>
<oak-button shape='circle'>Circle</oak-button>
<oak-button shape='round'>Round</oak-button>
<oak-button shape='square'>Square</oak-button>
```

## API
通过设置 Button 的属性来控制按钮不同样式。

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 按钮类型，可选值为 `primary`、`danger`、`info`, 或者不设 | string | `default` |
| size | 按钮大小，可选值为 `large`、`small`、`block`, 或者不设| string | `default` |
| plain | 背景透明，内容反色| boolen | `false` |
| icon | 图标名 | string | - |
| disabled | 按钮不可用 | boolen | `false` |
| loading | 加载状态 | boolen | `false` |
| loader-color | Loading 颜色| string | - |
| loader-size | Loading 大小， 参考 [Loading 组件](https://yh-yunchuang-fe.github.io/oak/#/components/Loading) | string | - |
| shape | 按钮形状，可选值为 `circle`、`round`、`square`, 或者不设| string | - |

> 其他属性与小程序 [button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) 组件同步。

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| hover-class | 设置按钮hover时的样式 |
| button-class | 作用于按钮 |







### 以下 Doc 配置

<!--PreviewGifLink: https://static.yonghuivip.com/wechatapp/static/gif/button_1.gif -->
<!--PreviewQrCodeLink: https://static.yonghuivip.com/wechatapp/static/images/pages_button_index.png -->