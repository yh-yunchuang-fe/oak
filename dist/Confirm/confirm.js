"use strict";
Component({
    properties: {
        isConfirmShow: {
            type: Boolean,
            value: false
        },
        confirmText: {
            type: String,
            value: '确定',
        },
        cancelText: {
            type: String,
            value: '取消',
        },
        content: {
            type: String,
            value: '',
        },
        title: {
            type: String,
            value: '',
        },
        showCancel: {
            type: Boolean,
            value: false
        }
    },
    externalClasses: ['confirm-btn-class'],
    data: {},
    methods: {
        hide() {
            this.setData({
                isConfirmShow: false,
            });
        },
        show() {
            this.setData({
                isConfirmShow: true,
            });
        },
        onModalConfirm() {
            this.hide();
            this.triggerEvent('onModalConfirm');
        },
        onModalCancel() {
            this.hide();
            this.triggerEvent('onModalCancel');
        },
        onModalClose() {
            this.hide();
        },
        move() {
        }
    },
});
