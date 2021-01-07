"use strict";
Component({
    behaviors: ['wx://form-field'],
    options: {
        multipleSlots: true
    },
    properties: {
        name: {
            type: String,
            value: ''
        },
        label: {
            type: String,
            value: ''
        },
        value: {
            type: String,
            value: ''
        },
        type: {
            type: String,
            value: ''
        },
        icon: {
            type: String,
            value: ''
        },
        iconColor: {
            type: String,
            value: '#FD7622'
        },
        iconSize: {
            type: String,
            value: '36rpx'
        },
        placeholder: {
            type: String,
            value: ''
        },
        disabled: {
            type: Boolean,
            value: false
        },
        autosize: {
            type: Boolean,
            value: ''
        },
        singleInput: {
            type: Boolean,
            value: false
        },
        placeholderStyle: {
            type: String,
            value: 'color: #888'
        },
        placeholderClass: {
            type: String,
            value: ''
        },
        focus: {
            type: Boolean,
            value: false
        },
        confirmType: {
            type: String,
            value: ''
        },
        confirmHold: {
            type: Boolean,
            value: false
        },
        cursor: {
            type: Number,
            value: null
        },
        selectionStart: {
            type: Number,
            value: -1
        },
        selectionEnd: {
            type: Number,
            value: -1
        },
        adjustPosition: {
            type: Boolean,
            value: true
        },
        holdKeyboard: {
            type: Boolean,
            value: false
        },
        maxlength: {
            type: Number,
            value: 140
        },
        cursorSpacing: {
            type: Number,
            value: 0
        },
        clearable: {
            type: Boolean,
            value: false
        },
        clearIconColor: {
            type: String,
            value: '#cdcdcd'
        },
        error: {
            type: Boolean,
            value: false
        },
        errorMessage: {
            type: String,
            value: ''
        },
        rules: {
            type: Array,
            value: null
        },
        border: {
            type: Boolean,
            value: false
        },
        button: {
            type: String,
            value: null
        },
        required: {
            type: Boolean,
            value: false
        }
    },
    externalClasses: ['ext-class', 'input-class'],
    data: {
        focused: false,
        visiable: true,
    },
    lifetimes: {
        attached() {
        },
        moved() { },
        detached() {
            if (this.data.visiable) {
                this.setData({ visiable: false });
            }
        },
    },
    pageLifetimes: {
        show() {
            if (!this.data.visiable) {
                this.setData({ visiable: true });
            }
        },
        hide() {
            if (this.data.visiable) {
                this.setData({ visiable: false });
            }
        },
    },
    methods: {
        focus(e) {
            if (!this.data.focused) {
                this.setData({ focused: true });
            }
            this.triggerEvent('focus', Object.assign({}, e.detail));
        },
        change(e) {
            const { value = '' } = e.detail || {};
            this.setData({ value }, () => {
                this.triggerEvent('change', Object.assign({}, e.detail));
                this.triggerEvent('input', Object.assign({}, e.detail));
            });
        },
        blur(e) {
            if (this.data.focused) {
                this.setData({ focused: false });
            }
            this.triggerEvent('blur', Object.assign({}, e.detail));
        },
        confirm(e) {
            this.triggerEvent('confirm', Object.assign({}, e.detail));
        },
        keyboardheightchange(e) {
            this.triggerEvent('keyboardheightchange', Object.assign({}, e.detail));
        },
        clear() {
            this.setData({ value: '' }, () => {
                this.triggerEvent('clear');
            });
        }
    }
});
