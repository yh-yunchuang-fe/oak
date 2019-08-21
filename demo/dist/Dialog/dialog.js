import BasicBehavior from '../mixins/basic';
import openType from '../mixins/open-type';
let showTimer;
let closeTimer;
Component({
    behaviors: [BasicBehavior, openType],
    properties: {
        style: {
            type: String,
            value: 'padding: 30rpx;',
        },
        maskStyle: {
            type: String,
            value: 'background-color: rgba(0,0,0,.7)',
        },
        position: {
            type: String,
            value: 'center',
        },
        direction: {
            type: String,
            value: 'none',
        },
        animationType: {
            type: String,
            value: 'none',
        },
        duration: {
            type: Number,
            value: 300,
        },
        maskClosable: {
            type: Boolean,
            value: true,
        },
        isShow: {
            type: Boolean,
            value: false,
            observer(newVal) {
                newVal ? this._show() : this._hide();
            },
        },
    },
    data: {
        isShowClass: 'hide',
        startClass: '',
        endClass: '',
    },
    ready() {
    },
    methods: {
        _show() {
            this.setData({
                isShowClass: '',
            });
            if (this.data.direction === 'left' || this.data.direction === 'right' || this.data.direction === 'top' || this.data.direction === 'bottom') {
                this.setData({
                    startClass: this.data.direction,
                    endClass: '',
                });
                clearTimeout(showTimer);
                showTimer = setTimeout(() => {
                    this.setData({
                        startClass: '',
                        endClass: this.data.position,
                    });
                }, 100);
            }
            else {
                this.setData({
                    startClass: '',
                    endClass: this.data.position,
                });
            }
        },
        _hide() {
            if (this.data.direction === 'left' || this.data.direction === 'right' || this.data.direction === 'top' || this.data.direction === 'bottom') {
                this.setData({
                    startClass: this.data.direction,
                    endClass: '',
                });
                clearTimeout(closeTimer);
                closeTimer = setTimeout(() => {
                    this.setData({
                        isShowClass: 'hide',
                        isShow: false,
                    });
                }, 300);
            }
            else {
                this.setData({
                    startClass: this.data.direction,
                    endClass: '',
                    isShowClass: 'hide',
                    isShow: false
                });
            }
        },
        _maskClick() {
            if (!this.data.maskClosable)
                return;
            this._hide();
            this.triggerEvent('onHide', {});
        },
    },
    externalClasses: ['dialog-class'],
});
