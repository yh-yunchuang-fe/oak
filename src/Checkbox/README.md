# Checkbox 复选框

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-checkbox": "path/to/your/oakui/Checkbox/checkbox"
}
```

## 代码演示
基本用法
```html
<!-- use in `page.wxml` -->
<oak-checkbox value="{{checked}}" bind:change="onChange">复选框</oak-checkbox>
```

禁用状态
```html
<!-- use in `page.wxml` -->
<oak-checkbox value="{{true}}" bind:change="onChange" disabled="{{disabled}}">复选框</oak-checkbox>
```

自定义颜色
```html
<!-- use in `page.wxml` -->
<oak-checkbox value="{{checked}}" bind:change="onChange" color="{{color}}">自定义颜色</oak-checkbox>

<oak-checkbox value="{{true}}" bind:change="onChange" disabled="{{disabled}}" disabledColor="{{disabledColor}}">自定义禁用颜色</oak-checkbox>
```

自定义图标
```html
<!-- use in `page.wxml` -->
<oak-checkbox value="{{checked}}" bind:change="onChange" icon="{{icon}}">自定义图标</oak-checkbox>
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| value | 是否选中 | `Boolean` | `false` |
| change | 事件绑定  | `Function` | - |
| disabled | 是否禁用 | `Boolean` | `false` |
| disabled-color | 禁用颜色 | `String` | `#333` |
| color | 颜色  | `String` | `#333` |
| name | Item | `any` | - |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根节点 |
