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
### 基本用法
`ListItem` 可以单独使用，也可以结合`List`使用形成列表组。`List`提供列表标题和列表外边框设置。
```html
<!--CodeLink: https://developers.weixin.qq.com/s/RJZpYbmq7O9w -->
<oak-list-item
    title="单独使用"
    sub-title="副标题" />
<oak-list-item
    title="列表"
    content="右侧内容" />
<oak-list-item
    title="列表"
    content="同时存在"
    sub-title="副标题" />

<oak-list>
    <oak-list-item
        title="列表1"
        content="右侧内容1" />
    <oak-list-item
        title="列表2"
        content="右侧内容2" />
</oak-list>
```

### 箭头/下边框展示
`arrow` 和 `border` 属性分别可以控制右侧箭头和下边框的展示。
```html
<!--CodeLink: https://developers.weixin.qq.com/s/ANZGPbmd7Z9S -->
<oak-list-item
    title="列表"
    content="显示箭头" />
<oak-list-item
    arrow="{{ false }}"
    title="列表"
    content="隐藏箭头" />
<oak-list-item
    border="{{ false }}"
    title="列表"
    content="隐藏箭头/边框" />
```

### 图标展示
`icon` 属性在控制左侧图标展示。
```html
<!--CodeLink: https://developers.weixin.qq.com/s/Pl06Pcmw749U -->
<oak-list-item
    icon="location-small"
    title="列表" />
<oak-list-item
    border="{{ false }}"
    icon="https://static.yonghuivip.com/0fe90feecdec371ac2fc4203a47e1f4b-3726c86359d4d738142342f3904409f6.png"
    title="图片图标" />
```

### 图文列表
通过`image`属性实现图文列表。`img-width`和`img-height`可以自定义图片大小。
> **注意**⚠️：设置`image`属性后`icon`会失效。

```html
<!--CodeLink: https://developers.weixin.qq.com/s/R20fDcmI789k -->
<oak-list-item
    image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_oblong.png"
    title="右侧图片列表" />
<oak-list-item
    image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_oblong.png"
    title="双行图文列表"
    sub-title="副标题" />
<oak-list-item border="{{ false }}"
    img-width="200rpx"
    img-height="120rpx"
    image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_square.png"
    title="自定义图片大小"
    sub-title="副标题" />
```

### 列表+按钮
使用`button`为列表项右侧添加按钮。
```html
<!--CodeLink: https://developers.weixin.qq.com/s/Xm0lAcmV7d9x -->
<oak-list-item
    button="Button"
    arrow="{{ false }}"
    title="列表" />
<oak-list-item arrow="{{ false }}"
    button="Button"
    title="自定义图片大小"
    sub-title="副标题" />
<oak-list-item border="{{ false }}"
    image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_oblong.png"
    title="双行图文列表"
    button="Button"
    arrow="{{ false }}"
    sub-title="副标题" />
```

### 列表组
与`List`配合使用实现列表分组
```html
<!--CodeLink: https://developers.weixin.qq.com/s/CC0hqcm97j9b -->
<oak-list title="列表组1">
    <oak-list-item title="列表1"
        content="右侧内容1" />
    <oak-list-item title="列表2"
        content="右侧内容2" />
</oak-list>
<oak-list title="列表组2">
    <oak-list-item title="列表1"
        content="右侧内容1" />
    <oak-list-item title="列表2"
        content="右侧内容2" />
</oak-list>
```
### 自定义
`ListItem` 支持通过 `slots` 自定义显示内容。
```html
<!--CodeLink: https://developers.weixin.qq.com/s/xQ0Zicmu7A9R -->
<oak-list-item arrow="{{false}}">
    <view slot="title" class="oak-list-title">自定义标题</view>
    <oak-icon name="select" color="#FD7622" size="26rpx" slot="icon-right" />
</oak-list-item>
<oak-list-item arrow="{{false}}">
    <view slot="title" class="oak-list-title-1">自定义标题</view>
    <view slot="subTitle" class="oak-list-subtitle">自定义副标题</view>
    <oak-button slot="button" shape='round' type="primary" >自定义按钮</oak-button>
</oak-list-item>
```

## List API

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 分组标题 | `String` | - |
| botder | 列表外边框 | `Boolen` | `false` |


## List 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 根结点样式 |
| title-class | 分组标题样式 |


## ListItem API

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 左侧标题 | `String` | - |
| sub-title | 左侧副标题 | `String` | - |
| content | 右侧内容 | `String` | - |
| botder | 下边框 | `Boolen` | `true` |
| arrow | 右侧箭头, 传入对象可同时设置颜色和大小 | `Boolen | Object<SDK2.6.5以上支持>` | `true|{color: '#999', size: '28rpx'}` |
| arrow-color | 设置右侧箭头颜色 | `String` | `#999` |
| arrow-size | 设置右侧箭头大小 | `String` | `28rpx` |
| icon | 左侧图标, 也支持传入对象。属性与[Icon](https://yh-yunchuang-fe.github.io/oak/#/components/Icon)一致 | `String | Object<SDK2.6.5以上支持>` | - |
| icon-color | 设置左侧图标颜色 | `String` | `#999` |
| icon-size | 设置左侧图标大小 | `String` | `32rpx` |
| image | 图片URL | `String` | - |
| img-width | 图片宽度 | `String` | - |
| img-height | 图片高度 | `String` | - |
| button | 按钮名称 | `String` | - |
| nowrap | 文本单行超出截断，对 `title`, `sub-title`, `content`生效 | `Boolen` | `false` |
| couston-nowrap | 对 `title`, `sub-title`, `content`自定义截断行数, 如: `{title: 1, subTitle: 2, content: 1}`。不能与`nowrap`混用 | `Object` | `{}` |

## ListItem Slot

| 名称 | 说明 |
|-----------|-----------|
| icon | 自定义左侧`icon`显示内容，如果设置了`icon`或`image`不生效 |
| title | 自定义`title`显示内容，如果设置了`title`不生效 |
| subTitle | 自定义`subTitle`显示内容，如果设置了`subTitle`不生效 |
| content | 自定义`content`显示内容，如果设置了`content`不生效 |
| button | 自定义`button`显示内容，如果设置了`button`不生效 |
| icon-right | 自定义右侧图标，默认是`arrow-right` |

## ListItem 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 根结点样式 |
| title-class | `title`样式 |
| subtitle-class | `sub-title`样式 |
| cnt-class | `content`样式 |