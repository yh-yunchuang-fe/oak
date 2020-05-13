import BasicBehavior from 'Mixins/basic'
Component({
    behaviors: [BasicBehavior],
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        innerText: {
            type: String,
            value: 'default value',
            optionalTypes: [String],
        },
        isNoHaveList: {
            type: Boolean,
            value: false
        },
        dropDownList: {
            type: Array,
            value: [],
        },
        activeValue: {
            type: String,
            value: '排序方式',
        },
        styles: {
            type: Object,
            value: {},
        }
    },
    data: {
        // 这里是一些组件内部数据
        isShowDropdownList:false,
        activeIndex:'',
    },
    methods: {
        onIsShowDropdownList(): void {
            const { isShowDropdownList, isNoHaveList } = this.data
            this.setData({
                isShowDropdownList: !isShowDropdownList
            })
            if(isNoHaveList){
                console.log('执行升序或降序')
            }
        },
        onClickItem(e): void {
            console.log(' onClickItem e>>>', e)
            const { index} = e.target.dataset
            this.setData({
                isShowDropdownList: false,
                activeIndex: index,
            })
            this.triggerEvent('onSelect', { index})
            this.triggerEvent('onHrefSelect', { index})
            
        }
    }
})
