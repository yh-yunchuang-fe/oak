import BasicBehavior from '../mixins/basic'

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
        maskClosable: {
            type: Boolean,
            value: true,
        },
        zIndex: {
            type: Number,
            value: 10,
        },
        // 弹窗位置
        position: {
            type: String,
            value: 'bottom',// center top bottom left right
        },
        // 动画时长 ms
        duration: {
            type: Number,
            value: 200
        },
        // 显示尺寸：占宽高比的7/9 6/9 5/9 4/9 3/9，不传为自适应尺寸（根据内容自适应）
        sizeInNine: {
            type: String,
            value: '',// 2 3 4 5 6 7
        },
        // 显示圆角：仅上下浮层
        showRadius: {
            type: Boolean,
            value: true,
        },
        //是否显示左上角的关闭按钮
        closable: {
            type: Boolean,
            value: true,
        },
        // 标题：中间
        title: {
            type: String,
            value: '',
        },
        // 标题样式
        titleStyle: {
            type: String,
            value: '',
        },
        // 次标题：右侧
        subTitle: {
            type: Object,
            value: {
                name: '',   // 文字 优先与icon
                icon: '',   // icon 
                style: '',  // 样式
            },
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
            this.triggerEvent('onMaskClick')
            if (this.data.maskClosable) {
                this.popupClose()
            }
        },
        popupClose(): void {
            this.setData({
                show: false,
            })
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
        },
        onSubTitleClick(e: event): void {
            this.triggerEvent('subTitleClick', e)
        }
    },
    externalClasses: ['root-class', 'body-class', 'header-class'],
})
