# Slideview 滑动操作
## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-input": "path/to/your/oakui/SlideView/slide-view",
  "oak-list-item": "path/to/your/oakui/ListItem/list-item",
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-slide-view bind:delete="delete">
    <oak-list-item slot="left" title="基础用法" border="{{false}}"></oak-list-item>
</oak-slide-view>
```

## 代码演示
### 基础用法
```html
<oak-slide-view bind:delete="delete">
    <view slot="left" class="item">滑动我</view>
</oak-slide-view>
```

### 自定义内容
```html
<oak-slide-view bind:delete="delete">
    <oak-list-item slot="left" title="自定义内容" border="{{false}}" icon="home" arrow="{{false}}" content="自定义内容" />
</oak-slide-view>
```

### 多操作按钮
```html
<oak-slide-view share="{{true}}" edit="{{true}}" del="{{true}}" bind:share="share" bind:edit="edit" bind:delete="delete">
    <oak-list-item slot="left" title="多操作按钮" icon="home" border="{{false}}" arrow="{{true}}" />
</oak-slide-view>
```

### 图标按钮
```html
<oak-slide-view type="icon" share="{{true}}" edit="{{true}}" bind:share="share" bind:edit="edit" bind:delete="delete">
    <oak-list-item slot="left" title="图标按钮" icon="home" border="{{false}}" arrow="{{true}}" />
    <oak-icon slot="share"  name="share" color="#aaaaaa" size="32rpx" />
    <oak-icon slot="edit"   name="edit"  color="#4facfe" size="32rpx" />
    <oak-icon slot="delete" name="trash" color="#FA5151" size="32rpx" />
</oak-slide-view>
```

### 自定义按钮样式（支持折叠过渡）
```html
<oak-slide-view type="icon" share="{{true}}" edit="{{true}}" bind:share="share" bind:edit="edit" bind:delete="delete" icon-class="myicon">
    <oak-list-item slot="left" title="自定义按钮样式" icon="home" border="{{false}}" arrow="{{true}}" />
    <oak-icon slot="share"  name="share" color="#aaaaaa" size="32rpx" />
    <oak-icon slot="edit"   name="edit"  color="#4facfe" size="32rpx" />
    <oak-icon slot="delete" name="trash" color="#FA5151" size="32rpx" />
</oak-slide-view>
```

### 自定义按钮
```html
<oak-slide-view custom="{{true}}" rightWidth="{{160}}">
    <oak-list-item slot="left" title="自定义按钮" icon="home" border="{{false}}" arrow="{{true}}" />
    <view slot="right">
        <view class="custom" bind:tap="edit"><oak-icon name="edit" color="#4facfe" size="32rpx" ext-class="icon" /></view>
        <view class="custom-btn" bind:tap="delete">删除</view>
    </view>
</oak-slide-view>
```

## API
API说明。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| share | 分享 | `Boolean` | `false` |
| edit | 编辑 | `Boolean` | `false` |
| del | 删除 | `Boolean` | `true` |
| rightWidth | 右侧按钮位宽度（自定义按钮时生效） | `Number` | `80` |
| custom | 启用自定义按钮 | `Boolean` | `false` |
| type | 右侧按钮位类型（text \| icon） | `String` | `text` |

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| icon-class | 作用于 icon 节点（type='icon'）时生效 |

## Slideview Slot
| slot | 说明 |
|-----------|-----------|
| left | 自定义 左侧 显示内容 |
| right | 自定义 右侧 按钮区域（需要和 rightWidth 同时使用） |
| share | 自定义分享 icon（type='icon'）同时使用 |
| edit | 自定义编辑 icon（type='icon'）同时使用 |
| delete | 自定义删除 icon（type='icon'）同时使用 |