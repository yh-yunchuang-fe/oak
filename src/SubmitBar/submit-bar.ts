import BasicBehavior from 'Mixins/basic'
Component({
    behaviors: [BasicBehavior],
    options: {
        multipleSlots: true,
    },
    properties: {
        price: {
            type: Number,
            value: 0,
            optionalTypes: [String],
        },
        label: {
            type: String,
            value: '合计: '
        },
        suffixLabel: {
            type: String,
            value: ''
        },
        buttonText: {
            type: String,
            value: '提交订单'
        },
        buttonType: {
            type: String,
            value: 'primary'
        },
        buttonShape: {
            type: String,
            value: 'round'
        },
        buttonColor: {
            type: String,
            value: '' // linear-gradient(to right, #FFA133, #F76B1C);
        },
        currency: {
            type: String,
            value: '¥'
        },
        subTitle: {
            type: String,
            value: ''
        },
        loading: {
            type: Boolean,
            value: false,
        },
        disabled: {
            type: Boolean,
            value: false,
        },
        loaderColor: {
            type: String,
            value: '#fff',
        },
        tip: {
            type: String,
            value: ''
        },
        tipBg: {
            type: String,
            value: '#fff7cc',
        },
        tipIcon: {
            type: String,
            value: '',
        },
        tipIconColor: {
            type: String,
            value: '',
        },
        tipArrow: {
            type: Boolean,
            value: false
        },
        tipColor: {
            type: String,
            value: ''
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: false
        }
        // decimalLength: {}
    },
    methods: {
        onSubmitTap(e): void {
            if (this.data.loading || this.data.disabled) return
            this.triggerEvent('submit', e)
        },
        onContentClick(): void {
            this.triggerEvent('onContentClick')
        }

    },
    externalClasses: ['bar-class', 'body-class', 'button-class', 'label-class', 'currency-class', 'price-class', 'sub-class', 'suffix-class'],
})
