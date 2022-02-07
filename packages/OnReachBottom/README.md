# 到底提示

## 使用

在页面 `json` 中引入按钮组件：

```json
// import in `page.json`:
"usingComponents": {
   "c-on-reach-bottom": "/components/business/OnReachBottom/index"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<c-on-reach-bottom
    ext-class="reach_bottom"
    bg-class="bg-class"
    tips-class="tips-class"
    showImg="{{true}}"
    tips="没有更多"
    showLoading="{{true}}"
    bind:onReachBottom="onReachBottom"
    bind:unReachBottom="unReachBottom"
/>

```

## API
API说明。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| showImg | 是否显示底部图 | Boolean | false |
| tips | 到底提示文案 | String | ‘没有更多了’ |
| showLoading | 是否显示加载按钮 | Boolean | false |


## 外部样式类

| 样式名 | 说明 |
|-----------|-----------|
| ext-class | 设置底部大容器yh-on-reach-bottom时的样式 |
| bg-class  | 设置底部图的样式：背景色、透明度           |
| tips-class  | 设置文字样式   |

