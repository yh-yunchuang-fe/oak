Component({
    properties: {
        value: {   // stepper 步进器 value
            type: Number || String,
            value: null,
            observer(newValue): void {
                this.setData({ _value: newValue })
                this.isDisabled()
            },
        },
        min: {
            type: Number,
            value: null,
            observer(nval, oval): void {
                if (nval !== oval) {
                    this.isDisabled()
                }
            }
        },
        max: {
            type: Number,
            value: null,
            observer(nval, oval): void {
                if (nval !== oval) {
                    this.isDisabled()
                }
            }
        },
        step: {
            type: Number,
            value: 1
        },
        enableInput: { // 使能输入
            type: Boolean,
            value: false
        },
        integer: {
            type: Boolean,  // 键盘是否包含小数点
            value: false
        },
        disabled: { // 禁止整个模块点击
            type: Boolean,
            value: false
        },
        disabledOpacity: { // 模块禁止灰度
            type: Number,
            value: 0.4
        },
        asyncChange: {
            type: Boolean,
            value: false
        },
        decimalLength: { // 小数点长度
            type: Number,
            value: null
        },
        height: {  // 设置模块的height
            type: Number,
            value: null
        },
        activeColor: {
            type: String,
            value: '#FD7622'
        },
        minusActiveColor: {
            type: String,
            value: '#FD7622'
        },
        plusActiveColor: {
            type: String,
            value: '#FD7622'
        },
        disableColor: {
            type: String,
            value: '#333333'
        },
        iconSize: {
            type: Number,
            value: 14
        },
        stepperStyle: {   // 步进器样式
            type: String,
            value: ''
        },
        minusStyle: {  // minus 样式
            type: String,
            value: ''
        },
        inputStyle: {   // 设置输入框的样式
            type: String,
            value: ''
        },
        plusStyle: { // 设置plus样式
            type: String,
            value: ''
        }
    },
    externalClasses: ['ext-class'],
    data: {
        disabledPlus: false,
        disabledMinus: false,
        _value: ''
    },
    methods: {
        isDisabled(type): boolean {
            const { min, max, disabled, _value } = this.data
            const disabledPlus = disabled || (typeof max === 'number' && _value >= max)
            const disabledMinus = disabled || (typeof min === 'number' && _value <= min)
            disabledPlus !== this.data.disabledPlus && this.setData({
                disabledPlus,
            })
            disabledMinus !== this.data.disabledMinus && this.setData({
                disabledMinus,
            })
            if (type === 'plus') {

                return disabledPlus
            }

            return disabledMinus
        },
        add(num1: number, num2: number): number {
            const cardinal = 10 ** 10
            return Math.round((num1 + num2) * cardinal) / cardinal
        },
        onBlur(): void {
            const _value = this.range(this.data._value)
            this.setData({
                _value,
            })
        },
        // limit _value range
        range(_value): number {
            _value = String(_value).replace(/[^0-9.-]/g, '')
            // format range
            _value = _value === '' ? 0 : + _value
            const { min, max } = this.data
            if (typeof min === 'number' && _value < min) {
                _value = min
            }
            if (typeof max === 'number' && _value > max) {
                _value = max
            }
            return _value
        },
        onInput(event): void {
            const { value } = event.detail || {}
            this.setData({
                _value: value,
            })
        },
        onChange(): void {
            const { type } = this
            if (this.isDisabled(type)) {
                return
            }
            const diff = type === 'minus' ? -this.data.step : +this.data.step
            const _value = this.add(+this.data._value, diff)
            this.changeValue(_value)
            this.isDisabled()
        },

        onTap(event): void {
            const { type } = event.currentTarget.dataset
            const { onPlus, onMinus } = this.data
            this.type = type
            this.onChange()
            const returnInfo = this.returnInfo(type)
            if (type === 'plus') {
                if (typeof onPlus === 'function') {
                    onPlus(returnInfo)
                } else {
                    this.triggerEvent('onPlus', returnInfo)
                }
                return
            }

            if (typeof onMinus === 'function') {
                onMinus(returnInfo)
            } else {
                this.triggerEvent('onMinus', returnInfo)
            }
        },

        returnInfo(type): object {
            const { _value, disabled, min, max, step, decimalLength } = this.data
            return {
                value: _value, disabled, min, max, step, decimalLength, type
            }
        },

        changeValue(_value): void {
            this.setData({
                _value: this.data.asyncChange ? this.data._value : _value
            })
        },
    }
})
