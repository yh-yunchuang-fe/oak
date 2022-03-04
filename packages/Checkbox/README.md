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
### 基本用法
```html
<!-- use in `page.wxml` -->
<oak-checkbox checked="{{checked}}" bind:change="onChange">复选框</oak-checkbox>
```

### 块级元素
checkbox在默认情况下为行内块级元素，通过 block 属性可以将元素类型设置为块级元素。
```html
<!-- use in `page.wxml` -->
<oak-checkbox block>复选框</oak-checkbox>
```
### 类型：default | point | button
不同类型，样式上会有区别，默认打勾`default`  | 点 `point` | 按钮`button`
```html
<!-- use in `page.wxml` -->
<oak-checkbox type="default">打勾</oak-checkbox>
<oak-checkbox type="point">点</oak-checkbox>
<oak-checkbox type="button">按钮</oak-checkbox>
```
### 禁用状态
```html
<!-- use in `page.wxml` -->
<oak-checkbox checked="{{true}}" bind:change="onChange" disabled="{{disabled}}">复选框</oak-checkbox>
```

### 自定义颜色
```html
<!-- use in `page.wxml` -->
<oak-checkbox color="#1989fa">未选中</oak-checkbox>
<oak-checkbox checked disabled disabledColor="#bdddfd">选中禁用颜色</oak-checkbox>
<oak-checkbox disabled disabledColor="#bdddfd">未选中禁用颜色</oak-checkbox>
```

### 自定义图标
```html
<!-- use in `page.wxml` -->
<oak-checkbox checked="{{checked}}" 
  icon="{{ {normal:'checkbox',active:'multiple-choice-line', disabled:'un-choose'} }}"
>自定义图标</oak-checkbox>
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| checked | 是否选中 | `Boolean` | `false` |
| value | 值，选中时触发自身和checkbox-group的 change 事件，并携带 checkbox 的 value | `Object` | `false` |
| name | 名，无value时，该值作为`value`处理 | `Object` | - |
| color | 颜色  | `String` | `#333` |
| disabled | 是否禁用 | `Boolean` | `false` |
| block | 块级元素 | `Boolean` | `false` |
| disabledColor | 禁用颜色 | `String` | `#333` |
| type | 样式类型`default` 打勾, `point` 点, `button` 按钮，除按钮样式外，打勾与点的选中时icon会有区别 | `String` | `default` |
| icon | 自定义图标，可设置选中`active`，未选中`normal`，禁用`disabled`的图标,可单独设置某一个值，其他根据type的值取预设icon | `{active:'',normal:'',disabled:''}` | - |
| change | 事件绑定  | `Function` | - |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根节点 |
