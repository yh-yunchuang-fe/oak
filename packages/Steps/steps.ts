Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        icon: {
            type: String,
            value: 'checkbox'
        },
        color: {
            type: String,
            value: ''
        },
        activeIndex: {
            type: Number,
            value: 2
        },
        activeIcon: {
            type: String,
            value: 'choice-facet'
        },
        activeColor: {
            type: String,
            value: '#FD7622'
        },
        inActiveIcon: {
            type: String,
            value: ''
        },
        inActiveColor: {
            type: String,
            value: ''
        },
        steps: {
            type: Array,
            value: [
                {title: '步骤一', desc: '信息描述'},
                {title: '步骤二', desc: '信息描述'},
                {title: '步骤三', desc: '信息描述'},
                {title: '步骤四', desc: '信息描述'},
            ]
        },
        direction: {
            type: String,
            value: 'horizontal'
        },
        stepsStyle: {
            type: String,
            value: ''
        },
    },
    externalClasses: ['ext-class'],
    data: {
        
    },
    methods: {
        
    }
})
