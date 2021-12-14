import BasicBehavior from '../mixins/basic'
import OpenTypeBehavior from '../mixins/open-type'
import ButtonBehavior from 'Mixins/button-mixin'

Component({
    behaviors: [BasicBehavior, OpenTypeBehavior, ButtonBehavior],
    properties: {
        // 按钮的颜色
        color: {
            type: String,
            value: 'default', // 'default' | 'primary'
        },
        // 填充模式
        fill: {
            type: String,
            value: 'solid',// 'solid' | 'outline' | 'none'
        },
        // 大小
        size: {
            type: String,
            value: 'middle', // 'mini' | 'small' | 'middle' | 'large'
        },
        // 是否是块级元素
        block: {
            type: Boolean,
            value: false
        },
        // 按钮形状-圆角
        round: {
            type: Boolean,
            value: false
        },
        // 按钮形状-直角
        angle: {
            type: Boolean,
            value: false
        },
        // // 按钮形状-胶囊（默认）
        // capsules: {
        //     type: Boolean,
        //     value: false
        // },
        // 是否是待唤起状态
        waiting: {
            type: Boolean,
            value: false
        },
        // 是否是块级元素
        disabled: {
            type: Boolean,
            value: false
        },
        // 是否处于加载状态
        loading: {
            type: Boolean,
            value: false
        },
        // 加载状态下额外展示的文字
        loadingText: {
            type: String,
            value: '',
        },
        // 图标
        icon: {
            type: String,
            value: '',
        },
    },
    data: {
        loadingColor: ''
    },
    lifetimes: {
        ready(): void {
            this.setLoadingColor()
        }
    },
    methods: {
        setLoadingColor(): void {
        },
        onTap(e: event): void {
            if (this.data.disabled) return
            this.triggerEvent('click', e)
        }
    },
    externalClasses: ['button-class', 'hover-class', 'loading-class'],
})
