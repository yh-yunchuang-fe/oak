# Toast 提示
用于小程序轻提示。

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-label": "path/to/your/oakui/Toast/toast"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-toast>轻提示</oak-toast>
```

## 代码演示

### 基本用法
纯文字,通过isShow控制显隐
```html 
<oak-toast isShow="{{show}}">默认</oak-toast>
```

### icon
自定义icon，通过传入icon名称。
```html
  <oak-toast icon="edit" isShow="{{ Show }}">icon可以自定义</oak-toast>
```

### icon大小及颜色
自定义icon大小及颜色
```html
  <oak-toast icon="edit" icon-color="#987689" icon-size="20px" isShow="{{ Show }}">icon可以自定义</oak-toast>
```

### duration控制时长
```html
  <oak-toast duration="5000" isShow="{{ Show }}">icon可以自定义</oak-toast>
```

### 成功
传入success。
```html
  <oak-toast success isShow="{{ Show }}">success 😄</oak-toast>
```
### 警告
传入warn。
```html
  <oak-toast warn isShow="{{ Show }}">warn ⚠️</oak-toast>
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| success | 成功 | `boolean` | `false` |
| warn | 警告 | `boolean` | `false` |
| icon | icon名  | `string` | - |
| icon-size | icon大小  | `string` | `15px` |
| icon-color | icon颜色  | `string` | `#FFF` |
| duration | toast持续时间  | `number` | `2000` |


