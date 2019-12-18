# Label 标签
标签

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
可以设置标签的序号、尺寸（暂只有默认尺寸）、选中态、前icon、自定义行内样式
前icon色值继承父节点
```html
<oak-label icon="more" index="2">前icon、序号</oak-label>
<oak-label checked styles="color: red">选中态</oak-label>
<oak-label icon="workbench_fill">前icon</oak-label>
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| index | 序号 | `Number` | 0 |
| size | 标签尺寸  | `String` | `normal` |
| checked | 选中态 | `Boolean` | `false` |
| icon | 前icon  | `String` | - |
| styles | 自定义行内样式 | `String` | - |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根节点 |
