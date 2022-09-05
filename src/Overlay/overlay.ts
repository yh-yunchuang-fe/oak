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
        maskClosable: {
            type: Boolean,
            value: false
        },
        // mask是否显示
        show: {
            type: Boolean,
            value: true,
            observer(newVal,oldVal): void {
                if(newVal !== oldVal){
                    this.toggleShow()
                }
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
            this.showCount = 0
            this.toggleShow()
        },
    },
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 设置页面overflow，解决浮层滚动穿透问题
         * @param overflow 
         * @returns 
         */
        setPageOverflow(overflow): void {
            try {
                // @ts-ignore
                wx.setPageStyle({
                    style: { overflow },
                })
            } catch (err) {
                console.warn(err)
            }
        },
        toggleShow(): void {
            const { show, animate } = this.data
            if (show) {
                this.setData({
                    show,
                    _show: show,
                    isFirst: false,
                    _animate: animate ? 'fadeIn' : '',
                })
                this.showCount += 1
                this.setPageOverflow('hidden')
            } else {
                this.hide()
            }
        },
        // 隐藏
        hide(): void {
            if(!this.showCount) return
            const { animate } = this.data
            this.setData({
                _show: false,
                _animate: animate ? 'fadeOut' : '',
            })
            this.showCount -= 1
            this.triggerEvent('hide')
            this.setPageOverflow('visible')
        },

        animationEnd(e: event): void {
            e.detail.animationName === 'fadeOut' && this.setData({
                show: false,
                _animate: '',
            }, (): void => {
                this.triggerEvent('animationEnd')
            })
        },
        // 点击mask调用
        onMaskClick(): void {
            this.triggerEvent('maskClick')
            this.data.maskClosable && this.hide()
        }
    }
})
