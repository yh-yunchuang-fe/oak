# Avatar 头像

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-avatar": "path/to/your/oakui/Avatar/avatar"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-avatar />
```

## 代码演示

### 基础用法
```html
<oak-avatar>YH</oak-avatar>
```

### 头像尺寸
头像有三种尺寸可选， 默认以及 `large` 和 `small`。也可以自己传入尺寸, 如: ` size="64rpx" `。
```html
<oak-avatar size="small"
    icon="nickname" />
<oak-avatar icon="nickname" />
<oak-avatar icon="nickname"
    size="large" />
```

### 头像形状
有两种形状， `square` 和 `circle`。
```html
 <oak-avatar icon="nickname"
    shape="square" />
<oak-avatar icon="nickname" />
```

### 头像类型
支持三种类型：图片、Icon 以及字符。
```html
<oak-avatar>A</oak-avatar>
<oak-avatar icon="nickname" />
<oak-avatar
    src="https://static.yonghuivip.com/0fe90feecdec371ac2fc4203a47e1f4b-3afa10a44030ebeb7948da1efc63c4fa.png?v=1510536110368" />
```

### 自定义颜色
可以自定义字体/图标颜色及背景色。
```html
<oak-avatar color="#FF4600"
    background="rgb(243, 216, 199)">B</oak-avatar>
<oak-avatar background="#00a5e0">C</oak-avatar>
```

## API
API说明。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| icon | 设置头像的图标类型，参考 Icon 组件 | `String` | - |
| shape | 指定头像的形状 | `Enum{ 'circle', 'square' }` | circle |
| size | 设置头像的大小 | `number | Enum{ 'large', 'small', 'default' }` | `default` |
| src | 图片类头像的资源地址 | `String` | - |
| alt | 图像无法显示时的替代文本 | `String` | - |
| color | 设置字体/图标颜色 | `String` | `` |
| background | 设置头像背景颜色 | `String` | - |
| onError | 图片加载失败的事件 | `Function` | - |
| icon | 设置头像的图标名 | `String` | - |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 根结点 |


