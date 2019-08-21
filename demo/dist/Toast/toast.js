import BasicBehavior from '../mixins/basic';
import openType from '../mixins/open-type';
let toastTimer;
Component({
    behaviors: [BasicBehavior, openType],
    properties: {
        opacity: {
            type: Number,
            value: 70,
        },
        zIndex: {
            type: Number,
            value: 10,
        },
        isShow: {
            type: Boolean,
            value: false,
            observer(newVal) {
                newVal && this._show();
            },
        },
        duration: {
            type: Number,
            value: 2000,
        },
        message: {
            type: String,
            value: 'toast',
        },
    },
    data: {},
    methods: {
        _show() {
            this.setData({
                isShow: true
            });
            toastTimer = setTimeout(() => {
                this.setData({
                    isShow: false
                });
                clearTimeout(toastTimer);
            }, this.data.duration);
        },
    },
    ready() {
    },
    externalClasses: ['toast-class'],
});
