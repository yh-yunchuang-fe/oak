Component({
    properties: {
        name: { // 作为 key 使用
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
        placeholder: {
            type: String,
            value: ''
        },
        disabled: {
            type: Boolean,
            value: false
        },
        autosize: { // 只对 textarea 生效
            type: Boolean,
            value: ''
        },
        placeholderStyle: {
            type: String,
            value: ''
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
        error: {
            type: Boolean,
            value: false
        },
        rules: {
            type: Array,
            value: null
        }
    },
    externalClasses: ['ext-class'],
    data: {},
    methods: {
        change(e) {
            this.triggerEvent('change', e)
        },
        focus(e) {
            this.triggerEvent('focus', e)
        },
        blur(e) {
            this.triggerEvent('blur', e)
        },
        confirm(e) {
            this.triggerEvent('confirm', e)
        },
        keyboardheightchange(e) {
            this.triggerEvent('keyboardheightchange', e)
        }
    }
})
