# 信息流
呈现图文信息。

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-feeds": "path/to/your/oakui/Feeds/feeds",
  "oak-feeds-item": "path/to/your/oakui/FeedsItem/feeds-item"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-feeds>
    <oak-feeds-item class="oak-feeds-item">
        <view class="oak-feeds-item-test">
        </view>
    </oak-feeds-item>
</oak-feeds>
```

## 代码演示
### 基本用法
`oak-feeds-item` 上需要使用类 `oak-feeds-item`, `oak-feeds` 会根据 `oak-feeds-item` 数量展现不同布局(最多支持9个)。
```html
<oak-feeds>
    <oak-feeds-item class="oak-feeds-item">
        <view class="oak-feeds-item-test">
        </view>
    </oak-feeds-item>
    <oak-feeds-item class="oak-feeds-item">
        <view class="oak-feeds-item-test">
        </view>
    </oak-feeds-item>
</oak-feeds>
```

### 单元格边框
通过`border`控制是否显示单元格边框。默认为`true`。
```html
<oak-feeds border="{{false}}">
    <oak-feeds-item class="oak-feeds-item">
        <view class="oak-feeds-item-test">
        </view>
    </oak-feeds-item>
    <oak-feeds-item class="oak-feeds-item">
        <view class="oak-feeds-item-test">
        </view>
    </oak-feeds-item>
</oak-feeds>
```

### 边框颜色
`borderColor`设置边框颜色
```html
<oak-feeds borderColor="#000">
    <oak-feeds-item class="oak-feeds-item">
        <view class="oak-feeds-item-test">
        </view>
    </oak-feeds-item>
    <oak-feeds-item class="oak-feeds-item">
        <view class="oak-feeds-item-test">
        </view>
    </oak-feeds-item>
</oak-feeds>
```

### 外边距
`margin` 设置整个信息流容器的外边距。
```html
<oak-feeds margin="20rpx">
    <oak-feeds-item class="oak-feeds-item">
        <view class="oak-feeds-item-test">
        </view>
    </oak-feeds-item>
    <oak-feeds-item class="oak-feeds-item">
        <view class="oak-feeds-item-test">
        </view>
    </oak-feeds-item>
</oak-feeds>
```


## API
API说明。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| border | 是否显示边框 | `Boolern` | `true` |
| borderColor | 边框颜色 | `String` | `transparent` |
| margin | 外边距 | `String` | `0` |


## 外部样式类

| 样式名 | 说明 |
|-----------|-----------|
| ext-class | 作用在跟节点上 |


