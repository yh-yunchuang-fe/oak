# List 列表
通用列表。

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-list": "path/to/your/oakui/List/list",
  "oak-list-item": "path/to/your/oakui/ListItem/list-item"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-list-item title="列表" />
<oak-list title="列表分组">
    <oak-list-item title="列表1" />
    <oak-list-item title="列表2" />
</oak-list>
```

## 代码演示
### 基本用法(纯文字)
```html
<!--CodeLink: https://developers.weixin.qq.com/s/RJZpYbmq7O9w -->
<oak-list-item title="列表"
    sub-title="副标题" />
<oak-list-item title="列表"
    content="右侧内容" />
<oak-list-item border="{{ false }}"
    title="列表"
    content="同时存在"
    sub-title="副标题" />
```

### 箭头/下边框展示
`showIcon` 和 `border` 属性分别可以控制右侧箭头和下边框的展示。
```html
<!--CodeLink: https://developers.weixin.qq.com/s/ANZGPbmd7Z9S -->
<oak-list-item title="列表"
    content="显示箭头" />
<oak-list-item showIcon="{{ false }}"
    border="{{ false }}"
    title="列表"
    content="隐藏箭头" />
```

### 图标展示
`icon` 属性在控制左侧图标展示。
```html
<!--CodeLink: https://developers.weixin.qq.com/s/Pl06Pcmw749U -->
<oak-list-item icon="down-bold"
    icon-size="30rpx"
    title="自定义Icon和大小" />
<oak-list-item border="{{ false }}"
    icon="https://static.yonghuivip.com/0fe90feecdec371ac2fc4203a47e1f4b-3726c86359d4d738142342f3904409f6.png"
    title="图片图标" />
```

### 图文列表
通过`image`属性实现图文列表。`img-width`和`img-height`可以自定义图片大小。

```html
<!--CodeLink: https://developers.weixin.qq.com/s/R20fDcmI789k -->
<oak-list-item image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_oblong.png"
    title="右侧图片列表" />
<oak-list-item image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_oblong.png"
    title="双行图文列表"
    sub-title="副标题" />
<oak-list-item img-width="100rpx"
    img-height="100rpx"
    image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_square.png"
    title="自定义图片大小"
    sub-title="副标题" />
<oak-list-item border="{{ false }}"
    img-width="100rpx"
    img-height="100rpx"
    image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_square.png"
/>
```

### 列表+自定义右侧
```html
<!--CodeLink: https://developers.weixin.qq.com/s/Xm0lAcmV7d9x -->
<oak-list-item showIcon="{{ false }}" title="开关">
    <oak-switch slot="right" size="30rpx"></oak-switch>
</oak-list-item>
<oak-list-item showIcon="{{ false }}"
    title="复选框"
    sub-title="副标题">
    <oak-checkbox slot="right" size="40rpx" value="{{checked1}}" bind:change="onCheckbox1"></oak-checkbox>
</oak-list-item>
<oak-list-item image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_oblong.png"
    title="双行图文列表"
    showIcon="{{ false }}"
    sub-title="复选框">
    <oak-checkbox slot="right" size="40rpx" value="{{checked2}}" bind:change="onCheckbox2"></oak-checkbox>
</oak-list-item>
<oak-list-item border="{{ false }}"
    image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_oblong.png"
    title="双行图文列表"
    showIcon="{{ false }}"
    sub-title="按钮">
    <oak-button slot="right" >确认</oak-button>
</oak-list-item>
```
### 列表+自定义左侧
```html
<!--CodeLink: https://developers.weixin.qq.com/s/Xm0lAcmV7d9x -->
<oak-list-item>
    <view slot="left" >
        <view class="oak-list-title-1">自定义左侧</view>
    </view>
</oak-list-item>
<oak-list-item >
    <oak-icon slot="left" name="dingdantiaoma" size="40rpx" color="#FF1A34"></oak-icon>
</oak-list-item>
```

### 列表组
与`List`配合使用实现列表分组
```html
<!--CodeLink: https://developers.weixin.qq.com/s/CC0hqcm97j9b -->
<oak-list title="列表组1" border>
    <oak-list-item title="列表1"
        content="右侧内容1" />
    <oak-list-item
        border="{{false}}"
        title="列表3"
        content="右侧内容3" />
</oak-list>
<oak-list title="列表组2">
    <oak-list-item title="列表1"
        content="右侧内容1" />
    <oak-list-item
        border="{{false}}"
        title="列表3"
        content="右侧内容3" />
</oak-list>
```

##  API

### List

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 分组标题 | `string` | - |
| border | 列表外边框 | `boolean` | `false` |


### List 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 根结点样式 |
| title-class | 分组标题样式 |


### ListItem

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 左侧标题 | `string` | - |
| sub-title | 左侧副标题 | `string` | - |
| titleDirection | 标题布局，可选值`horizontal`、`vertical` | `string` | `vertical` |
| content | 右侧内容 | `string` | - |
| border | 下边框 | `boolean` | `true` |
| showIcon | 是否显示右侧箭头, | `boolean` | `true` |
| icon | 右侧图标,属性与[Icon](https://yh-yunchuang-fe.github.io/oak/#/components/Icon)一致 | `string` | `right-light` |
| icon-size | 设置右侧图标大小 | `string` | `20rpx` |
| image | 图片URL | `string` | - |
| img-width | 图片宽度 | `string` | - |
| img-height | 图片高度 | `string` | - |
| navigator | navigator 跳转URL | `string` | - |
### ListItem Slot

| 名称 | 说明 |
|-----------|-----------|
| left | 自定义左侧显示内容，在最左侧 |
| right | 自定义右侧显示内容，在最右侧 |

### ListItem 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 根结点样式 |
| title-class | `title`样式 |
| subtitle-class | `sub-title`样式 |
| cnt-class | `content`样式 |