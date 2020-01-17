import BasicBehavior from '../mixins/basic'
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
        labelSuffix: {
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
            type: Boolean,
            value: false
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: false
        }
        // decimalLength: {}
    },
    data: {
        // 这里是一些组件内部数据
        someData: {}
    },
    methods: {

    },
    externalClasses: ['bar-class', 'body-class', 'button-class', 'label-class', 'currency-class', 'price-class', 'sub-class'],
})
