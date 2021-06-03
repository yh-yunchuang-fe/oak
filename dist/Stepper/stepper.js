"use strict";
Component({
    properties: {
        value: {
            type: Number || String,
            value: null,
            observer(newValue) {
                this.setData({ _value: newValue });
                this.isDisabled();
            },
        },
        min: {
            type: Number,
            value: null,
            observer(nval, oval) {
                if (nval !== oval) {
                    this.isDisabled();
                }
            }
        },
        max: {
            type: Number,
            value: null,
            observer(nval, oval) {
                if (nval !== oval) {
                    this.isDisabled();
                }
            }
        },
        step: {
            type: Number,
            value: 1
        },
        enableInput: {
            type: Boolean,
            value: false
        },
        integer: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        disabledOpacity: {
            type: Number,
            value: 0.4
        },
        asyncChange: {
            type: Boolean,
            value: false
        },
        decimalLength: {
            type: Number,
            value: null
        },
        height: {
            type: Number,
            value: null
        },
        activeColor: {
            type: String,
            value: '#FD7622'
        },
        minusActiveColor: {
            type: String,
            value: ''
        },
        plusActiveColor: {
            type: String,
            value: ''
        },
        disableColor: {
            type: String,
            value: '#333333'
        },
        iconSize: {
            type: Number,
            value: 14
        },
        stepperStyle: {
            type: String,
            value: ''
        },
        minusStyle: {
            type: String,
            value: ''
        },
        inputStyle: {
            type: String,
            value: ''
        },
        plusStyle: {
            type: String,
            value: ''
        }
    },
    externalClasses: ['ext-class', 'minus-class', 'plus-class', 'input-class'],
    data: {
        disabledPlus: false,
        disabledMinus: false,
        _value: ''
    },
    methods: {
        isDisabled(type) {
            const { min, max, disabled, _value } = this.data;
            const disabledPlus = disabled || (typeof max === 'number' && _value >= max);
            const disabledMinus = disabled || (typeof min === 'number' && _value <= min);
            disabledPlus !== this.data.disabledPlus && this.setData({
                disabledPlus,
            });
            disabledMinus !== this.data.disabledMinus && this.setData({
                disabledMinus,
            });
            if (type === 'plus') {
                return disabledPlus;
            }
            return disabledMinus;
        },
        add(num1, num2) {
            const cardinal = Math.pow(10, 10);
            return Math.round((num1 + num2) * cardinal) / cardinal;
        },
        onBlur() {
            const _value = this.range(this.data._value);
            this.setData({
                _value,
            });
        },
        range(_value) {
            _value = String(_value).replace(/[^0-9.-]/g, '');
            _value = _value === '' ? 0 : +_value;
            const { min, max } = this.data;
            if (typeof min === 'number' && _value < min) {
                _value = min;
            }
            if (typeof max === 'number' && _value > max) {
                _value = max;
            }
            return _value;
        },
        onInput(event) {
            const { value } = event.detail || {};
            this.setData({
                _value: value,
            });
        },
        onFocus(event) {
            this.triggerEvent('onFocus', event);
        },
        onInputClick(event) {
            this.triggerEvent('onInputClick', event);
        },
        onChange() {
            const { type } = this;
            if (this.isDisabled(type)) {
                return;
            }
            const diff = type === 'minus' ? -this.data.step : +this.data.step;
            const _value = this.add(+this.data._value, diff);
            this.changeValue(_value);
            this.isDisabled();
        },
        onTap(event) {
            const { type } = event.currentTarget.dataset;
            const { onPlus, onMinus } = this.data;
            this.type = type;
            this.onChange();
            const returnInfo = this.returnInfo(type, event.touches);
            if (type === 'plus') {
                if (typeof onPlus === 'function') {
                    onPlus(returnInfo);
                }
                else {
                    this.triggerEvent('onPlus', returnInfo);
                }
                return;
            }
            if (typeof onMinus === 'function') {
                onMinus(returnInfo);
            }
            else {
                this.triggerEvent('onMinus', returnInfo);
            }
        },
        returnInfo(type, touches) {
            const { _value, disabled, min, max, step, decimalLength } = this.data;
            return {
                value: _value, disabled, min, max, step, decimalLength, type, touches
            };
        },
        changeValue(_value) {
            this.setData({
                _value: this.data.asyncChange ? this.data._value : _value
            });
        },
    }
});
