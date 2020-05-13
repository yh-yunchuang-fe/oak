import BasicBehavior from 'Mixins/basic'
Component({
    behaviors: [BasicBehavior],
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        innerText: {
            type: String,
            value: 'default value',
            optionalTypes: [String],
        }
    },
    data: {
        // 这里是一些组件内部数据
        isShowDropdownList:false,
        activeIndex:'',
        activeValue: ''
    },
    methods: {
        onIsShowDropdownList(): void {
            const { isShowDropdownList } = this.data
            this.setData({
                isShowDropdownList: !isShowDropdownList
            })
        },
        onClickItem(e): void {
            console.log('value>>>', e)
            const { id, value=''} = e.target
            this.setData({
                activeIndex: id,
                activeValue: value
            })
        }

    }
})
