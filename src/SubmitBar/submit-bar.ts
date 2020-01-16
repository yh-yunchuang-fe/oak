import BasicBehavior from 'Mixins/basic'
Component({
    behaviors: [BasicBehavior],
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        price: {
            type: Number,
            value: 0,
            optionalTypes: [String],
        },
        label: {
            type: String,
            value: '合计: '
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
            value: 'linear-gradient(to right, #FFA133, #F76B1C);'
        }
    },
    data: {
        // 这里是一些组件内部数据
        someData: {}
    },
    methods: {

    },
    externalClasses: ['ext-class', 'body-class', 'button-class'],
})
