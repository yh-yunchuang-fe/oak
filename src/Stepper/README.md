# Stepper 进步组件
步进

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-stepper": "path/to/your/oakui/Stepper/stepper"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-stepper value="3"/>
```

## 代码演示
### 尺寸
通过 `size` 控制尺寸，默认 `small`
```html
<oak-stepper value="1" size="small" />
<oak-stepper value="1" size="large" />
```
### 类型
通过 `type` 控制类型，默认 `primary`
```html
<oak-stepper value="1" type="default" />
<oak-stepper value="1" type="primary" />
```
### 可以输入数值
通过 `enable-input` 控制，默认 `false`
```html
<oak-stepper value="1" enable-input/>
```
### 禁用状态
通过 `disabled` 控制，默认 `false`
```html
<oak-stepper value="1" disabled/>
```
### 限制输入范围
通过 `min`，`max` 控制
```html
<oak-stepper value="1" min="0" max="10"/>
```
### 异步变更值
通过 `async-change` 控制，默认 `false`，
```html
<oak-stepper value="{{value}}" async-change  bind:onPlus="onPlus" bind:onMinus="onMinus"/>
```
### 自定义icon
通过 `icons` 控制，数组，默认不传，
```html
<oak-stepper value="{{value}}" icons="{{ ['cyclic-minus','cyclic-plus-sign'] }}"/>
```
### 自定义样式
通过class实现
```html
<oak-stepper
    value="1"
    min="0"
    max="10"
    icons="{{ ['left-light','right-light'] }}"
    size="large"
    input-class="input-class"
    minus-class="minus-class"
    plus-class="plus-class"
/>
```
```less
//自定义样式
.input-class,.plus-class,.minus-class {
    border-color: #000 !important;
}
.plus-class {
    background-color: #000 !important;
    &[disabled]{
        background-color: #666 !important;
    }
}
```
## APIS

| 属性          | 说明                           | 类型      | 默认值    |
| ------------- | ------------------------------ | --------- | --------- |
| type          | 类型,可选值`default`,`primary` | `String`  | `primary` |
| size          | 尺寸: 可选值`small`,`large`    | `String`  | `small`   |
| value         | 值                             | `Number`  | null      |
| min           | 下限值                         | `Number`  | null      |
| max           | 上线值                         | `Number`  | null      |
| step          | 步值                           | `Number`  | 1         |
| enableInput   | 能否输入                       | `Boolean` | false     |
| disabled      | 模块禁止                       | `Boolean` | false     |
| asyncChange   | 异步修改value                  | `Boolean` | false     |
| decimalLength | value值小数点长度              | `Number`  | null      |
| icons         | 自定义icons                    | `Array`   | null      |


## 外部样式类

| 类名        | 说明         |
| ----------- | ------------ |
| ext-class   | 作用于根节点 |
| input-class | 作用于输入框 |
| minus-class | 作用于减按钮 |
| plus-class  | 作用于加按钮 |
