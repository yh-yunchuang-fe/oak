# Dialog 弹窗

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-dialog": "path/to/your/oakui/Dialog/dialog"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-dialog />
```

## 代码演示
### 基本用法
Dialog 支持 `属性调用` 和 `实例调用` 两种调用方式。

#### 属性调用
在组件上配置相应属性，并通过 `show` 属性来控制显示。
```html
<oak-dialog
    show="{{ show }}"
    title="Oak 弹窗"
    content="弹窗很6，非常6，对不对？"
/>
```

```js

Page({
    showDialog() {
        this.setData({
            show: true,
        })
    }
})
```

#### 实例调用
在页面（组件）获取到 `Dialog` 实例，通过实例上的 `.confirm(options)` 方法调用组件。

> 同一页面中如果需要多次调用到组件，推荐使用 **实例调用** 方式。

```html
<oak-dialog id="dialog" />
```

```js

Page({
    showDialog(): void {
        this.selectComponent('#dialog').confirm({
            title: '实例调用',
            content: '',
            cancleText: '取消',
            confirmText: '知道了',
            onConfirm(): void {

            }
        })
    }
})
```

### 异步关闭
`confirmAsync` 开启异步关闭，开启后`属性调用`可以通过`show` 设置为 `false` 关闭。`实例调用` 可以通过 `onConfirm(hide: Function)` 中的 `hide()` 方法关闭。

```html
<oak-dialog
    show="{{ show }}"
    title="异步关闭"
    content="异步关闭很6，非常6，对不对？"
    confirm-async
    bind:onConfirm="onConfirm"
/>
<oak-dialog id="dialog" />
```

```js

Page({
    showDialog() {
        this.setData({
            show: true,
        })
    },
    onConfirm() {
      setTimeout(() => {
          this.setData!({
              show: false,
          })
      }, 5* 1000)
    },
    _showDialog() {
      this.selectComponent!('#dialog').confirm({
            title: '异步关闭',
            content: '实例调用异步关闭',
            confirmAsync: true,
            onConfirm(hide): void {
                setTimeout((): void => {
                    hide()
                }, 5* 1000)
            }
        })
    }
})
```

### 自定义内容
Dialog 内容区域可以自定义。

```html
<oak-dialog
    show="{{ show }}"
>
    <view class="diy-content" wx:if="{{diy}}">
        <image mode="width" src="https://static.yonghuivip.com/oak/images/logo.png" alt="" />
    </view>
</oak-dialog>
```

## API
组件通过`属性调用` 和 `实例调用` 具有完全一直的API。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 弹窗标题，可为空  | `string` | - |
| content | 弹窗内容，可为空  | `string` | - |
| cancle-text(cancleText) | 取消按钮文案，不需要显示时设置为空  | `string` | `取消` |
| confirm-text(confirmText) | 确认按钮文案  | `string` | `确认` |
| mask | 是否显示遮罩层  | `boolen` | `true` |
| mask-closable(maskClosable) | 点击遮罩层是否关闭  | `boolen` | `true` |
| show | 是否显示  | `boolen` | `false` |
| z-index(zIndex) | z-index 层级  | `number` | `9` |
| confirm-async(confirmAsync) | 是否异步关闭弹窗，开启后需要手动关闭弹窗  | `boolen` | `false` |
| confirm-type(confirmType) | 确认按钮支持微信开放能力，参考小程序 `<button />` 组件的[open-type](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | `string` | - |
| onClose | 点击遮罩层回调 | `function` | - |
| onCancle | 点击取消按钮的回调 | `function` | - |
| onConfirm | 点击确认按钮的回调，实例调用时参数为一个关闭弹窗 `hide()` | `function|function(hide)` | - |




## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| dialog-class | 作用于根结点 |
| title-class | 作用于标题 |
| content-class | 作用于内容 |


