"use strict";
exports.__esModule = true;
var basic_1 = require("../mixins/basic");
Component({
    behaviors: [basic_1["default"]],
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        title: {
            type: String,
            value: '',
            optionalTypes: [String]
        },
        border: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean]
        }
    },
    externalClasses: ['title-class', 'ext-class']
});
