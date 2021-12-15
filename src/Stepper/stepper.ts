
const add = (num1: number, num2: number): number => {
    const cardinal = 10 ** 10
    return Math.round((num1 + num2) * cardinal) / cardinal
}

Component({
    properties: {
        // value
        value: {
            type: Number || String,
            value: 0,
            observer(newValue): void {
                this.setData({ _value: newValue })
            },
        },
        // 类型: 'default' | 'primary'
        type: {
            type: String,
            value: 'primary',
        },
        // 尺寸: small ｜ large
        size: {
            type: String,
            value: 'small'
        },
        min: {
            type: Number,
            value: 0,
        },
        max: {
            type: Number,
            value: 999,
        },
        step: {
            type: Number,
            value: 1
        },
        // 是否允许键盘输入
        enableInput: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        asyncChange: {
            type: Boolean,
            value: false
        },
        // 小数点长度
        decimalLength: { 
            type: Number,
            value: null
        },
    },
    externalClasses: ['ext-class', 'minus-class', 'plus-class', 'input-class'],
    data: {
        _value: ''
    },
    methods: {
        changeValue(value): void {
            const _value = this.range(value)
            // 异步改变 需在组件外面修改value值
            this.triggerEvent('onChange', _value)
            if (this.data.asyncChange) return

            this.setData({
                _value
            })
        },
        onChange(type: string): void {
            const diff = type === 'minus' ? -this.data.step : +this.data.step
            const _value = add(+this.data._value, diff)
            this.changeValue(_value)
        },
        onMinus(e: event): void {
            this.triggerEvent('onMinus', this.returnInfo('minus', e))
            this.onChange('minus')
        },
        onPlus(e: event): void {
            this.triggerEvent('onPlus', this.returnInfo('plus', e))
            this.onChange('plus')
        },

        // limit _value range
        range(_value): number {
            _value = String(_value).replace(/[^0-9.-]/g, '')
            // format range
            _value = _value === '' ? 0 : + _value
            const { min, max, decimalLength } = this.data
            if (typeof min === 'number' && _value < min) {
                _value = min
            }
            if (typeof max === 'number' && _value > max) {
                _value = max
            }
            _value =  decimalLength ? (_value).toFixed(decimalLength) : _value
            return _value
        },
        onInput(event): void {
            this.triggerEvent('onInput', this.returnInfo('input', event))
            const { value } = event.detail || {}
            const _value = this.range(value)
            this.setData({
                _value,
            })
        },

        onFocus(event): void {
            this.triggerEvent('onFocus', this.returnInfo('focus', event))
        },

        onBlur(event): void {
            this.triggerEvent('onBlur', this.returnInfo('blur', event))
        },

        onConfirm(event): void {
            this.triggerEvent('onConfirm', this.returnInfo('confirm', event))
        },

        returnInfo(type, event): object {
            const { _value, disabled, min, max, step, decimalLength } = this.data
            return {
                value: _value, disabled, min, max, step, decimalLength, type, event
            }
        },

    }
})
