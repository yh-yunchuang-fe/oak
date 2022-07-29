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
通过 `show` 控制弹窗显示，默认底部弹出。
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
    position="top"
    bind:onPopupClose="onPopupClose"
>
    <view class="popup" >

    </view>
</oak-popup>
```
### 弹窗尺寸
`sizeInNine` 控制弹窗尺寸，屏幕高度9等分，向上支持尺寸3/9，4/9，5/9，6/9，7/9，向下支持2/9，6/9，不传则根据内容自定义高度
```html
<oak-popup show="{{ showPopup }}"
    sizeInNine="5"
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
| show | 是否显示弹出层 | `boolean` | `false` |
| mask | 是否显示遮罩层 | `boolean` | `true` |
| maskClosable | 点击遮罩层自动关闭 | `boolean` | `true` |
| z-index | z-index 层级 | `number` | `10` |
| position | 弹出层位置 | `Enum{ 'top', 'bottom', 'left', 'right', 'center' }` | `bottom` |
| duration | 动画时间，单位毫秒 | `number` | `200` |
| sizeInNine | 弹窗尺寸，屏幕高度9等分，向上支持尺寸3/9，4/9，5/9，6/9，7/9，向下支持2/9，6/9，不传则根据内容自定义高度 | `string` | - |
| showRadius | 是否显示圆角，仅上下浮层 | `boolean` | `true` |
| closable | 是否显示闭按钮，仅在向上弹出才有效 | `boolean` | `true` |
| safeArea | 是否显示安全区域 | `boolean` | `true` |
| title | 标题，仅在向上弹出才有效 | `string` | - |
| titleStyle | 标题样式，仅在向上弹出才有效 | `string` | - |
| subTitle | 右侧次标题，仅在向上弹出才有效，对象，name优先于icon| `{name:string,icon:string,style:string}` | - |
| onMaskClick | 点击遮罩层的回调 | `function(e)` | - |
| onPopupClose | 关闭弹窗的回调 | `function(e)` | - |
| subTitleClick | 点击副标题的回调 | `function(e)` | - |

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| root-class | 根节点 |
| warp-class | 作用于弹窗内容包裹节点（含标题、内容，底部安全区域） |
| body-class | 作用于弹窗内 |
| header-class | 作用于标题 |
| safe-class | 作用于底部安全区域 |


