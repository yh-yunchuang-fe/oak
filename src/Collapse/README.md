# Collapse 折叠面板
可以折叠/展开的内容区域。

## 何时使用
对复杂区域进行分组和隐藏，保持页面的整洁。

手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。

## 使用

在页面 `json` 中引入按钮组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-collapse": "path/to/your/oakui/Collapse/collapse",
  "oak-collapse-item": "path/to/your/oakui/Collapse/collapse-item"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-collapse >
    <oak-collapse-item
        title="折叠面板1"
        icon="down"
        key='1'>
        折叠面板内容折叠面板内容折叠面板内容折叠面板内容折叠面板内容折叠面板内容
    </oak-collapse-item>
</oak-collapse>
```

## 代码演示

### 基本用法
`activeKey` 控制展开的面板，对应item的 `key`。
```html
<oak-collapse activeKey="{{ [0, 1] }}"
    border>
    <oak-collapse-item title="折叠面板1"
        icon="down"
        key='1'>
        折叠面板内容折叠面板内容折叠面板内容折叠面板内容折叠面板内容折叠面板内容
    </oak-collapse-item>
    <oak-collapse-item title="折叠面板2"
        icon="down"
        key='2'>
        折叠面板内容折叠面板内容折叠面板内容折叠面板内容
    </oak-collapse-item>
</oak-collapse>
```

### 手风琴效果
`accordion` 开启手风琴，每次只打开一个 tab。
```html
<oak-collapse activeKey="{{ 0 }}"
    accordion
    border>
    <oak-collapse-item title="折叠面板1"
        icon="down"
        key='1'>
        折叠面板内容折叠面板内容折叠面板内容折叠面板内容折叠面板内容折叠面板内容
    </oak-collapse-item>
    <oak-collapse-item title="折叠面板2"
        icon="down"
        key='2'>
        折叠面板内容折叠面板内容折叠面板内容折叠面板内容
    </oak-collapse-item>
</oak-collapse>
```
### 自定义标题
```html
<oak-collapse border>
  <oak-collapse-item icon="down">
      <view class="oak-collapse-title"
          slot="title">自定义标题加粗
          <oak-icon name="night"
              color="#FD7622"
              size="40rpx" />
      </view>
      折叠面板内容折叠面板内容折叠面板内容折叠面板内容折叠面板内容折叠面板内容
  </oak-collapse-item>
</oak-collapse>
```

## API

### Collapse

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| accordion | 手风琴模式 | `boolean` | `false` |
| onChange | 切换面板的回调 | `Function` |  |
| activeKey | 当前激活 tab 面板的 key | `string[]|string| number[]|number` | `默认无，accordion 模式下仅支持 string| number` |
| border | 带上下边框风格的折叠面板 | `boolean` | `false` |


### Collapse 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 根结点 |


### Collapse Item

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 面板头内容 | `string` | - |
| key | 唯一标识符，对应 activeKey。默认为索引值 | `string|number` | `index` |
| icon | 标题栏图标名称或图片链接，可选值见 Icon 组件 | `string` | `down` |
| border | 是否显示内边框 | `boolean` | `true` |
| iconPosition | 设置图标位置： left, right | `string` | `left` |
| disabled | 禁用后的面板展开与否将无法通过用户交互改变 | `boolean` | `false` |

### Collapse Item 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| title-class | 面板头 |
| content-class | 面板内容区域 |

### CollapseItem Slot

| 名称 | 说明 |
|-----------|-----------|
| title | 自定义`title`显示内容，如果设置了`title`不生效 |