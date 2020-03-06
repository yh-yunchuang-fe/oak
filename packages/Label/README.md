# Label 可操作标签
用于带有交互性的标签展示。

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-label": "path/to/your/oakui/Label/label"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-label>标签</oak-label>
```

## 代码演示

### 基本用法
直接使用
```html
<oak-label>默认</oak-label>
```

### 选中状态
通过`checked`控制选中状态。`checked-class` 样式类可自定义选中状态。
```html
<oak-label checked>选中状态</oak-label>
<oak-label checked checked-class="checked-diy" >自定义选中状态</oak-label>
```

### 带Icon
支持icon。`icon-position` 可选择icon的位置。
```html
<oak-label icon="estimate-facet">评论</oak-label>
<oak-label icon="edit" icon-position="rear">修改</oak-label>
```

### 文本截断
超长文本会自动截断。
```html
<oak-label>我是超长文本我是超长文本我是超长文本我是超长文本我是超长文本</oak-label>
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| index | 序号 | `number` | 0 |
| size | 标签尺寸  | `string` | `normal` |
| checked | 选中态 | `boolean` | `false` |
| icon | icon名  | `string` | - |
| icon-position| icon 位置 | `enum{ 'front', 'rear' }` | `front` |
| icon-size | icon大小  | `string` | - |
| icon-color | icon颜色  | `string` | - |
| styles | 自定义行内样式 | `string` | - |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根节点 |
| checked-class | 选中样式 |
