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
| name | 名称，配合表单作为 `key` 使用 | `String` | - |
| label | 输入框关联文字 | `String` | - |
| value | 内容 | `String` | - |
| type | 类型  | `String` | `text` |
| icon | 图标 | `String` | `oak-icon` |
| placeholder | placeholder | `String` | - |
| disabled | 禁用输入 | `Boolean` | `false` |
| autosize | 配合 textarea 高度自适应 | `Boolean` | `false` |
| fixed | 配合 textarea 使用，如果在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true | `Boolean` | `false` |
| placeholder-style | placeholder 的样式 | `String` | - |
| placeholder-class | placeholder 的样式类 | `String` | - |
| focus | 是否焦点 | `Boolean` | `false` |
| confirm-type | 右下角按钮文字，仅在 type='text' 时生效 | `String` | - |
| confirm-hold | 点击键盘右下角按钮时是否保持键盘不收起 | `Boolean` | `false` |
| cursor | 指定focus时的光标位置 | `Number` | - |
| selection-start | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | `Number` | `-1` |
| selection-end | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | `Number` | `-1` |
| adjust-position | 键盘弹起时，是否自动上推页面 | `Boolean` | `true` |
| hold-keyboard | focus时，点击页面的时候不收起键盘 | `Boolean` | `false` |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | `Number` | `140` |
| cursor-spacing | 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 | `Number` | `0` |
| clearable | 是否可清空 | `Boolean` | `false` |
| error | 显示错误 | `Boolean` | `false` |
| rules | 验证规则 | `Array` | - |
| bindchange | 键盘输入时触发  | `Event` | - |
| bindfocus | 获取焦点  | `Event` | - |
| bindblur | 失去焦点  | `Event` | - |
| bindconfirm | 点击完成按钮时触发，event.detail = {value: value}  | `Event` | - |
| bindkeyboardheightchange | 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration} | `Event` | - |

## type 的合法值

| 值 | 说明 |
|-----------|-----------|
| text | 文本输入键盘 |
| textarea | 可以通过 autosize 属性设置高度自适应 |
| password | 密码类型 |
| number | 数字输入键盘	|
| idcard | 身份证输入键盘	|
| digit | 带小数点的数字键盘 |

## confirm-type 的合法值

| 值 | 说明 |
|-----------|-----------|
| send | 右下角按钮为“发送”	 |
| search | 右下角按钮为“搜索” |
| next | 右下角按钮为“下一个” |
| go | 右下角按钮为“前往”	|
| done | 右下角按钮为“完成”	|

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根节点 |
