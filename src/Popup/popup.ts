import BasicBehavior from 'Mixins/basic'

const animationMap: { [key: string]: { in: string; out: string } } = {
    left: {
        in: 'slideInLeft',
        out: 'slideOutLeft',
    },
    top: {
        in: 'slideInDown',
        out: 'slideOutUp',
    },
    right: {
        in: 'slideInRight',
        out: 'slideOutRight',
    },
    bottom: {
        in: 'slideInUp',
        out: 'slideOutDown',
    },
    center: {
        in: 'fadeIn',
        out: 'fadeOut'
    }
}

Component({
    behaviors: [BasicBehavior],
    properties: {
        show: {
            type: Boolean,
            value: false,
            observer(): void {
                this.toggleShow()
            }
        },
        mask: {
            type: Boolean,
            value: true,
        },
        closeClickMask: {
            type: Boolean,
            value: true,
        },
        zIndex: {
            type: Number,
            value: 9,
        },
        // 弹窗位置
        position: {
            type: String,
            value: 'center',// center top bottom
        },
        duration: {
            type: Number,
            value: 200,
        },
    },
    data: {
        _maskShow: false,
        _bodyShow: false,
        _animate: '',
    },
    attached(): void {
        this.setData({
            isIPhonex: this.isiPhoneXUp(),
        })
    },
    methods: {
        maskClick(): void {
            if (this.data.closeClickMask) {
                this.popupClose()
            }
        },
        popupClose(): void {
            this.triggerEvent('onPopupClose')
        },
        animationEnd(e: event): void {
            const animation = animationMap[this.data.position] || {}
            const isOut = e.detail.animationName === animation.out
            if (isOut) {
                this.setData({
                    _maskShow: false,
                })
            }
        },
        toggleShow(): void {
            const { show, position } = this.data
            const animation = animationMap[position]
            if (show) {
                this.setData({
                    _maskShow: true,
                    _bodyShow: true,
                    _animate: animation.in || '',
                })
            } else {
                this.setData({
                    _bodyShow: false,
                    _animate: animation.out || '',
                })
            }
        }
    },
    externalClasses: ['ext-class', 'body-class'],
})
