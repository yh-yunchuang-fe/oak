import BasicBehavior from 'Mixins/basic'
import openType from 'Mixins/open-type'

Component({
    behaviors: [BasicBehavior, openType],
    properties: {
        size: {
            type: String,
            value: 'default',
            optionalTypes: [String],
        },
        type: {
            type: String,
            value: 'default',
            optionalTypes: [String],
        },
        lang: {
            type: String,
            value: 'en',
            optionalTypes: [String],
        },
        shape: { type: String, value: '' },
        icon: { type: String, value: '' },
        sessionFrom: { type: String, value: '' },
        sendMessageTitle: { type: String, value: '' },
        sendMessagePath: { type: String, value: '' },
        sendMessageImg: { type: String, value: '' },
        showMessageCard: { type: Boolean, value: false, },
        appParameter: { type: String, value: '' },
        plain: { type: Boolean, value: false, },
        loading: { type: Boolean, value: false, },
        loaderColor: { type: String, value: '' },
        loaderSize: { type: String, value: '' },
        disabled: { type: Boolean, value: false, },
    },
    data: {
        // 这里是一些组件内部数据
        someData: {}
    },
    methods: {
    },
    externalClasses: ['button-class', 'hover-class', 'loading-class'],
})
