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
<oak-field name='username' type='text' />
```

## 代码演示
### 无样式输入框
```html
    <oak-field 
        name="field"
        field-class="field-class"
        placeholder="输入内容"
    ></oak-field>
```
### 默认样式
```html
<oak-field 
    name="default"
    type="text"
    label="默认样式："
    placeholder="输入内容"
></oak-field>
```

### 禁用输入
```html
<oak-field 
    name="default"
    type="text"
    label="默认样式："
    placeholder="禁用输入"
    disabled
></oak-field>
```

### 基本用法
```html
<oak-field 
    name="username"
    type="text"
    label="用户名："
    placeholder="输入用户名"
    icon="manage"
    icon-color="#1989fa"
    border
    require
></oak-field>
<oak-field 
    name="password"
    type="password"
    label="密码："
    placeholder="输入密码"
    icon="Privacy"
    icon-color="#1989fa"
    bind:focus="focus"
    bind:change="change"
    bind:blur="blur"
    bind:confirm="confirm"
    bind:keyboardheightchange="keyboardheightchange"
    require
>
</oak-field>
```

### 可清除内容
```html
<oak-field 
    name="username"
    type="number"
    label="手机号："
    placeholder="输入手机号"
    icon="brush"
    icon-color="#1989fa"
    clearable
></oak-field>
```

### 自定义按钮
```html
<oak-field 
    name="code"
    type="number"
    label="验证码："
    placeholder="输入4位验证码"
    icon="save"
    icon-color="#1989fa"
    maxlength="{{4}}"
    clearable
>
    <oak-button 
        slot="button"
        plain
        button-class="send-btn"
        bindtap="sendCode"
        disabled="{{disabled}}"
    >{{sendText}}</oak-button>
</oak-field>
```

### 自动换行
```html
<oak-field 
    name="username"
    type="textarea"
    label="评论："
    placeholder="输入评论"
    icon="select"
    icon-color="#1989fa"
    border
    autosize
    clearable
>
</oak-field>
```

### 错误提示
```html
<oak-field 
    name="default"
    value="{{'示例：'+ errorMessage}}"
    type="text"
    label="错误提示："
    placeholder="输入内容"
    error="{{error}}"
    error-message="{{errorMessage}}"
    clearable
></oak-field>
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 名称，配合表单作为 `key` 使用 | `string` | - |
| label | 输入框关联文字 | `string` | - |
| value | 内容 | `string` | - |
| type | 类型  | `string` | `text` |
| icon | 图标 | `string` | `oak-icon` |
| icon-color | 图标颜色 | `string` | `#999` |
| icon-size | 图标尺寸 | `string` | `32rpx` |
| button | 右侧按钮 |  `string` | - |
| border | 边框 | `boolean` | `false` |
| placeholder | placeholder | `string` | - |
| disabled | 禁用输入 | `boolean` | `false` |
| autosize | 配合 textarea 高度自适应 | `boolean` | `false` |
| fixed | 配合 textarea 使用，如果在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true | `boolean` | `false` |
| placeholder-style | placeholder 的样式 | `string` | - |
| placeholder-class | placeholder 的样式类 | `string` | - |
| focus | 是否焦点 | `boolean` | `false` |
| confirm-type | 右下角按钮文字，仅在 type='text' 时生效 | `string` | - |
| confirm-hold | 点击键盘右下角按钮时是否保持键盘不收起 | `boolean` | `false` |
| cursor | 指定focus时的光标位置 | `Number` | - |
| selection-start | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | `Number` | `-1` |
| selection-end | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | `Number` | `-1` |
| adjust-position | 键盘弹起时，是否自动上推页面 | `boolean` | `true` |
| hold-keyboard | focus时，点击页面的时候不收起键盘 | `boolean` | `false` |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | `Number` | `140` |
| cursor-spacing | 指定光标与键盘的距离，取 field 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 | `Number` | `0` |
| clearable | 是否可清空 | `boolean` | `false` |
| clear-icon-color | 清空图标颜色 | `string` | `false` |
| error | 显示错误 | `boolean` | `false` |
| error-message | 显示错误信息 | `string` | - |
| bindchange | 键盘输入时触发  | `event` | - |
| bindfocus | 获取焦点  | `event` | - |
| bindblur | 失去焦点  | `event` | - |
| bindconfirm | 点击完成按钮时触发，event.detail = {value: value}  | `event` | - |
| bindkeyboardheightchange | 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration} | `event` | - |

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

## Field Slot
| slot | 说明 |
|-----------|-----------|
| button | 自定义 button 显示内容 |

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根节点 |
| field-class  | 作用于原生输入框 |
