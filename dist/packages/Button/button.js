"use strict";
exports.__esModule = true;
var basic_1 = require("../mixins/basic");
var open_type_1 = require("../mixins/open-type");
Component({
    behaviors: [basic_1["default"], open_type_1["default"]],
    properties: {
        size: {
            type: String,
            value: 'default',
            optionalTypes: [String]
        },
        type: {
            type: String,
            value: 'default',
            optionalTypes: [String]
        },
        lang: {
            type: String,
            value: 'en',
            optionalTypes: [String]
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
        disabled: Boolean
    },
    data: {
        // 这里是一些组件内部数据
        someData: {}
    },
    ready: function () {
    },
    methods: {},
    externalClasses: ['hover-class', 'loading-class']
});
