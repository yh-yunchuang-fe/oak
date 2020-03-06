# SubmitBar 提交订单栏

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-submit-bar": "path/to/your/oakui/SubmitBar/submit-bar"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-submit-bar />
```

## 代码演示

### 基础用法
```html
 <oak-submit-bar 
    price="{{1314}}"
    sub-title="不含配送费"
    bind:submit="onSubmit" 
/>
```

### 禁用状态
禁用状态下不会触发`submit`事件
```html
<oak-submit-bar 
    price="{{1314}}"
    disabled
    tip="你的收获地址不在配送范围内"
    tip-icon="exclamation-point"
    tip-icon-color="#FF0500"
    bind:submit="onSubmit" 
/>
```

### 加载状态
加载状态下不会触发`submit`事件
```html
<oak-submit-bar 
    price="{{1314}}"
    loading
    bind:submit="onSubmit" 
/>
```

### 高级用法
通过插槽插入自定义内容
```html
<oak-submit-bar price="{{1314}}" sub-title="不含配送费">
    <oak-checkbox size="48rpx" value="{{true}}" bind:change="onChange" class="oak-checkbox" >全选</oak-checkbox>
</oak-submit-bar>
```


## API
API说明。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| price | 价格（单位分） | `number` | - |
| label | 价格文案 | `string` | `合计: ` |
| suffix-label | 价格右侧文案 | `string` | `合计: ` |
| button-text | 按钮文案 | `string` | `提交订单 ` |
| button-type | 按钮类型 | `string` | `primary ` |
| button-shape | 按钮形状 | `string` | `round ` |
| button-color | 按钮背景颜色 | `string` | - |
| currency | 货币符号 | `string` | `¥` |
| sub-title | 副标题 | `string` | - |
| loading | 是否显示加载中的按钮 | `boolen` | `false` |
| disabled | 是否禁用按钮 | `boolen` | `false` |
| loader-color | 加载圈颜色 | `string` | `#fff` |
| tip | 提示文案 | `string` | - |
| tip-bg | 提示框背景 | `string` | `#fff7cc` |
| tip-icon | 提示框图标，参考 [Icon](https://yh-yunchuang-fe.github.io/oak/#/components/Icon) | `string` | `#fff7cc` |
| tip-icon-color | 提示框图标颜色，参考 [Icon](https://yh-yunchuang-fe.github.io/oak/#/components/Icon) | `string` | - |
| tip-color | 提示文案颜色 | `string` | - |
| safe-area-inset-bottom | 是否为 iPhoneX 留出底部安全距离 | `boolen` | `false` |

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| bar-class | 提交栏根结点样式 |
| body-class | 提交栏主体（按钮左侧）样式 |
| button-class | 按钮样式 |
| label-class | 价格文案样式 |
| currency-class | 货币符号样式 |
| price-class | 价格样式 |
| sub-class | 副标题样式 |


### ListItem Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 订单栏左侧 
| tip | 提示栏 


