import BasicBehavior from 'Mixins/basic'
import OpenTypeBehavior from 'Mixins/open-type'
import ButtonBehavior from 'Mixins/open-type'

Component({
    behaviors: [BasicBehavior, OpenTypeBehavior, ButtonBehavior],
    properties: {
        mask: {
            type: Boolean,
            value: true,
        },
        isShow: {
            type: Boolean,
            value: false,
            observer(): void {
                this.toggleShow()
            }
        },
        itemList: {
            type: Array,
            value: [],
        },
        cancleText: {
            type: String,
            value: '取消',
        },
        zIndex: {
            type: Number,
            value: 9,
        }
    },
    data: {
        _mask: false,
        _actionShow: false,
        _maskAnimate: 'fadeIn',
        _actionAnimate: 'slideInUp',
        _duration: 400,
        isIPhonex: /iPhone X/g.test(wx.getSystemInfoSync().model),
    },
    methods: {
        actionSheetItemClick(e: event): void {
            const { index } = e.currentTarget.dataset
            this.triggerEvent('onSelect', { index, item: this.data.itemList[index] })
        },
        actionSheetCancle(): void {
            this.triggerEvent('onClose')
        },
        animationEnd(e: event): void {
            e.detail.animationName === 'slideOutDown' && this.setData({
                _isShow: false,
            })
        },
        toggleShow(): void {
            const { isShow, mask } = this.data
            if (isShow) {
                this.setData({
                    _isShow: isShow,
                    _mask: mask,
                    _maskAnimate: 'fadeIn',
                    _actionAnimate: 'slideInUp',
                    _actionShow: true,
                })
            } else {
                this.setData({
                    _maskAnimate: 'fadeOut',
                    _actionAnimate: 'slideOutDown',
                    _mask: false,
                    _actionShow: false,
                })
            }
        }
    }
})
