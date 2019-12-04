Component({
    properties: {
        value: {   // stepper 步进器 value
            type: Number,
            value: 5
        },
        disabled: { // 禁止整个模块点击
            type: Boolean,
            value: false
        },
        focus: {
            type: Boolean,  // 是否自动获取焦点
            value: false
        },
        integer: {
            type: Boolean,  // 输入框是否包含小数点
            value: false
        },
        disableInput: { // 是否禁止输入
            type: Boolean,
            value: true
        },
        disabledOpacity: { // 模块禁止灰度
            type: Number,
            value: 0.4
        },
        height: {  // 设置模块的height
            type: Number,
            value: 0
        },
        activeColor: {
            type: String,
            value: '#FD7622'
        },
        disableColor: {
            type: String,
            value: '#333'
        },
        iconSize: {
            type: Number,
            value: 14
        },
        inputWidth: {   // 设置输入框的宽
            type: Number,
            value: 40
        },
        asyncChange: {
            type: Boolean,
            value: false
        },
        decimalLength: { // 小数点长度
            type: Number,
            value: null
        },
        styles: {   // 步进器样式
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
        },
        min: {
            type: Number,
            value: null
        },
        max: {
            type: Number,
            value: null
        },
        step: {
            type: Number,
            value: 1
        },
        showPlus: {
            type: Boolean,
            value: true
        },
        showMinus: {
            type: Boolean,
            value: true
        }
    },
    externalClasses: ['ext-class'],
    data: {
        disabledPlus: false,
        disabledMinus: false
    },
    methods: {
        isDisabled(type): boolean {
            const {min, max, disabled, value} = this.data
            const disabledPlus = disabled || (typeof max === 'number' && value >= max)
            const disabledMinus = disabled || (typeof min === 'number' && value <= min)
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
        onBlur(): any {
            const value = this.range(this.data.value)
            this.setData({
                value,
            })
        },
        // limit value range
        range(value): number {
            value = String(value).replace(/[^0-9.-]/g, '')
            // format range
            value = value === '' ? 0 : +value
            const {min, max} = this.data
            // value = Math.max(Math.min(this.data.max, value), this.data.min)
            if(typeof min === 'number' && value < min) {
                value = min
            }
            if(typeof max === 'number' && value > max) {
                value = max
            }
            // format decimal
            if (this.data.decimalLength) {
                value = value.toFixed(this.data.decimalLength)
            }
            return value
        },
        onInput(event): any {
            const { value } = event.detail || {}
            this.setData({
                value,
            })
        },
        onChange(): any {
            const { type } = this
            if (this.isDisabled(type)) {
                return
            }
            const diff = type === 'minus' ? -this.data.step : +this.data.step
            const value = this.add(+this.data.value, diff)
            this.setData({
                value: this.range(value)
            })
        },
        
        onTap(event) {
            const { type } = event.currentTarget.dataset
            const {onPlus, onMinus} = this.data
            this.type = type
            this.onChange()
            const returnInfo = this.returnInfo()
            if(type === 'plus') {
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

        returnInfo() {
            const {value, disabled, focus, min, max, step, integer, decimalLength, showMinus, showPlus } = this.data
            return {
                value, disabled, focus, min, max, step, integer, decimalLength, showMinus, showPlus
            }
        },
       
        triggerInput(value) {
            this.setData({
                value: this.data.asyncChange ? this.data.value : value
            })
        },
    }
})
