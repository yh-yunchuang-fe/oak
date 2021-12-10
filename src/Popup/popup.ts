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
            value: 'center',// center top bottom left right
        },
        // 动画时长 ms
        duration: {
            type: Number,
            value: 200
        },
        // 显示尺寸：占宽高比的7/9 6/9 5/9 4/9 3/9，不传为自适应尺寸（根据内容自适应）
        sizeInNine:{
            type: String,
            value: '',// 2 3 4 5 6 7
        },
        // 显示圆角：仅上下浮层
        showRadius:{
            type: Boolean,
            value: true,
        },
        // 显示标题：仅上下浮层
        showTitle:{
            type: Boolean,
            value: true,
        }
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
    externalClasses: ['root-class', 'body-class', 'title-class'],
})
