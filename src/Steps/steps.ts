Component({
    properties: {
        icon: {
            type: String,
            value: 'checked'
        },
        color: {
            type: String,
            value: '#ccc'
        },
        activeIndex: {
            type: Number,
            value: 2
        },
        activeIcon: {
            type: String,
            value: 'checked'
        },
        activeColor: {
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
