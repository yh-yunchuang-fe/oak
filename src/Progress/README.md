# Countdown

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-countdown": "path/to/your/oakui/Progress/progress"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-progress />
```

## 代码演示
### 基础用法
```html
  <oak-progress bgColor="{{ '#FCFCFC' }}" activeColor="{{ '#DDDDDD' }}" bordeRadiu="{{ 12 }}" strokeWidth="{{ 50 }}"></oak-progress>
```

## API
API说明。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| bgColor | 背景色 | `String` | `` |
| activeColor | 选择的颜色 | `String` | `` |
| bordeRadiu | 进度条设置按钮 | `Number` | `0` |
| strokeWidth | 进度条百分比 | `Number` | `0` |

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 设置根元素的样式 |
| active-class | 设置选择的进度条样式 |
| disabled-class | 设置置灰样式 |


