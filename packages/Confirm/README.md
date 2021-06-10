# Confirm

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-confirm": "path/to/your/oakui/Confirm/confirm"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-confirm />
```


## API
API说明。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 弹窗标题，可为空  | `string` | - |
| content | 弹窗内容，可为空  | `string` | - |
| cancelText | 取消按钮文案，不需要显示时设置为空  | `string` | `取消` |
| confirmText | 确定按钮文案  | `string` | `确定` |
| isConfirmShow | 是否显示  | `boolen` | `false` |
| showCancel | 是否显示左上角关闭按钮  | `boolen` | `false` |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| confirm-btn-class | 作用于确定按钮 |


