import BasicBehavior from '../mixins/basic';
import OpenTypeBehavior from '../mixins/open-type';
import ButtonBehavior from '../mixins/open-type';
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
            observer() {
                this.toggleShow();
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
        actionSheetItemClick(e) {
            const { index } = e.currentTarget.dataset;
            this.triggerEvent('onSelect', { index, item: this.data.itemList[index] });
        },
        actionSheetCancle() {
            this.triggerEvent('onClose');
        },
        animationEnd(e) {
            e.detail.animationName === 'slideOutDown' && this.setData({
                _isShow: false,
            });
        },
        toggleShow() {
            const { isShow, mask } = this.data;
            if (isShow) {
                this.setData({
                    _isShow: isShow,
                    _mask: mask,
                    _maskAnimate: 'fadeIn',
                    _actionAnimate: 'slideInUp',
                    _actionShow: true,
                });
            }
            else {
                this.setData({
                    _maskAnimate: 'fadeOut',
                    _actionAnimate: 'slideOutDown',
                    _mask: false,
                    _actionShow: false,
                });
            }
        }
    }
});
