# TreeSelect 树形选择
树型选择控件。适用于分类选择，时间选择，城市选择等场景。

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-tree-select": "path/to/your/oakui/TreeSelect/tree-select"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-tree-select />
```

## 代码演示

### 基本用法
`oak-tree-select` 可以用于任意位置上，只需传入固定格式的数据即可。传入 `default-active-id` 时，右侧选项在点击时自动切换，传入 `active-id` 是需要手动触发切换。左侧label同逻辑
```html
<oak-tree-select tree-data="{{treeData}}" default-active-id="0-0-2" bind:itemtap="itemTap"/>
<!-- 多选 -->
<oak-tree-select tree-data="{{treeData}}" active-id="{{activeId}}" bind:itemtap="manual"/>
```
```js
Page({
  data: {
    activeId: '0-0-2'
  },
  itemTap({detail = {}}) {
      console.log(detail)
  },
  manual({detail = {}}) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;

    this.setData({ activeId });
  }
})
```

### 多选
`default-active-id`或`active-id`为数组时为多选状态。
```html
<oak-tree-select tree-data="{{treeData}}" max="2" default-active-id="{{ defaultIds }}" />
```

```js
Page({
  data: {
    defaultIds: ['0-0-4', '0-0-2']
  },
  itemTap({detail = {}}) {
      console.log(detail)
  }
})

````

### 自定义内容

```html
<oak-tree-select >
  <image src="https://static.yonghuivip.com/oak/images/logo.png" />
</oak-tree-select>
```


## API
API说明。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| tree-data | TreeSelect显示所需数据 | `{value, text, id, children, [disabled, ]}[]` | `[]` |
| label-width | 左侧导航去宽度 | `string` | - |
| default-active-id | 指定右侧默认选中的条目 | `string|number/string|number[]` | - |
| default-label-index | 指定左侧侧默认选中的条目 | `string|number` | `0` |
| active-id | 指定右侧当前选中的条目 | `string/string[]` | - |
| label-index | 指定左侧侧当前选中的条目 | `string|number` | `0` |
| max | 右侧最大可选项 | `string|number` | `Infinity` |
| icon | 选项选中时icon名  | `string` | `choice-facet` |
| icon-size | icon大小  | `string` | `32rpx` |
| icon-color | icon颜色  | `string` | `#fd7622` |
| labeltap | 左侧导航点击时，触发的事件。返回被点击的导航的索引 | `function({detail: {index}})` | - |
| itemtap | 右侧选项点击时，触发的事件。返回被点击的选项的索引以及数据 | `function({detail: {index, data}})` | - |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| label-class | 左侧区域根样式类 |
| label-item-class | 左侧选项样式类 |
| label-active-class | 左侧选项选中样式类 |
| label-disabled-class | 左侧侧选项禁用样式类 |
| content-class | 右侧区域根样式类 |
| item-class | 左侧选项样式类 |
| item-active-class | 右侧选项选中样式类 |
| item-disabled-class | 右侧选项禁用样式类 |


### Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 自定义右侧区域内容，如果存在选项，则插入在顶部 |
