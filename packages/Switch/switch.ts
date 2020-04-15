import BasicBehavior from '../mixins/basic'
Component({
    behaviors: [BasicBehavior],
    properties: {
        checked: {
            type: Boolean,
            value: false,
            optionalTypes: [String],
        },
        checkedText: {
            type: String,
            value: '',
        },
        uncheckedText: {
            type: String,
            value: '',
        },
        size: {
            type: String,
            value: '44rpx',
        },
        loaderSize: {
            type: String,
            value: null,
        },
        loading: {
            type: Boolean,
            value: false,
        },
        disabled: {
            type: Boolean,
            value: false,
        },
        autoChange: {
            type: Boolean,
            value: true,
        },
        checkedColor: {
            type: String,
            value: '#FD7622',
        },
        uncheckedColor: {
            type: String,
            value: '#ccc',
        }
    },
    data: {
    },
    methods: {
        onChange(): void {
            const { loading, disabled, checked, autoChange } = this.data
            if (!loading && !disabled && autoChange) {
                this.setData({
                    checked: !checked,
                })
            }

            (!loading && !disabled) && this.triggerEvent('onChange', {
                checked: this.data.checked,
            })

        }
    }
})
