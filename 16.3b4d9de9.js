(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/Confirm/README.md":function(n,o,i){"use strict";i.r(o),o.default='# Confirm\n\n## 使用\n\n在页面 `json` 中引入组件：\n\n```json\n// import in `page.json`:\n"usingComponents": {\n  "oak-confirm": "path/to/your/oakui/Confirm/confirm"\n}\n```\n\n在页面使用\n```html\n\x3c!-- use in `page.wxml` --\x3e\n<oak-confirm />\n```\n\n\n## API\nAPI说明。\n\n| 属性 | 说明 | 类型 | 默认值 |\n|-----------|-----------|-----------|-------------|\n| title | 弹窗标题，可为空  | `string` | - |\n| content | 弹窗内容，可为空  | `string` | - |\n| cancelText | 取消按钮文案，不需要显示时设置为空  | `string` | `取消` |\n| confirmText | 确定按钮文案  | `string` | `确定` |\n| isConfirmShow | 是否显示  | `boolen` | `false` |\n| showCancel | 是否显示左上角关闭按钮  | `boolen` | `false` |\n\n\n## 外部样式类\n\n| 类名 | 说明 |\n|-----------|-----------|\n| confirm-btn-class | 作用于确定按钮 |\n\n\n'}}]);