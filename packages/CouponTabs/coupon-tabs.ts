Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabs: {
            type: Array,
            value: []
        },
        // 选中的tab
        selectIndex: {
            type: Number,
            value: 0,
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onTabClick(event) {
            const {
                dataset,
            } = event.currentTarget || {}
            this.setData({
                selectIndex: dataset.index,
            })
            this.triggerEvent('onTabClick', {
                dataset,
            })
        }
    },
    externalClasses: ['ext-class', 'tab-class', 'tab-title'],
})