# Icon 图标
矢量图标。

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-icon": "path/to/your/oakui/Icon/icon"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-icon name='wechat' />
```

## 代码演示
### 基本用法
指定图标对应的 `name` 属性，name 属性可以为图标名或者图片链接。
```html
<oak-icon name='https://xxxx.com/your/icon/name' />
<oak-icon name='wechat' />
```
### 设置大小
`size` 属性指定图标或者图片大小。
```html
<oak-icon name='https://xxxx.com/your/icon/name' size='50rpx' />
<oak-icon name='wechat' size='50rpx' />
```

### 颜色
更改图标颜色。
```html
<oak-icon name='wechat' color='#fff' />
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 图标名，或者图片链接 | `String` | - |
| size | 图标大小  | `String` | `32rpx` |
| classPrefix | 图标样式前缀 | `String` | `oak-icon` |
| color | 颜色  | `String` | `#333` |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根节点 |
