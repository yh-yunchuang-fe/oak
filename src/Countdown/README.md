# Countdown

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-countdown": "path/to/your/oakui/Countdown/countdown"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-countdown />
```

## 代码演示
### 基础用法
```html
 <oak-countdown endTimestamp="{{1635671692446}}" log="{{true}}" />
```

### Format
```html
<oak-countdown endTimestamp="{{1635671692446}}" format="DDDD天HH时mm分ss" log="{{true}}" />
```

### 后台执行
```html
<oak-countdown endTimestamp="{{1635671692446}}" format="DDDD天HH时mm分ss" log="{{true}}" silence="{{true}}" />
```

### 服务器时间
```html
<oak-countdown endTimestamp="{{1635675292446}}" nowTimestamp="{{1635671692446}}" format="DDDD天HH时mm分ss" log="{{true}}" />
```

### Callback
```html
<oak-countdown endTimestamp="{{1584690103160}}" format="DDDD天HH时mm分ss" bindcallback="onCallback" log="{{true}}" />
```

## API
API说明。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| format | 格式 | `String` | `DDDD:HH:mm:ss` |
| endTimestamp | 格式 | `Number` | `0` |
| nowTimestamp | 格式 | `Number` | `0` |
| silence | 格式 | `Boolean` | `false` |
| log | 格式 | `Boolean` | `false` |

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 设置根元素的样式 |
| num-class | 设置数字样式 |
| text-class | 设置文本样式 |


