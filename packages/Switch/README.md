# Switch 开关

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-switch": "path/to/your/oakui/Switch/switch"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-switch />
```

## 代码演示
### 基础用法
最简单的用法。
```html
<oak-switch bind:onChange="onChange"/>
```
```js
Page({
    onChange(e) {
        const { checked } = e.detail
        console.log(checked)

        wx.showToast({
            title: checked ? '打开' : '关闭',
            icon: 'none'
        })
    },
})
```

### 不可用/加载中
通过 `disabled` 和 `loading` 控制开关的不可用/加载状态。
```html
<oak-switch bind:onChange="onChange"
            disabled />
<oak-switch bind:onChange="onChange"
    loading />
```

### 文字
通过 `checked-text`/`unchecked-text` 控制开关选中/未选中状态下文案。
```html
<oak-switch bind:onChange="onChange"
    checked-text="开"
    unchecked-text="关" />
<oak-switch bind:onChange="onChange"
    checked-text="1"
    unchecked-text="0" />
```

### 自定义大小
开关支持自定义大小。
```html
<oak-switch bind:onChange="onChange"
    size="50rpx" />
<oak-switch bind:onChange="onChange"
    size="60rpx" />
```

### 自定义背景色
通过`checked-color`/`unchecked-color` 自定义开关选中/未选中时的背景色。
```html
<oak-switch bind:onChange="change"
    checked-color="#00a5e0"
    unchecked-color="#FF0500" />
```

### 手动控制状态
开关默认会自动切换状态，但是可以通过 `autoChange`改变自动切换。
```html
<oak-switch bind:onChange="asyncFun"
    auto-change="{{ false }}"
    checked="{{ checked }}"
/>
```
```js
Page({
    data: {
        checked: false,
    },
    asyncFun(): void {
        const _this = this
        this.selectComponent!('#dialog').confirm({
            title: '是否切换开关',
            content: '',
            cancleText: '取消',
            confirmText: '确认',
            onConfirm(): void {
                _this.setData!({
                    checked: !_this.data.checked,
                })
            },
        })
    }
})
```


## API
API说明。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| checked | 当前是否选中 | `boolean` | `false` |
| size | 开关大小 | `string` | `44rpx` |
| checked-text | 选中时的内容 | `string` | - |
| unchecked-text | 未选中时的内容 | `string` | - |
| loader-size | loading大小，参考 [Loading 组件](https://yh-yunchuang-fe.github.io/oak/#/components/Loading) | `string` | - |
| loading | 加载中的开关 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| checked-color | 选中时背景色 | `string` | `#fd7622` |
| unchecked-color | 未选中时背景色 | `string` | `#ccc` |
| auto-change | 是否自动切换状态 | `boolean` | `true` |
| onChange | 变化时回调函数 | `function(checked: boolean)	` | |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根结点 |


