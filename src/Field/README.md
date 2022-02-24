# Field 输入框

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-field": "path/to/your/oakui/Field/field"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-field 
    type="text"
    placeholder="请输入文本"
    clearable
></oak-field>
```

## 代码演示
### 基础样式
```html
<oak-field 
    type="text"
    placeholder="请输入文本"
    clearable
/>
```
### 设置提示语样式
```html
<oak-field 
    type="text"
    placeholder="请输入文本"
    placeholderStyle="color: #333;"
    clearable
/>
```

### 手机号输入框
```html
<oak-field 
    type="number"
    maxlength="11"
    placeholder="请输入手机号码"
    clearable
/>
```

### 密码输入框
```html
    <oak-field 
        type="password"
        maxlength="11"
        clearable
        passwordIconColor="#000"
        placeholder="请输入您的密码"
        selectPasswordVisiable
    />
```

### 插入按钮样式
```html
<oak-field 
    placeholder="请输入文本"
    >
        <oak-button color="primary">选择<oak-button>
</oak-field>
```

### 验证码输入样式a
```html
<oak-field 
    type="captcha-a"
    countDownNum="50"
    maxlength="6"
    bind:captcha="getCaptcha"
    placeholder="请输入验证码"
/>
```

### 验证码输入样式b
```html
<oak-field 
    type="captcha-b"
    maxlength="6"
    autoFocus
/>
```

### 文本域
```html
<oak-field 
    type="textarea"
    maxlength="200"
    input-class="textarea-height"
    placeholder="请输入"
/>
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 类型，配合表单 使用 | `string` | - |
| value | 内容 | `string` | - |
| type | 类型  | `string` | `text` |
| ellipsis | 省略号 | `boolean` | `true` |
| placeholder | placeholder | `string` | - |
| placeholderStyle | placeholder 的样式 | `string` | - |
| disabled | 禁用输入 | `boolean` | `false` |
| autoHeight | 配合 textarea 高度自适应 | `boolean` | `false` |
| fixed | 配合 textarea 使用，如果在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true | `boolean` | `false` |
| placeholder-style | placeholder 的样式 | `string` | - |
| focus | 是否焦点 | `boolean` | `false` |
| confirmType | 右下角按钮文字，仅在 type='text' 时生效 | `string` | - |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起 | `boolean` | `false` |
| cursor | 指定focus时的光标位置 | `Number` | - |
| selectionStart | 光标起始位置，自动聚集时有效，需与 selectionEnd 搭配使用 | `Number` | `-1` |
| selectionEnd | 光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用 | `Number` | `-1` |
| adjustPosition | 键盘弹起时，是否自动上推页面 | `boolean` | `true` |
| holdKeyboard | focus时，点击页面的时候不收起键盘 | `boolean` | `false` |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | `Number` | `140` |
| cursorSpacing | 指定光标与键盘的距离，取 field 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 | `Number` | `0` |
| clearable | 是否可清空 | `boolean` | `false` |
| clearIconColor | 清空图标颜色 | `string` | `#cdcdcd` |
| selectPasswordVisiable | 是否显示密码切换明文密文icon | `boolean` | `false` |
| passwordIconColor | 密码切换明文密文icon颜色 | `string` | `#cdcdcd` |
| countDownNum | 发送验证码倒计时间 | `number` | `60` |
| bindchange | 键盘输入时触发  | `event` | - |
| bindinput | 键盘输入时触发  | `event` | - |
| bindfocus | 获取焦点  | `event` | - |
| bindblur | 失去焦点  | `event` | - |
| bindconfirm | 点击完成按钮时触发，event.detail = {value: value}  | `event` | - |
| bindkeyboardheightchange | 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration} | `event` | - |
| bindclear | 清空输入数据时触发  | `event` | - |
| bindcaptcha | 点击发送验证码时触发  | `event` | - |

## type 的合法值

| 值 | 说明 |
|-----------|-----------|
| textarea | 可以通过 autoHeight 属性设置高度自适应 |
| password | 密码类型 |
| captcha-b | 验证码b类型	|
| captcha-a | 验证码a类型	|
| digit | 带小数点的数字键盘 |
| ... | input 支持的都支持|

## confirm-type 的合法值

| 值 | 说明 |
|-----------|-----------|
| send | 右下角按钮为“发送”	 |
| search | 右下角按钮为“搜索” |
| next | 右下角按钮为“下一个” |
| go | 右下角按钮为“前往”	|
| done | 右下角按钮为“完成”	|

## Field Slot
| slot | 说明 |
|-----------|-----------|
| button | 自定义 button 显示内容 |

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根节点 |
| input-class | 作用于原生输入框 |
