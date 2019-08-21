# Model 弹窗
用于承载弹窗出现及相应动画

## 使用

在页面 `json` 中引入按钮组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-dialog": "path/to/your/oakui/dialog/dialog"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-dialog />
```


## 代码演示
### 按钮类型
弹窗属性有：size、opacity、position、direction、zIndex、isShow
```html
<oak-dialog>Default</oak-dialog>
<oak-dialog size="{{ {width: 50%, height: '100px'} }}">自定义弹窗大小</oak-dialog>
<oak-dialog opacity="30">弹窗蒙层透明度</oak-dialog>
<oak-dialog position="top">弹窗位置
</oak-dialog>
<oak-dialog direction="top">动画支持</oak-dialog>
<oak-dialog zIndex="100">设置弹窗层级</oak-dialog>
<oak-dialog isShow="true">弹窗显示与否</oak-dialog>
```
## API
通过设置 dialog 的属性来控制弹窗不同样式。

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| size | 弹窗大小 | 类型Object | {width,height},可选值为 百分比或像素值, 或者不设
| opacity | 弹窗蒙层透明度| String |可选值为 30、40、50、60、70、75、80,90 或者不设 | 默认 70 |
| position | 弹窗位置 | String | 可选值 `top`、`center`、`bottom` |
| direction | 弹窗出现动画方向 | String | `left` `right` `top` `bottom` `none`| 或者不设 | 默认没有动画 |
| zIndex | 弹窗层级 | Number | 默认10 |
| isShow | 弹窗显示状态 | Boolen | 默认`false` |

> 其他属性与小程序 [dialog](https://developers.weixin.qq.com/miniprogram/dev/component/dialog.html) 组件同步。

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| dialog-class | 设置弹窗其他的样式 |


