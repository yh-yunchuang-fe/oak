# Tag 标签
进行标记和分类的小标签。

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-tag": "path/to/your/oakui/Tag/tag"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-tag >Tag</oak-tag>
```

## 代码演示

### 标签预设样式
`Tag` 提供了多种预设标签样式，用作不同场景使用。可以通过 `preset` 指定，默认为灰白。
```html
<oak-tag>default</oak-tag>
<oak-tag preset="red">red</oak-tag>
<oak-tag preset="green">green</oak-tag>
<oak-tag preset="blue">blue</oak-tag>
<oak-tag preset="orange">orange</oak-tag>
<oak-tag preset="purple">purple</oak-tag>
<oak-tag preset="gray">gray</oak-tag>
```

### 透明背景
`plain` 设置透明背景。
```html
<oak-tag plain >默认</oak-tag>
<oak-tag plain preset="red">red</oak-tag>
<oak-tag plain preset="green">green</oak-tag>
<oak-tag plain preset="blue">blue</oak-tag>
<oak-tag plain preset="orange">orange</oak-tag>
<oak-tag plain preset="purple">purple</oak-tag>
<oak-tag plain preset="gray">gray</oak-tag>
```

### 支持Icon
```html
<oak-tag icon="home-facet" preset="green">冷藏</oak-tag>
<oak-tag icon="fire">热卖</oak-tag>
<oak-tag icon="gift_line" preset="orange">大礼包</oak-tag>
<oak-tag icon="dunpai" preset="green">安全</oak-tag>
<oak-tag icon="cook" preset="green">有机</oak-tag>
<oak-tag icon="chakanwuliu" preset="blue">新鲜</oak-tag>
```
### 支持图片
标签支持 `round`、`square`以及 默认 3种形状。
```html
<oak-tag plain
    color="#FF1A34"
    icon="https://image.yonghuivip.com/tool.png" 
>左侧图片</oak-tag>
<oak-tag color="#fff"
    icon="https://image.yonghuivip.com/tool.png" 
    iconPosition="after"
>右侧图片</oak-tag>
<oak-tag
    color="#FFF"
    background="linear-gradient(90deg, #FF644D, #FF3819)"
    icon="http://image.yonghuivip.com/sku/card/icon/seckill@3x-2.png"
    iconPosition="after"
    iconStyle="background: transparent;"
    radius="6rpx 0 0 6rpx"
>秒杀</oak-tag>
<oak-tag
    color="#000"
    background="linear-gradient(90deg, #FFCE8C,#FFEEC2)"
    icon="https://static.yonghuivip.com/wechatapp/static/images/product/vip@2x.png"
    iconPosition="after"
    iconStyle="background: transparent;"
>￥208</oak-tag>
<oak-tag
    color="#FFEDBF"
    background="linear-gradient(90deg, #403A41,#17161C)"
    icon="https://static.yonghuivip.com/wechatapp/static/images/app-exclusive-price-2x.png"
    iconPosition="after"
    radius="6rpx"
    iconStyle="background: transparent;"
>￥208</oak-tag>
```

### 自定义背景色，支持渐变
```html
<oak-tag background="linear-gradient(90deg, #4DC9FF, #19BAFF)" >冷藏</oak-tag>
<oak-tag background="linear-gradient(90deg, #4DC9FF, #19BAFF)" >冷鲜</oak-tag>
<oak-tag background="linear-gradient(90deg, #FF644D, #FF3819)" >预售</oak-tag>
```
### 自定义字体色与边框色
```html
<oak-tag plain color="#FF1A34" border-color="#FF1A34">商品/订单促销标签</oak-tag>
<oak-tag plain color="#2BCC14" border-color="#2BCC14">商品/订单促销标签</oak-tag>
<oak-tag plain color="#19BAFF" border-color="#19BAFF">次日达履约标签</oak-tag>
<oak-tag plain color="#2BCC14" border-color="#2BCC14">一件代发履约标签</oak-tag>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| color | 标签色， 以 `,` 分隔传入两个色值（如：`#ffb601,#ff7c02` ）可实现渐变。(目前仅支持从左到右渐变) | `string` | - |
| plain | 背景是否透明 | `boolen` | `false` |
| shape | 标签形状 | `string` | - |
| text-color | 文字颜色 | `string` | - |
| border-color | 边框颜色 | `string` | - |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根结点样式 |


