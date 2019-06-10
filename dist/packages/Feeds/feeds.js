"use strict";
exports.__esModule = true;
var basic_1 = require("../mixins/basic");
Component({
    properties: {
        radius: {
            type: String,
            value: '0',
            optionalTypes: [String]
        },
        margin: {
            type: String,
            value: '0rpx',
            optionalTypes: [String]
        },
        border: {
            type: Boolean,
            value: true,
            optionalTypes: [Boolean]
        },
        borderColor: {
            type: String,
            value: 'transparent',
            optionalTypes: [String]
        }
    },
    behaviors: [basic_1["default"]],
    relations: {
        '../FeedsItem/feeds-item': {
            type: 'child',
            linked: function (target) {
                // console.log('Feeds', target, target.data);
            },
            linkChanged: function (target) {
            },
            unlinked: function (target) {
            }
        }
    },
    data: {
        childNum: 0
    },
    externalClasses: ['ext-class'],
    methods: {
        _getChildLength: function () {
            var nodes = this.getRelationNodes('../FeedsItem/feeds-item');
            this.setData({
                childNum: nodes.length
            });
        }
    },
    ready: function () {
        this._getChildLength();
    }
});
