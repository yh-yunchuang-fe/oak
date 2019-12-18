# Loading 加载
加载动画，防呆处理。

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-loading": "path/to/your/oakui/Loading/loading"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-loading isShow />
```

## 代码演示
### 基本用法
`isShow` 控制Loading显示。
```html
<oak-loading isShow />
```

### Loading尺寸
Loading支持大、中、小三种尺寸，默认为中。
```html
<oak-loading isShow />
<oak-loading isShow size='small' />
<oak-loading isShow size='large'/>
```

### 定位方式
有 绝对定位(`absolute`)和固定定位(`fixed`)两种方式。
```html
<oak-loading isShow position='fixed' />
<oak-loading isShow position='absolute'/>
```

### Loading颜色
设置Loading颜色。
```html
<oak-loading isShow color='FD7622' />
```


## API

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| isShow | Loading 是否显示 | `Boolean` | `false` |
| size | Loading尺寸，可选值为 `large`、`small` 或者不设 | `String` | `normal` |
| position | 定位方式, 可选值为 `fixed`、`absolute` 或者不设  | `String` | - |
| color | 设置颜色  | `String` | `#FD7622` |

