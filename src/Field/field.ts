Component({
    behaviors: ['wx://form-field'],
    options: {
        multipleSlots: true
    },
    properties: {
        type: {
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
            // 只对 textarea 生效
            type: Boolean,
            value: ''
        },
        singleInput: {
            type: Boolean,
            value: false
        },
        placeholderStyle: {
            type: String,
            value: 'color: #ccc;'
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
        passwordIconColor: {
            type: String,
            value: '#cdcdcd'
        },
        selectPasswordVisiable: {
            type: Boolean,
            value: false
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
        },
        countDownNum: {
            type: Number,
            value: 60
        }
    },
    data: {
        focused: false,
        visiable: true, // 是否显示输入框
        seePasswordType: 0, // 0 密文，1 明文
        countDownTime: 0,
    },
    lifetimes: {
        attached() {

        },
        moved() {},
        detached() {
            if(this.data.visiable) {
                this.setData({visiable: false})
            }
        },
    },
    pageLifetimes: {
        show() {
            if(!this.data.visiable) {
                this.setData!({visiable: true})
            }
        },
        hide() {
            if(this.data.visiable) {
                this.setData!({visiable: false})
            }
        },
    },
    methods: {
        focus(e): void {
            if (!this.data.focused) {
                this.setData({ focused: true })
            }
            this.triggerEvent('focus', {...e.detail})
        },
        change(e): void {
            const { value = '' } = e.detail || {}
            this.setData({ value }, (): void => {
                this.triggerEvent('change', {...e.detail})
                this.triggerEvent('input', {...e.detail})
            })
        },
        blur(e): void {
            if (this.data.focused) {
                this.setData({ focused: false })
            }
            this.triggerEvent('blur', {...e.detail})
        },
        confirm(e): void {
            this.triggerEvent('confirm', {...e.detail})
        },
        keyboardheightchange(e): void {
            this.triggerEvent('keyboardheightchange', {...e.detail})
        },
        clear(): void {
            this.setData({ value: '' }, (): void => {
                this.triggerEvent('clear')
            })
        },
        // 切换密文明文方式
        selectSeePasswordType(): void {
            const { seePasswordType } = this.data
            this.setData({
                seePasswordType: seePasswordType ? 0 : 1,
            })
        },
        // 获取验证码
        getCaptcha(): void {
            if(this.getCaptchaing) return
            this.getCaptchaing = true
            const { countDownNum } = this.data
            let countDownTime = countDownNum || 60
            this.setData({
                countDownTime,
            })
            this.timer = setInterval((): void => {
                countDownTime--
                this.setData({
                    countDownTime,
                })
                if(countDownTime < 1) {
                    clearInterval(this.timer)
                    this.getCaptchaing = false
                }
            }, 1000)
            this.triggerEvent('captcha')
        }
    },
    externalClasses: ['ext-class', 'input-class',],
})
