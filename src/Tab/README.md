# Tab 标签页

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-tab": "path/to/your/oakui/Tab/tab"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-tab tabs="{{ [{title:'标题1'},{title:'标题2'},{title:'标题3'}] }}"></oak-tab>，
```

## 代码演示

### 标签类型
`Tab` 提供了多种类型样式，可以通过 `type` 指定，默认为下横线。
```html
<!-- default 基础样式 -->
<oak-tab tabs="{{ tabs }}" ></oak-tab>
<!-- combination 组合样式 -->
<oak-tab tabs="{{ combinationTabs }}" type="combination" ></oak-tab>
<!-- button 胶囊样式 -->
<oak-tab tabs="{{ tabs }}" type="button" ></oak-tab>
<!-- img 图片样式 -->
<oak-tab tabs="{{ tabs }}" type="img" ></oak-tab>
<!-- img 支持排序，仅支持图片样式 -->
<oak-tab tabs="{{ tabs }}" type="img" sort></oak-tab>
```
```ts
Page({
    data:{
        tabs: [
            { title: '超级热卖' },
            { title: '为你推荐' },
            { title: '新鲜水果' },
        ],
        combinationTabs: [
            { title: '猜你喜欢',subtitle:'精选好物' },
            { title: '品质鲜果' ,subtitle:'健康安心'},
            { title: '时令商品' ,subtitle:'应季鲜货'} ,
            { title: '熟食卤味' ,subtitle:'懒人即食'},
        ],
    }
})
```

### 超出支持侧滑
当tabs超出屏幕宽度时，支持侧滑
```html
<!-- default 基础样式 -->
<oak-tab tabs="{{ moreTabs }}" ></oak-tab>
<!-- combination 组合样式 -->
<oak-tab tabs="{{ combinationTabs }}" type="combination" ></oak-tab>
<!-- button 胶囊样式 -->
<oak-tab tabs="{{ moreTabs }}" type="button" ></oak-tab>
<!-- img 图片样式 -->
<oak-tab tabs="{{ moreTabs }}" type="img" ></oak-tab>
<!-- img 支持排序，仅支持图片样式 -->
<oak-tab tabs="{{ moreTabs }}" type="img" sort></oak-tab>
```
```ts
Page({
    data:{
        combinationTabs: [
            { title: '猜你喜欢',subtitle:'精选好物' },
            { title: '品质鲜果' ,subtitle:'健康安心'},
            { title: '时令商品' ,subtitle:'应季鲜货'} ,
            { title: '熟食卤味' ,subtitle:'懒人即食'},
            { title: '熟食卤味' ,subtitle:'懒人即食'},
        ],
        moreTabs: [
            { title: '超级热卖' },
            { title: '为你推荐' },
            { title: '新鲜水果' },
            { title: '品质蔬菜' },
            { title: '海鲜水产' },
        ]
    }
})
```


## API

| 属性       | 说明                                                  | 类型       | 默认值    |
| ---------- | ----------------------------------------------------- | ---------- | --------- |
| type       | 预设值，有：`default`, `combination`, `button`, `img` | `string`   | `default` |
| tabs       | 标签列表,必填                                         | `Tab[]`    | -         |
| sort       | 是否支持排序, 仅在img类型下支持                       | `boolean`  | false     |
| active     | 激活tab的index，默认激活第一个                        | `number`   | 0         |
| change     | 激活tab的回调，入参为激活的tab项数据 `Tab[]`          | `Function()` | -         |
| sortChange | 所有tabs的排序数组，入参`string[]`                    | `Function` | -         |

## typescript
```ts
//  排序枚举
enum Sort {
    Default = 'default',
    Asc = 'asc',
    Desc = 'desc',
}

// Tab项
interface Tab {
    key: string;
    title: string;
    subtitle?: string;
    icon?: string;
    sort?: Sort;
}
```


## 外部样式类

| 类名       | 说明          |
| ---------- | ------------- |
| ext-class  | 根结点样式    |
| item-class | 某一项tab样式 |