Component({
    properties: {
        bordeRadiu: { // 设置进度条圆角
            type: Number,
            value: 0
        },
        activeColor: { // 已选择的进度条颜色
            type: String,
            value: '#09BB07'
        },
        bgColor: { // 未选择的进度条颜色
            type: String,
            value: '#EBEBEB'
        },
        strokeWidth: { // 已选择百分比
            type: String,
            value: 0
        },
        disabled: { // 置灰状态
            type: Boolean,
            value: true
        }
    },
    externalClasses: ['ext-class', 'active-class', 'disabled-class'],
    data: {
        
    },
    methods: {
        
    }
})
