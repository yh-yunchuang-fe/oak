(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./src/List/README.md":function(t,n,i){"use strict";i.r(n),n.default='# List 列表\n通用列表。\n\n## 使用\n\n在页面 `json` 中引入组件：\n\n```json\n// import in `page.json`:\n"usingComponents": {\n  "oak-list": "path/to/your/oakui/List/list",\n  "oak-list-item": "path/to/your/oakui/ListItem/list-item"\n}\n```\n\n在页面使用\n```html\n\x3c!-- use in `page.wxml` --\x3e\n<oak-list-item title="列表" />\n<oak-list title="列表分组">\n    <oak-list-item title="列表1" />\n    <oak-list-item title="列表2" />\n</oak-list>\n```\n\n## 代码演示\n### 基本用法(纯文字)\n```html\n\x3c!--CodeLink: https://developers.weixin.qq.com/s/RJZpYbmq7O9w --\x3e\n<oak-list-item title="列表"\n    sub-title="副标题" />\n<oak-list-item title="列表"\n    content="右侧内容" />\n<oak-list-item border="{{ false }}"\n    title="列表"\n    content="同时存在"\n    sub-title="副标题" />\n```\n\n### 箭头/下边框展示\n`showIcon` 和 `border` 属性分别可以控制右侧箭头和下边框的展示。\n```html\n\x3c!--CodeLink: https://developers.weixin.qq.com/s/ANZGPbmd7Z9S --\x3e\n<oak-list-item title="列表"\n    content="显示箭头" />\n<oak-list-item showIcon="{{ false }}"\n    border="{{ false }}"\n    title="列表"\n    content="隐藏箭头" />\n```\n\n### 图标展示\n`icon` 属性在控制左侧图标展示。\n```html\n\x3c!--CodeLink: https://developers.weixin.qq.com/s/Pl06Pcmw749U --\x3e\n<oak-list-item icon="down-bold"\n    icon-size="30rpx"\n    title="自定义Icon和大小" />\n<oak-list-item border="{{ false }}"\n    icon="https://static.yonghuivip.com/0fe90feecdec371ac2fc4203a47e1f4b-3726c86359d4d738142342f3904409f6.png"\n    title="图片图标" />\n```\n\n### 图文列表\n通过`image`属性实现图文列表。`img-width`和`img-height`可以自定义图片大小。\n\n```html\n\x3c!--CodeLink: https://developers.weixin.qq.com/s/R20fDcmI789k --\x3e\n<oak-list-item image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_oblong.png"\n    title="右侧图片列表" />\n<oak-list-item image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_oblong.png"\n    title="双行图文列表"\n    sub-title="副标题" />\n<oak-list-item img-width="100rpx"\n    img-height="100rpx"\n    image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_square.png"\n    title="自定义图片大小"\n    sub-title="副标题" />\n<oak-list-item border="{{ false }}"\n    img-width="100rpx"\n    img-height="100rpx"\n    image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_square.png"\n/>\n```\n\n### 列表+自定义右侧\n```html\n\x3c!--CodeLink: https://developers.weixin.qq.com/s/Xm0lAcmV7d9x --\x3e\n<oak-list-item showIcon="{{ false }}" title="开关">\n    <oak-switch slot="right" size="30rpx"></oak-switch>\n</oak-list-item>\n<oak-list-item showIcon="{{ false }}"\n    title="复选框"\n    sub-title="副标题">\n    <oak-checkbox slot="right" size="40rpx" value="{{checked1}}" bind:change="onCheckbox1"></oak-checkbox>\n</oak-list-item>\n<oak-list-item image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_oblong.png"\n    title="双行图文列表"\n    showIcon="{{ false }}"\n    sub-title="复选框">\n    <oak-checkbox slot="right" size="40rpx" value="{{checked2}}" bind:change="onCheckbox2"></oak-checkbox>\n</oak-list-item>\n<oak-list-item border="{{ false }}"\n    image="https://image.yonghuivip.com/wechatapp/wechat_app_default_img_oblong.png"\n    title="双行图文列表"\n    showIcon="{{ false }}"\n    sub-title="按钮">\n    <oak-button slot="right" >确认</oak-button>\n</oak-list-item>\n```\n### 列表+自定义左侧\n```html\n\x3c!--CodeLink: https://developers.weixin.qq.com/s/Xm0lAcmV7d9x --\x3e\n<oak-list-item>\n    <view slot="left" >\n        <view class="oak-list-title-1">自定义左侧</view>\n    </view>\n</oak-list-item>\n<oak-list-item >\n    <oak-icon slot="left" name="dingdantiaoma" size="40rpx" color="#FF1A34"></oak-icon>\n</oak-list-item>\n```\n\n### 列表组\n与`List`配合使用实现列表分组\n```html\n\x3c!--CodeLink: https://developers.weixin.qq.com/s/CC0hqcm97j9b --\x3e\n<oak-list title="列表组1" border>\n    <oak-list-item title="列表1"\n        content="右侧内容1" />\n    <oak-list-item\n        border="{{false}}"\n        title="列表3"\n        content="右侧内容3" />\n</oak-list>\n<oak-list title="列表组2">\n    <oak-list-item title="列表1"\n        content="右侧内容1" />\n    <oak-list-item\n        border="{{false}}"\n        title="列表3"\n        content="右侧内容3" />\n</oak-list>\n```\n\n##  API\n\n### List\n\n| 属性 | 说明 | 类型 | 默认值 |\n|-----------|-----------|-----------|-------------|\n| title | 分组标题 | `string` | - |\n| border | 列表外边框 | `boolean` | `false` |\n\n\n### List 外部样式类\n\n| 类名 | 说明 |\n|-----------|-----------|\n| ext-class | 根结点样式 |\n| title-class | 分组标题样式 |\n\n\n### ListItem\n\n| 属性 | 说明 | 类型 | 默认值 |\n|-----------|-----------|-----------|-------------|\n| title | 左侧标题 | `string` | - |\n| sub-title | 左侧副标题 | `string` | - |\n| titleDirection | 标题布局，可选值`horizontal`、`vertical` | `string` | `vertical` |\n| content | 右侧内容 | `string` | - |\n| border | 下边框 | `boolean` | `true` |\n| showIcon | 是否显示右侧箭头, | `boolean` | `true` |\n| icon | 右侧图标,属性与[Icon](https://yh-yunchuang-fe.github.io/oak/#/components/Icon)一致 | `string` | `right-light` |\n| icon-size | 设置右侧图标大小 | `string` | `20rpx` |\n| image | 图片URL | `string` | - |\n| img-width | 图片宽度 | `string` | - |\n| img-height | 图片高度 | `string` | - |\n| navigator | navigator 跳转URL | `string` | - |\n### ListItem Slot\n\n| 名称 | 说明 |\n|-----------|-----------|\n| left | 自定义左侧显示内容，在最左侧 |\n| right | 自定义右侧显示内容，在最右侧 |\n\n### ListItem 外部样式类\n\n| 类名 | 说明 |\n|-----------|-----------|\n| ext-class | 根结点样式 |\n| title-class | `title`样式 |\n| subtitle-class | `sub-title`样式 |\n| cnt-class | `content`样式 |'}}]);