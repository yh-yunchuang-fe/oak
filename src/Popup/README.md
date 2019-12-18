# Popup 弹出层

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-popup": "path/to/your/oakui/Popup/popup"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-popup />
```

## 代码演示
### 基础用法
通过 `show` 控制弹窗显示，默认弹出窗居中。
```html
<oak-popup show="{{ showPopup }}"
    bind:onPopupClose="onPopupClose"
>
    <view class="popup" >

    </view>
</oak-popup>
```

### 弹出位置
`position` 控制弹出位置。
```html
<oak-popup show="{{ showPopup }}"
    positon="top"
    bind:onPopupClose="onPopupClose"
>
    <view class="popup" >

    </view>
</oak-popup>
```


## API
API说明。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| show | 是否显示弹出层 | `boolen` | `false` |
| z-index | z-index 层级 | `number` | `9` |
| mask | 是否显示遮罩层 | `boolen` | `true` |
| position | 弹出层位置 | `Enum{ 'top', 'bottom', 'left', 'right', 'center' }` | `center` |
| duration | 动画时间，单位毫秒 | `number` | `400` |
| onPopupClose | 点击遮罩层的回调 | `function(e)` | - |
| background | 内容区背景颜色 | `string` | `#fff` |
| width | 内容区宽 | `string` | - |
| height | 内容区高 | `string` | - |

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根结点 |


