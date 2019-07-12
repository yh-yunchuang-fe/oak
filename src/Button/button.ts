import BasicBehavior from 'Mixins/basic';
import openType from 'Mixins/open-type';

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
        shape: String,
        icon: String,
        sessionFrom: String,
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean,
        appParameter: String,
        plain: Boolean,
        loading: Boolean,
        loaderColor: String,
        loaderSize: String,
        disabled: Boolean,
    },
    data: {
        // 这里是一些组件内部数据
        someData: {}
    },
    ready() {
    },
    methods: {
    },
    externalClasses: ['button-class', 'hover-class', 'loading-class'],
})
