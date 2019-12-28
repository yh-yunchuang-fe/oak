# Steps 步骤条

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-steps": "path/to/your/oakui/Steps/steps"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-steps steps="{{steps}}" activeIndex="{{steps.length}}"/>
```

## 代码演示
### 基本用法
```html
  <!-- 基础用法 都是默认数据-->
    <oak-steps />
  <!-- 可以设置步骤条的方向 -->
    <oak-steps direction="vertical"/>
  <!-- 自定义step icon -->
    <oak-steps icon="praise" activeIcon="praise"
    inActiveIcon="trample"/>
  <!-- 自定义step icon颜色 -->
    <oak-steps color="#666" activeColor="#FFC343"
    inActiveColor="#ddd"/>
  <!-- 自定义内容 steps list 含有唯一标示slot属性-->
    <oak-steps steps="{{steps}}" direction="vertical">
      <view wx:for="{{steps}}" slot="{{item.slot}}" class="statusList">
        <view class="statusTop">
          <span class="status">{{item.status}}</span>
          <span class="time">{{item.time}}</span>
        </view>
        <span class="desc">{{item.desc}}</span>
      </view>
    </oak-steps>
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| direction | 步骤条方向 | `String` | `horizontal` |
| steps | 步骤content | `Array` | `含有title，desc的数组` |
| icon | 执行过的步骤标志icon  | `String` | `checkbox` |
| color | 执行过的步骤颜色 | `String` | `默认与activeColor一致` |
| activeIcon | 当前步骤icon  | `String` | `choice-facet` |
| activeColor | 当前步骤颜色 | `String` | `#FD7622` |
| inActiveIcon | 未完成步骤icon | `String` | `与icon一致` |
| inActiveColor | 未完成步骤颜色 | `String` | `#ccc` |
| activeIndex | 当前步骤下标 | `Number` | 2 |
| stepsStyle | 模块样式 | `String` | `` |

## 特别说明

``` js
  //默认 
  const steps = [
    {title: '步骤一', desc: '信息描述'},
    {title: '步骤二', desc: '信息描述'},
    {title: '步骤三', desc: '信息描述'},
    {title: '步骤四', desc: '信息描述'},
  ]
  // 如果要自定义内容样式，必须含有唯一标示属性slot，用法如上(自定义内容)
  const steps = [
    {slot: '123455', status: '退款成功', time: '2019-12-24 11:13', desc: '退款'},
    {slot: '223455', status: '退款成功', time: '2019-12-24 11:13', desc: '退款'},
    {slot: '233455', status: '退款成功', time: '2019-12-24 11:13', desc: '退款'},
    {slot: '323455', status: '退款成功', time: '2019-12-24 11:13', desc: '退款'},
    {slot: '323453', status: '退款成功', time: '2019-12-24 11:13', desc: '退款'},
  ]
```

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根节点 |
