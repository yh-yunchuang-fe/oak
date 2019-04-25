"use strict";
exports.__esModule = true;
var basic_1 = require("../mixins/basic");
Component({
    behaviors: [basic_1["default"]],
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        innerText: {
            type: String,
            value: 'default value',
            optionalTypes: [String]
        }
    },
    data: {
        // 这里是一些组件内部数据
        someData: {}
    },
    ready: function () {
    },
    methods: {}
});
