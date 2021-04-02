Component({
    properties: {
        radiu: {
            // 设置进度条圆角
            type: Number,
            value: 12
        },
        color: {
            // 已选择的进度条颜色
            type: String,
            value: '#FF3819'
        },
        bgColor: {
            // 未选择的进度条颜色
            type: String,
            value: '#ff38194d'
        },
        strokeWidth: {
            // 已选择百分比
            type: String,
            value: 0
        },
        disabledColor: {
            type: String,
            value: '#aaa'
        },
        disabledBgColor: {
            type: String,
            value: '#ddd'
        },
        disabled: {
            // 置灰状态
            type: Boolean,
            value: false
        },
        rotate: {
            type: Number,
            value: 90
        },
    },
    externalClasses: ['ext-class', 'bg-class', 'color-class', 'disabled-bg-class', 'disabled-color-class'],
    data: {},
    methods: {}
})
