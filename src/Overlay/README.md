# Overlay 遮罩层
遮罩层组件

## 使用
在页面 `json` 中引入组件：

```json
"usingComponents": {
  "oak-overlay": "path/to/your/oakui/Overlay/overlay"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-overlay  />

```

## 代码演示
### 页面遮罩
```html
<oak-overlay show auto-close>
    <view class="overlay-content">页面遮罩</view>
</oak-overlay>
```


### 卡片遮罩
```html
<oak-image 
    src="https://image.yonghuivip.com/image/1638171083730b3ecb3b5f0885edd7f5a7b5310c89568a9253633.jpg" 
    width="400rpx"
    height="400rpx"
    radius="20rpx"
    bgColor="#f3f3ff3"
>
  <oak-overlay wrap-class="overlay-warp" is-show  position="absolute" type="card">
  </oak-overlay>
</oak-image>
```


## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| show | 是否显示| `Boolean` | `true` |
| autoClose | 是否点击遮罩，自动隐藏 | `Boolean` | `false` |
| type | 类型 ，可选值 `page`,`card`,默认`page`| `String` | `page` |
| animate | 是否有动画 | `Boolean` | `true` |
| background | 背景色 | `String` | - |
| zIndex | zIndex层级 | `Number` | 10 |

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根节点 |
