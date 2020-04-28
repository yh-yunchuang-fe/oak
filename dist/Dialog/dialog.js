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
        show: {
            type: Boolean,
            value: false,
            observer(newVal, oldVal) {
                if (!newVal && oldVal) {
                    this._resetData();
                }
            }
        },
        duration: {
            type: Number,
            value: 500,
        },
        maskClosable: {
            type: Boolean,
            value: true,
        },
        cancleText: {
            type: String,
            value: '取消',
        },
        confirmText: {
            type: String,
            value: '确认',
        },
        title: {
            type: String,
            value: '',
        },
        content: {
            type: String,
            value: '',
        },
        confirmType: {
            type: String,
            value: '',
        },
        zIndex: {
            type: Number,
            value: 9,
        },
        confirmAsync: {
            type: Boolean,
            value: false,
        }
    },
    data: {
        okLoading: false,
    },
    methods: {
        confirm(options) {
            const defaultOptions = {
                onCancel: Function,
                onConfirm: Function,
                onClose: Function,
                cancleText: '取消',
                confirmText: '确认',
            };
            this.setData(Object.assign(Object.assign({ show: true }, defaultOptions), options));
        },
        _onPopupClose() {
            const { maskClosable, onClose } = this.data;
            if (maskClosable) {
                if (typeof onClose === 'function') {
                    onClose();
                }
                else {
                    this.triggerEvent('onClose');
                }
                this.close();
            }
        },
        _dialogCancle() {
            const { onCancle } = this.data;
            this.close();
            if (typeof onCancle === 'function') {
                onCancle();
            }
            else {
                this.triggerEvent('onCancle');
            }
        },
        _dialogConfirm() {
            const { onConfirm } = this.data;
            !this.data.confirmAsync && this.close();
            this.data.confirmAsync && this.setData({
                okLoading: true,
            });
            if (typeof onConfirm === 'function') {
                const close = this.close.bind(this);
                onConfirm(close);
            }
            else {
                this.triggerEvent('onConfirm');
            }
        },
        close() {
            this.setData({
                show: false,
            }, () => {
                this._resetData();
            });
        },
        _resetData() {
            clearTimeout(this.resetHandle);
            this.resetHandle = setTimeout(() => {
                this.setData({
                    title: '',
                    content: '',
                    okLoading: false,
                    confirmAsync: false
                });
            }, this.data.duration);
        }
    },
    externalClasses: ['dialog-class',],
});
