/**
 * 简介：遮罩组件
 * 属性：autoClose 是否点击遮罩自动隐藏
 * 方法：show 显示,hide隐藏
 * 事件：onMaskClick 遮罩被点击。
 */
Component({
    /**
     * 组件的属性列表
     */
    externalClasses: ['ext-class'],
    properties: {
        // 是否点击遮罩，自动隐藏
        autoClose: {
            type: Boolean,
            value: false
        },
        // mask是否显示
        show: {
            type: Boolean,
            value: true,
            observer(): void {
                this.toggleShow()
            }
        },
        type: {
            type: String,
            value: 'page', // page, card
        },
        animate: {
            type: Boolean,
            value: true,
        },
        background: {
            type: String,
            value: '',
        },
        zIndex: {
            type: Number,
            value: 10,
        }
    },
    data: {
        _show: false,
        _animate: '',
        _duration: 200
    },
    lifetimes: {
        attached(): void {
            this.toggleShow()
        },
    },
    /**
     * 组件的方法列表
     */
    methods: {
        toggleShow(): void {
            const { show, animate } = this.data
            if (show) {
                this.setData({
                    show,
                    _show: show,
                    _animate: animate ? 'fadeIn' : '',
                })
            } else {
                this.hide()
            }
        },
        // 隐藏
        hide(): void {
            const { animate } = this.data
            this.setData({
                _show: false,
                _animate: animate ? 'fadeOut' : '',
            })
            this.triggerEvent('hide')
        },

        animationEnd(e: event): void {
            e.detail.animationName === 'fadeOut' && this.setData({
                show: false,
                _animate: '',
            })
        },
        // 点击mask调用
        onMaskClick(): void {
            this.triggerEvent('maskClick')
            this.data.autoClose && this.hide()
        }
    }
})
