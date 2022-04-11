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
### 按钮颜色
按钮颜色有二种：主要颜色、普通颜色。默认为普通颜色
```html
<oak-button>Default</oak-button>
<oak-button color="primary">Primary</oak-button>
```
### 按钮大小
按钮大小有 large、middle、small、mini以及块状（block）五种尺寸：

1. 前四种尺寸通过设置`size`属性来控制，默认为中(`middle`)
2. 块状按钮通过`block`属性控制，宽度为父元素100%
```html
<oak-button block>Block</oak-button>
<oak-button block color="primary" size='large'>Large Block</oak-button>
<oak-button block color="primary" size='large' angle>Large Angle Block</oak-button>
<oak-button size='large'>Large</oak-button>
<oak-button size="middle">Middle</oak-button>
<oak-button size='small'>Small</oak-button>
<oak-button size='mini'>Mini</oak-button>
<oak-button color="primary" size='large'>Large</oak-button>
<oak-button color="primary" size="middle">Middle</oak-button>
<oak-button color="primary" size='small'>Small</oak-button>
<oak-button color="primary" size='mini'>Mini</oak-button>
```
### 填充模式
填充模式有 solid、outline、none 三种尺寸，默认为solid
```html
<oak-button color="primary" fill="solid">solid</oak-button>
<oak-button color="primary" fill="outline">outline</oak-button>
<oak-button color="primary" fill="none">none</oak-button>
```
### 按钮形状
按钮形状有 胶囊、圆角、直角 三种尺寸，默认为胶囊
```html
<oak-button>胶囊（默认）</oak-button>
<oak-button round>圆角</oak-button>
<oak-button angle>直角</oak-button>

<oak-button color="primary" fill="outline">胶囊（默认）</oak-button>
<oak-button color="primary" fill="outline" round>圆角</oak-button>
<oak-button color="primary" fill="outline" angle>直角</oak-button>

<oak-button color="primary" size='small'>胶囊（默认）</oak-button>
<oak-button color="primary" size='small' round >圆角 </oak-button>
<oak-button color="primary" size='small' angle >直角 </oak-button>
```
### 加载状态
添加 `loading` 属性即可让按钮处于加载状态，loading 状态下按钮与`disabled`具有相同的属性。
```html
<oak-button size='large' fill="outline" loading>Loading</oak-button>
<oak-button size='middle' fill="outline" loading>Loading</oak-button>
<oak-button size='small' fill="outline" loading>Loading</oak-button>

<oak-button color="primary" size='large' fill="outline" round loading>Loading</oak-button>
<oak-button color="primary" size='middle' fill="outline" round loading>Loading</oak-button>
<oak-button color="primary" size='small' fill="outline" round loading>Loading</oak-button>

<oak-button color="primary" size='large' loading>Loading</oak-button>
<oak-button color="primary" size='middle' loading>Loading</oak-button>
<oak-button color="primary" size='small' loading>Loading</oak-button>
```
### 待唤起
添加 `waiting` 属性即可让按钮处于待唤起状态
```html
<oak-button fill="outline" round waiting>waiting</oak-button>
<oak-button color="primary" round waiting>waiting</oak-button>
<oak-button color="primary" fill="outline" round waiting>waiting</oak-button>
```
### 禁用状态
添加 `disabled` 属性即可让按钮处于待禁用状态
```html
<oak-button fill="outline" round disabled>disabled</oak-button>
<oak-button color="primary" disabled>disabled</oak-button>
<oak-button color="primary" fill="outline" round disabled>disabled</oak-button>
```

### 按钮+图标
在按钮中嵌入图标有两种方式：

1. 设置 `icon` 属性，传入icon的名称。
2. 直接使用 `<Icon />` 组件。
```html
<oak-button icon="down-bold" color="primary" round>分类</oak-button>
<oak-button icon="down-bold" color="primary" size="small" fill="outline">分类</oak-button>
<oak-button icon="close-facet" color="primary" size="small">取消</oak-button>
<oak-button icon="refresh" size="small">刷新</oak-button>
<oak-button icon="down-bold" color="primary" size="small" fill="none">分类</oak-button>
```

## API
通过设置 Button 的属性来控制按钮不同样式。

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| color | 按钮颜色，可选值为 `primary`、`default`, 或者不设 | `string` | `default` |
| size | 按钮大小，可选值为 `large`、`middle`、`small`、`mini`, 或者不设| `string` | `middle` |
| fill | 填充模式，可选值为 `solid`、`outline`、`none`, 或者不设| `string` | `solid` |
| block | 是否是块级元素| `boolen` | `false` |
| round | 按钮形状-圆角| `boolen` | `false` |
| angle | 按钮形状-直角| `boolen` | `false` |
| waiting | 待唤起状态 | `boolen` | `false` |
| disabled | 按钮不可用 | `boolen` | `false` |
| loading | 加载状态 | `boolen` | `false` |
| loading-text | Loading 时显示的文案| `string` | - |
| icon | 图标名 | `string` | - |
| form-type | 同原生button，支持2.10.3以上版本 | `string` | - |

> 其他属性与小程序 [button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) 组件同步。

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| button-class | 作用于按钮 |
| hover-class | 设置按钮hover时的样式 |
| loading-class | 作用于loader |



<!--PreviewGifLink: https://static.yonghuivip.com/wechatapp/static/gif/button_2.gif?2 -->
<!--PreviewQrCodeLink: https://static.yonghuivip.com/wechatapp/static/images/pages_button_index.png -->