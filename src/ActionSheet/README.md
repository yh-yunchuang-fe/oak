# ActionSheet 菜单

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-action-sheet": "path/to/your/oakui/ActionSheet/action-sheet"
}
```

在页面使用
```html
<!-- use in `page.wxml` -->
<oak-action-sheet />
```

## 代码演示
### 基础用法
传入一个 `itemList` 数组，每一个 `item` 是一个对象，属性具体看下文。

```html
<oak-action-sheet isShow="{{showActionSheet}}"
    item-list="{{ itemList }}"
    bind:onClose="onClose"
    bind:onSelect="onSelect"
/>
```
```js
Page({
    data: {
        showActionSheet: false,
        itemList: [{
            title: '选项1',
        }, {
            title: '选项2',
        }, {
            title: '选项3',
            subtitle: '描述信息'
        }],
    },
    onClose(): void {
        this.setData!({
            showActionSheet: false,
        })
    },
    onSelect(e: { detail: { index: number } }): void {
        console.log(e)
    }
})

```

### 选项状态/定制
选项有 禁用、加载中以及默认三种状态。也支持对UI做一些定制化修改了。
```html
<oak-action-sheet isShow="{{showActionSheet}}"
    item-list="{{ itemList }}"
    bind:onClose="onClose"
    bind:onSelect="onSelect"
/>
```

```js
Page({
    data: {
        showActionSheet: false,
            itemList: [{
                title: '可以用icon',
                icon: 'brush'
            }, {
                title: '禁用状态',
                disabled: true,
            }, {
                subtitle: '加载中..',
                loading: true,
                loaderColor: '#ccc'
            }, {
                title: '字体颜色',
                subtitle: '描述文字颜色',
                color: '#12B7F5',
                subcolor: '#FD7622'
            }],
    },
    onClose(): void {
        this.setData!({
            showActionSheet: false,
        })
    },
    onSelect(e: { detail: { index: number } }): void {
        console.log(e)
    }
})
```

### 选项类型
选项支持小程序 `<button />` 组件的[open-type](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)能力，并具有相应的回调函数。
```html
<oak-action-sheet isShow="{{showActionSheet}}"
    item-list="{{ itemList }}"
    bind:onClose="onClose"
/>
```

```js
Page({
    data: {
        showActionSheet: false,
            itemList: [{
                title: '分享(share)',
                openType: 'share'
            }, {
                title: '打开客服会话(contact)',
                openType: 'contact'
            }, {
                title: '获取用户手机号，(getPhoneNumber)',
                openType: 'getPhoneNumber'
            }, {
                title: '获取用户信息(getUserInfo)',
                openType: 'getUserInfo'
            }, {
                title: '打开APP(launchApp)',
                openType: 'launchApp'
            }, {
                title: '授权设置页(openSetting)',
                openType: 'openSetting'
            }, {
                title: '意见反馈(feedback)',
                openType: 'feedback'
            }],
    },
    onClose(): void {
        this.setData!({
            showActionSheet: false,
        })
    },
    onSelect(e: { detail: { index: number } }): void {
        console.log(e)
    }
})
```
### 取消按钮
取消按钮文案可由 `cancle-text` 配置，如不想显示可设置为空。
```html
<oak-action-sheet isShow="{{showActionSheet}}"
    item-list="{{ itemList }}"
    bind:onClose="onClose"
    cancle-text="{{cancleText}}"
    bind:onSelect="onSelect"
/>
```
```js
Page({
    data: {
        showActionSheet: false,
        itemList: [{
            title: '选项1',
        }, {
            title: '选项2',
        }, {
            title: '选项3',
            subtitle: '描述信息'
        }],
        cancleText: ''
    },
    onClose(): void {
        this.setData!({
            showActionSheet: false,
        })
    },
    onSelect(e: { detail: { index: number } }): void {
        console.log(e)
    }
})

```

## API

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| isShow | 菜单栏是否显示 | `boolen` | `false` |
| itemList | 菜单选项数组 | `object[]` | `[]` |
| mask | 是否展示遮罩 | `boolen` | `true` |
| cancle-text | 取消按钮文案， 为空时不显示 | `string` | `取消` |
| z-index | 设置 `ActionSheet` 的 `z-index`	 | `number` | `9` |
| onClose | 点击遮罩层或取消按钮的回调 | `function` | - |
| onSelect | 选中选项时触发 | `function` | - |


## itemlist
`itemlist` 数组元素是一个对象，每个对象有下列属性。ActionSheet 选项使用 `Button` 组件，继承其部分属性。

| 属性 | 说明 | 类型 |
|-----------|-----------|-----------|
| title | 选项标题 | `string` |
| subtitle | 选项描述 | `string` |
| disabled | 是否禁用，参考 `Button` 组件 | `boolen` |
| icon | 设置图标名， 参考 `Button` 组件 | `string` |
| type | 选项按钮类型，参考 `Button` 组件 | `string` |
| loading | 加载状态，参考 `Button` 组件 | `boolen` |
| loader-color | Loading 颜色，参考 `Button` 组件 | `string` |
| color | 标题颜色 | `string` |
| subcolor | 次标题颜色 | `string` |
| openType | 微信开放能力，参考小程序 `<button />` 组件的[open-type](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | `string` |


