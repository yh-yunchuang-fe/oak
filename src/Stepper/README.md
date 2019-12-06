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
可以设置步进器的值value，上限max，下限min，步进值step，模块禁止disabled，键盘是否包含小数点integer，使能输入enableInput，整个模块禁止点击灰度值disabledOpacity，可点击icon 颜色activeColor，禁止点击icon颜色disableColor，加减icon 值iconSize，加减操作异步改变value值 asyncChange，value小数点位decimalLength，步进器模块样式stepperStyle，减样式minusStyle，输入样式inputStyle，加样式plusStyle，可以直接设置height一步设置整个模块大小
```html
  <oak-stepper value="{{ 1 }}" />
  <oak-stepper value="{{ 1 }}" enableInput/>
  <oak-stepper value="{{ 1 }}" step="2" />
  <oak-stepper value="{{ 6 }}" min="5" max="8" />
  <oak-stepper value="{{ 1 }}" integer enable-input/>
  <oak-stepper value="{{ 1 }}" disabled disabledOpacity="0.3"/>
  <oak-stepper value="{{ 1 }}" step="0.2" decimal-length="{{ 1 }}" />
  <oak-stepper
      value="{{value}}"
      async-change
      bind:onPlus="onPlus"
      bind:onMinus="onMinus"
  />
  <oak-stepper stepper-style="padding-left: 20px;" height="50" value="{{ 1 }}" icon-size="12" input-style="width: 60px;" minus-style="border-radius: 2px;" plus-style="border-radius: 2px;" button-size="32" />
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
