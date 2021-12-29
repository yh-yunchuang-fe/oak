import BasicBehavior from 'Mixins/basic'

Component({
    behaviors: [BasicBehavior],
    properties: {
        //字体颜色
        color: {
            type: String,
            value: '#fff',
        },
        // 背景色 支持渐变
        background: {
            type: String,
            value: '#FF1A34',
        },
        // 边框颜色 默认不显示
        borderColor: {
            type: String,
            value: '#FF1A34',
        },
        // 是否空心
        plain: {
            type: Boolean,
            value: false,
        },
        // 前后图标 支持图片
        icon: {
            type: String,
            value: null,
        },
        //图标 位置
        iconPosition: {
            type: String,
            value: 'before', // before | after
        },
        //图标 样式
        iconStyle: {
            type: String,
            value: '', 
        },
        // 圆角
        radius: {
            type: String,
            value: '',
        },

        disabled:{
            type: Boolean,
            value: false,
        }
    },
    methods: {
    },
    externalClasses: ['ext-class', 'before-class', 'after-class'],
})
