# Input 输入框
矢量图标。

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-input": "path/to/your/oakui/Input/input"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-input name='username' type='text' />
```

## 代码演示
### 基本用法

### --
```
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 名称 | `String` | - |
| label | 输入框关联文字 | `String` | - |
| value | 内容 | `String` | - |
| type | 类型，可选值 `text、textarea、password、number、idcard、digit`  | `String` | `text` |
| icon | 图标 | `String` | `oak-icon` |
| placeholder | placeholder | `String` | - |
| disabled | 禁用输入 | `Boolean` | `false` |
| placeholder-style | placeholder 的样式 | `String` | - |
| placeholder-class | placeholder 的样式类 | `String` | - |
| confirm-type | 右下角按钮文字，仅在type='text'时生效 | `String` | - |
| confirm-hold | 点击键盘右下角按钮时是否保持键盘不收起 | `Boolean` | `false` |
| cursor | 指定focus时的光标位置 | `Number` | - |
| selection-start | 光标起始位置，自动聚集时有效，需与selection-end搭配使用 | `Number` | `-1` |
| selection-end | 光标结束位置，自动聚集时有效，需与selection-start搭配使用 | `Number` | `-1` |
| adjust-position | 键盘弹起时，是否自动上推页面 | `Boolean` | `true` |
| hold-keyboard | focus时，点击页面的时候不收起键盘 | `Boolean` | `false` |
| selection-end | 光标结束位置，自动聚集时有效，需与selection-start搭配使用 | `Number` | `-1` |
| placeholder-class | placeholder 的样式类 | `String` | - |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | `Number` | `140` |
| autofocus | 自动获取焦点 | `Boolean` | `false` |
| clearable | 是否可清空 | `Boolean` | `false` |
| error | 显示错误 | `Boolean` | `false` |
| rules | 验证规则 | `Array` | - |
| change | 键盘输入时触发  | `Event` | - |
| focus | 获取焦点  | `Event` | - |
| blur | 失去焦点  | `Event` | - |
| confirm | 点击完成按钮时触发，event.detail = {value: value}  | `Event` | - |
| bindkeyboardheightchange | 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration} | `Event` | - |



## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根节点 |
