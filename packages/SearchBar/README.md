# Search Bar 搜索框

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-search-bar": "path/to/your/oakui/SearchBar/search-bar"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-search-bar
    placeholder="搜索"
    bind:change="onChange"
></oak-search-bar>
```

## 代码演示
### 默认样式
```html
<oak-search-bar
    placeholder="搜索"
    bind:change="onChange"
></oak-search-bar>
```

### 显示取消按钮
```html
<oak-search-bar
    placeholder="搜索"
    showCancel="{{ true }}"
    bind:change="onChange"
></oak-search-bar>
```

### 自动聚焦
```html
<oak-search-bar
    placeholder="搜索"
    bind:change="onChange"
    inputFocus="{{ true }}"
></oak-search-bar>
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| placeholder | placeholder | `String` | - |
| disabled | 禁用输入 | `Boolean` | `false` |
| placeholder-style | placeholder 的样式 | `String` | - |
| placeholder-class | placeholder 的样式类 | `String` | - |
| inputFocus | 是否焦点 | `Boolean` | `false` |
| confirmType | 右下角按钮文字，仅在 type='text' 时生效 | `String` | - |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起 | `Boolean` | `false` |
| cursor | 指定focus时的光标位置 | `Number` | - |
| selectionStart | 光标起始位置，自动聚集时有效，需与 selectionEnd 搭配使用 | `Number` | `-1` |
| selectionEnd | 光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用 | `Number` | `-1` |
| adjustPosition | 键盘弹起时，是否自动上推页面 | `Boolean` | `true` |
| holdKeyboard | focus时，点击页面的时候不收起键盘 | `Boolean` | `false` |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | `Number` | `140` |
| cursorSpacing | 指定光标与键盘的距离，取 input 距离底部的距离和 cursorSpacing 指定的距离的最小值作为光标与键盘的距离 | `Number` | `0` |
| bindchange | 键盘输入时触发  | `Event` | - |
| bindfocus | 获取焦点  | `Event` | - |
| bindblur | 失去焦点  | `Event` | - |
| bindcancel | 点击取消  | `Event` | - |
| bindclear | 清空内容  | `Event` | - |
| bindconfirm | 点击完成按钮时触发，event.detail = {value: value}  | `Event` | - |
| bindkeyboardheightchange | 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration} | `Event` | - |

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| wrap-class | 作用于根节点 |
| input-class | 作用于输入框 |
| cancel-class | 作用于取消按钮 |
