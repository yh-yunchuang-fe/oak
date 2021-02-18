import BasicBehavior from '../mixins/basic';
const animationMap = {
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
};
Component({
    behaviors: [BasicBehavior],
    properties: {
        mask: {
            type: Boolean,
            value: true,
        },
        safeArea: {
            type: Boolean,
            value: true,
        },
        zIndex: {
            type: Number,
            value: 9,
        },
        show: {
            type: Boolean,
            value: false,
            observer() {
                this.toggleShow();
            }
        },
        position: {
            type: String,
            value: 'center',
        },
        duration: {
            type: Number,
            value: 400,
        },
        background: {
            type: String,
            value: '#fff',
        },
        width: {
            type: String,
            value: null,
        },
        height: {
            type: String,
            value: null,
        },
        top: {
            type: String,
            value: null,
        },
        bottom: {
            type: String,
            value: null,
        }
    },
    data: {
        _mask: false,
        _bodyShow: false,
        _maskAnimate: 'fadeIn',
        _bodyAnimate: '',
    },
    attached() {
        this.setData({
            isIPhonex: this.isiPhoneXUp(),
        });
    },
    externalClasses: ['ext-class', 'body-class', 'content-class'],
    methods: {
        popupClose() {
            this.triggerEvent('onPopupClose');
        },
        animationEnd(e) {
            const animation = animationMap[this.data.position] || {};
            e.detail.animationName === animation.out && this.setData({
                _isShow: false,
            });
        },
        toggleShow() {
            const { show, mask, position } = this.data;
            const animation = animationMap[position];
            if (show) {
                this.setData({
                    _isShow: show,
                    _mask: mask,
                    _maskAnimate: 'fadeIn',
                    _bodyAnimate: animation.in || '',
                    _bodyShow: true,
                });
            }
            else {
                this.setData({
                    _maskAnimate: 'fadeOut',
                    _bodyAnimate: animation.out || '',
                    _mask: false,
                    _bodyShow: false,
                });
            }
        }
    }
});
