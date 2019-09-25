# Tag 标签
进行标记和分类的小标签。

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-tag": "path/to/your/oakui/Tag/tag"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-tag >Tag</oak-tag>
```

## 代码演示

### 标签类型
`Tag` 提供了多种预设色彩的标签样式，用作不同场景使用。可以通过 `color` 指定，默认为灰白。
```html
<oak-tag>default</oak-tag>
<oak-tag color="magenta">magenta</oak-tag>
<oak-tag color="red">red</oak-tag>
<oak-tag color="volcano">volcano</oak-tag>
<oak-tag color="orange">orange</oak-tag>
<oak-tag color="gold">gold</oak-tag>
<oak-tag color="lime">lime</oak-tag>
<oak-tag color="cyan">cyan</oak-tag>
<oak-tag color="blue">blue</oak-tag>
<oak-tag color="geekblue">geekblue</oak-tag>
<oak-tag color="purple">purple</oak-tag>
```

### 透明背景
`plain` 设置透明背景。
```html
<oak-tag plain>default</oak-tag>
<oak-tag plain
    color="magenta">magenta</oak-tag>
<oak-tag plain
    color="red">red</oak-tag>
<oak-tag plain
    color="volcano">volcano</oak-tag>
<oak-tag plain
    color="orange">orange</oak-tag>
<oak-tag plain
    color="gold">gold</oak-tag>
<oak-tag plain
    color="lime">lime</oak-tag>
<oak-tag plain
    color="cyan">cyan</oak-tag>
<oak-tag plain
    color="blue">blue</oak-tag>
<oak-tag plain
    color="geekblue">geekblue</oak-tag>
<oak-tag plain
    color="purple">purple</oak-tag>
```

### 标签形状
标签支持 `round`、`square`以及 默认 3种形状。
```html
<oak-tag shape="round"
    color="orange">round</oak-tag>
<oak-tag shape="square"
    color="orange">square</oak-tag>
<oak-tag
    color="orange">default</oak-tag>
```

### 自定义颜色
标签支持自定义样式。
```html
<oak-tag color="rgba(253,230,235,1)"
    text-color="#FD7622"
    border-color="rgba(252,7,59,0.15)">#FDE6EB</oak-tag>
<oak-tag color="#FC0738"
    plain>#FC0738</oak-tag>
<oak-tag color="#ffb601,#ff7c02">渐变</oak-tag>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| color | 标签色， 以 `,` 分隔传入两个色值（如：`#ffb601,#ff7c02` ）可实现渐变。(目前仅支持从左到右渐变) | `string` | - |
| plain | 背景是否透明 | `boolen` | `false` |
| shape | 标签形状 | `string` | - |
| text-color | 文字颜色 | `string` | - |
| border-color | 边框颜色 | `string` | - |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根结点样式 |


