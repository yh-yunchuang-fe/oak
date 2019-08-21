# Badge 微标

图标右上角的圆形徽标数字。


## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-badge": "path/to/your/oakui/Badge/badge"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-badge />
```

## 代码演示

### 基本用法
简单的徽章展示，当`count`为 0 时，默认不显示. 可以使用`showZero`显示0。
```html
 <oak-badge count="20">
    <view class="box"></view>
</oak-badge>
<oak-badge count="0"
    showZero>
    <view class="box"></view>
</oak-badge>
```

### 独立使用
不包裹任何元素可以独立使用。
```html
 <oak-badge count="20" />
<oak-badge count="9"
    borderColor="#ccc"
    background="#fff"
    font-color="#333" />
<oak-badge count="999"
    background="#09BB07" />
```

### 封顶数字
超过`overflowCount`的会显示为`${overflowCount}+`，默认的`overflowCount` 为`99`。
```html
<oak-badge count="20"
    overflowCount="10">
    <view class="box"></view>
</oak-badge>
<oak-badge count="99">
    <view class="box"></view>
</oak-badge>
<oak-badge count="100">
    <view class="box"></view>
</oak-badge>
<oak-badge count="9999"
    overflowCount="999">
    <view class="box"></view>
</oak-badge>
```

### 小红点
没有具体数字。
```html
<oak-badge count="20" dot>
    <view class="box"></view>
</oak-badge>
<oak-badge count="99" dot>
    <view class="text">Oak Weui very good</view>
</oak-badge>
```

### 自定义样式
支持自定义背景色、字体掩饰、边框颜色。
```html
<oak-badge count="9"
    border-color="#ccc"
    background="#fff"
    font-color="#333" />
```



## API
API说明。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| count | 展示的数字，大于`overflowCount`时显示为`${overflowCount}+`，为`0`时隐藏 | `number` | - |
| dot | 不展示数字，只有一个小红点 | `boolean` | `false` |
| overflowCount | 展示封顶的数字 | `number` | `99` |
| showZero | 当数值为`0`时，是否展示 Badge | `boolean` | `false` |
| background | 设置 Badge 的背景颜色 | `string` | - |
| fontColor | 设置 Badge 的字体颜色 | `string` | - |
| borderColor | 设置 Badge 的边框颜色 | `string` | - |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| badge-class | 作用在微标上 |


