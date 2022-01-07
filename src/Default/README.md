# Default 默认组件

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-default": "path/to/your/oakui/Default/index"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-default />
```

## 代码演示
### 基本用法
```html
<oak-default src="https://static.yonghuivip.com/weapp/defaultImg02.png"
    title="主标题文案"
    subTitle="补充说明文案"
    mainBtnText="主按钮"
    subBtnText="次按钮"
    direction="row"
    bind:onMainBtnClick="onMainBtnClick"
    bind:onSubBtnClick="onSubBtnClick"
    ext-class="default"/>
```

## API
组件通过`属性调用` 和 `实例调用` 具有完全一直的API。

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 主标题文案，可为空  | `string` | - |
| subTitle | 补充说明文案，可为空  | `string` | - |
| src | 图片链接，可为空  | `string` | - |
| imgType | 为了省事，不传src也可以，可以默认图标type，01：购物车，02: 地址，03: 定位，04: 搜索，05: 优惠券，06: 订单，07: 网络，08: 服务器，09: 限流，10: 积分，11: 金额记录，12: 购物卡，13: 菜肴，14: 活动，15: 内容为空，16: 下架，17: 404，18: 砍价，19: 其他记录，20: 手机，21: 选择门店  | `string` | - |
| iconName | 图片部分也可以是icon name，可为空  | `string` | - |
| iconColor | icon 颜色  | `string` | `#ccc` |
| iconSize | icon 大小  | `number` | `128` |
| mainBtnText | 主按钮文案，可为空 | `string` | - |
| subBtnText | 次按钮文案，可为空 | `string` | - |
| direction | 按钮排列样式 | `string` | `column` |


## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根结点 |
| title-class | 作用于主标题 |
| sub-title-class | 作用于补充说明文案 |
| main-btn-class | 作用于主按钮 |
| sub-btn-class | 作用于次按钮 |
