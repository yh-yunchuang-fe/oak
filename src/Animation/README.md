# Animation 动画

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-animation": "path/to/your/oakui/Animation/animation"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-animation />
```

## 代码演示
### 基础用法
包裹需要执行动画的元素，在元素显示/隐藏时会执行指定动画。
```html
<oak-animation show="{{ show }}" name="fadeIn" >
  <view>需要动画的元素<view>
</oak-animation>
```

### 动画类型
`Animation` 提供了多种动画，可以通过 `name` 来指定动画。
```html
<oak-animation name="fadeOutDown" />
```

### 动画设定
可以通过 `duration`、`timingFunction` 设置动画持续时间和动画函数。
```html
<oak-animation name="fadeOutDown" duration="1000" timing-function="ease-in" />
```


## API
API说明。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| show | 是否展示组件 | `boolen` | - |
| name | 动画名称 | `string` | `fadeIn` |
| duration | 动画时间，单位`ms` | `number` | `1000` |
| timing-function | 动画函数 | `string` | - |


## 动画类型

| 名称 | 说明 |
|-----------|-----------|
| fadeIn | 淡入 |
| fadeInDown | 下滑淡入 |
| fadeInUp | 上滑淡入 |
| fadeInLeft | 左滑淡入 |
| fadeInRight | 右滑淡入 |
| fadeOut | 淡出 |
| fadeOutDown | 下滑淡出 |
| fadeOutUp | 上滑淡出 |
| fadeOutLeft | 左滑淡出 |
| fadeOutRight | 右滑淡出 |
| slideInDown | 下滑进入 |
| slideInUp | 上滑进入 |
| slideInLeft | 左滑进入 |
| slideInRight | 右滑进入 |
| slideOutDown | 下滑出 |
| slideOutUp | 上滑出 |
| slideOutLeft | 左滑出 |
| slideOutRight | 右滑出 |


