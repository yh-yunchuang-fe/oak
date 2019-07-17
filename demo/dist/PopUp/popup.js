import BasicBehavior from '../mixins/basic';
import openType from '../mixins/open-type';
let showTimer;
let closeTimer;
Component({
    behaviors: [BasicBehavior, openType],
    properties: {
        size: {
            type: Object,
            value: { width: '100%', height: '70%' },
        },
        opacity: {
            type: Number,
            value: 70,
        },
        position: {
            type: String,
            value: 'bottom',
        },
        direction: {
            type: String,
            value: 'none',
        },
        zIndex: {
            type: Number,
            value: 10,
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
        someData: {},
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
                }, 30);
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
                }, 30);
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
            this._hide();
            this.triggerEvent('onHide', {});
        },
    },
    externalClasses: ['model-class'],
});
