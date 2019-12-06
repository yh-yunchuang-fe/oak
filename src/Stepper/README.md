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
<oak-label value="{{3}}"/>
```

## 代码演示
### 基本用法
```html
  基础用法
    <oak-stepper value="1" />
  可以输入数值
    <oak-stepper value="1" enableInput/>
  步长设置
    <oak-stepper value="1" step="2" />
  固定小数位数
    <oak-stepper value="1" step="0.2" decimal-length="1" />
  限制输入范围
    <oak-stepper value="6" min="5" max="8" />
  限制输入整数
    <oak-stepper value="1" integer enable-input/>
  禁用状态
    <oak-stepper value="1" disabled/>
  禁用灰度设置
    <oak-stepper value="1" disabled disabledOpacity="0.6"/>
  异步变更值
    <oak-stepper
        value="{{value}}"
        async-change
        bind:onPlus="onPlus"
        bind:onMinus="onMinus"
    />
  设置模块高度
    <oak-stepper height="40" value="1"/>
  自定义模块样式
    <oak-stepper stepper-style="padding-left: 20px;" value="5"/>
  自定义输入框样式
    <oak-stepper value="1" input-style="width: 60px;"/>
  自定义加减模块样式
    <oak-stepper
        value="1"
        icon-size="12"
        minus-style="border-radius: 2px;"
        plus-style="border-radius: 2px;"/>
  自定义icon颜色
    <oak-stepper
        value="1"
        active-color="#333"
        disable-color="#999"
        min="1"/>
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| value | 值 | `Number` | null |
| min | 下限值  | `Number` | null |
| max | 上线值 | `Number` | null |
| step | 步值  | `Number` | 1 |
| enableInput | 能否输入 | `Boolean` | false |
| integer | 键盘能否包含小数点，默认包含 | `Boolean` | false |
| disabled | 模块禁止 | `Boolean` | false |
| disabledOpacity | 模块禁止灰度 | `Number` | 0.4 |
| asyncChange | 异步修改value | `Boolean` | false |
| decimalLength | value值小数点长度 | `Number` | null |
| height | 模块大小 | `Number` | null |
| activeColor | 可点击icon颜色 | `String` | `#FD7622` |
| disableColor | 禁止点击icon颜色 | `String` | `#333333` |
| iconSize | icon大小 | `Number` | 14 |
| stepperStyle | 整个模块样式 | `String` | `` |
| minusStyle | 减模块样式 | `String` | `` |
| inputStyle | 输入模块样式 | `String` | `` |
| plusStyle | 加模块样式 | `String` | `` |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根节点 |
