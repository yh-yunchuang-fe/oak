# Slideview 滑动操作
## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-slide-view": "path/to/your/oakui/SlideView/slide-view",
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
<oak-slide-view custom="{{true}}" singleWidth="{{160}}">
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
| share | 是否显示分享 | `Boolean` | `false` |
| shareText | 分享 | `String` | `分享` |
| edit | 是否显示编辑 | `Boolean` | `false` |
| editText | 编辑 | `String` | `编辑` |
| collect | 是否显示收藏 | `Boolean` | `false` |
| collectText | 收藏 | `String` | `移入我的收藏` |
| del | 是否显示删除 | `Boolean` | `true` |
| delText | 删除 | `String` | `删除` |
| singleWidth | 右侧按钮位宽度（自定义按钮时生效） | `Number` | `80` |
| custom | 启用自定义按钮 | `Boolean` | `false` |
| type | 右侧按钮位类型（text \| icon） | `String` | `text` |

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于 总 节点时生效 |
| icon-class | 作用于 icon 节点（type='icon'）时生效 |
| share-class | 作用于 share 节点（type='text'）时生效 |
| edit-class | 作用于 edit 节点（type='text'）时生效 |
| collect-class | 作用于 collect 节点（type='text'）时生效 |
| delete-class | 作用于 delete 节点（type='text'）时生效 |

## Slideview Slot
| slot | 说明 |
|-----------|-----------|
| left | 自定义 左侧 显示内容 |
| right | 自定义 右侧 按钮区域（需要和 singleWidth 同时使用） |
| share | 自定义分享 icon（type='icon'）同时使用 |
| edit | 自定义编辑 icon（type='icon'）同时使用 |
| collect | 自定义收藏 icon（type='icon'）同时使用 |
| delete | 自定义删除 icon（type='icon'）同时使用 |