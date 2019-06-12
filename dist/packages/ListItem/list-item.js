"use strict";
exports.__esModule = true;
var basic_1 = require("../mixins/basic");
Component({
    behaviors: [basic_1["default"]],
    options: {
        multipleSlots: true
    },
    properties: {
        title: {
            type: String,
            value: '',
            optionalTypes: [String]
        },
        subTitle: {
            type: String,
            value: '',
            optionalTypes: [String]
        },
        content: {
            type: String,
            value: '',
            optionalTypes: [String]
        },
        border: {
            type: Boolean,
            value: true,
            optionalTypes: [Boolean]
        },
        arrow: {
            type: Boolean,
            value: true,
            optionalTypes: [Boolean, Object],
            observer: function (arrow) {
                if (typeof arrow === 'object') {
                    this.setData({
                        arrowColor: arrow.color || '#999',
                        arrowSize: arrow.size || '28rpx'
                    });
                }
            }
        },
        arrowColor: {
            type: String,
            value: '#999',
            optionalTypes: [String]
        },
        arrowSize: {
            type: String,
            value: '28rpx',
            optionalTypes: [String]
        },
        icon: {
            type: String,
            value: '',
            optionalTypes: [String, Object],
            observer: function (icon) {
                if (typeof icon === 'object') {
                    this.setData({
                        _icon: icon.name,
                        iconColor: icon.color,
                        iconSize: icon.size
                    });
                }
            }
        },
        iconColor: {
            type: String,
            value: '#999',
            optionalTypes: [String]
        },
        iconSize: {
            type: String,
            value: '32rpx',
            optionalTypes: [String]
        },
        image: {
            type: String,
            value: '',
            optionalTypes: [String]
        },
        imgWidth: {
            type: String,
            value: '',
            optionalTypes: [String]
        },
        imgHeight: {
            type: String,
            value: '',
            optionalTypes: [String]
        },
        button: {
            type: String,
            value: '',
            optionalTypes: [String, Object]
        },
        nowrap: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean]
        },
        coustonNowrap: {
            type: Object,
            value: {},
            optionalTypes: [Object]
        }
    },
    externalClasses: ['title-class', 'ext-class', 'subtitle-class', 'cnt-class']
});
