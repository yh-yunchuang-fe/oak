# Notice Bar 通告栏

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-notice-bar": "path/to/your/oakui/NoticeBar/notice-bar"
}
```

在页面使用
```js
data: {
    ...,
    content: [
        {
            ...
            type: '【1】', // 可选
            value: '这是测试数据这是测试数据这是测试数据这是测试' // 必填
        },
        {
            id: 2,
            type: 2,
            value: '这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据'
        }
    ]
}
```
```html
<!-- use in `page.wxml` -->
<oak-notice-bar content="{{content}}"></oak-notice-bar>
```

## 代码演示
### 默认样式
```html
<oak-notice-bar content="{{content}}"></oak-notice-bar>
```

### 显示关闭按钮
```html
<oak-notice-bar
    mode="close"
    bind:click="onHandlerClick"
    bind:action-click="onHandlerClick"
    content="{{content}}"
></oak-notice-bar>
```

### 控制过度间隔、时长
```html
<oak-notice-bar
    interval="3000"
    duration="500"
    content="{{content}}"
></oak-notice-bar>
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| icon | 左侧icon | `String` | `notice 图片，base64格式` |
| content | 通告内容 | `Array<Object>` | `[]` |
| mode | 右侧形式 | `String` | - |
| action | 右侧展示 | `String` | `close 图片，base64格式` |
| circular | 是否循环 | `Boolean` | `true` |
| interval | 时间间隔 | `Number` | `2000` |
| duration | 过度持续时间 | `Number` | `500` |

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| basic-class | 作用于根节点 |
| header-class | 作用于左侧icon区域 |
| body-class | 作用于内容区域 |
| footer-class | 作用于右侧区域 |
