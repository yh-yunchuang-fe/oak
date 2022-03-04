# Image 图片
图片组件

## 使用
在页面 `json` 中引入组件：

```json
"usingComponents": {
  "oak-image": "path/to/your/oakui/Image/image"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-image src="https://xxxx.com/your/icon/name" />
```

## 代码演示
### 基本用法
支持设置宽高与圆角
```html
<oak-image src="{{img1}}" width="200rpx" height="200rpx" bgColor="#f3f3ff3"/>
<oak-image src="{{img1}}" width="200rpx" height="200rpx" radius="20rpx" bgColor="#f3f3ff3"/>
<oak-image src="{{img1}}" width="200rpx" height="200rpx" radius="150rpx" bgColor="#f3f3ff3"/>
```
### 缩放模式
`mode` 设置缩放模式，同步[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)，常使用有：

| mode | 说明 | 
|-----------|-----------|
| aspectFit | 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。|
| aspectFill | 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。 |
| widthFix | 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变 |
| heightFix | 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变 |
```html
<oak-image mode="aspectFit" src="{{img1}}" width="200rpx" height="200rpx" bgColor="#f3f3ff3"/>
<oak-image mode="aspectFill" src="{{img1}}" width="200rpx" height="200rpx" bgColor="#f3f3ff3"/>
<oak-image mode="widthFix" src="{{img1}}" width="200rpx" height="200rpx" bgColor="#f3f3ff3"/>
<oak-image mode="heightFix" src="{{img1}}" width="200rpx" height="200rpx" bgColor="#f3f3ff3"/>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| src | 图片资源地址，必填 | `string` | - |
| width | 图片宽，不带单位时，默认px | `string` | - |
| height |  图片高，不带单位时，默认px | `string` | - |
| radius | 容器圆角 | `string ｜ Array` | - |
| bgImg | 背景图 | `string` | - |
| bgColor | 背景颜色 | `string` | - |
| mode | 图片裁剪、缩放的模式, 同步[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) | `string` | `aspectFit` |
| lazyLoad | 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载 | `boolean` | `true` |
| webp | 是否解析 webP 格式，只支持网络资源 | `boolean` | `true` |
| imgRadius | 图片自身圆角，只允许设置一个值 | `string` | - |
| quality | 设置请求图片的质量登记(0, 100] | `Number` | 95 |
| noBgImg | 是否设定背景图 | `boolean` | `false` |
