"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basic_1 = __importDefault(require("../mixins/basic"));
Component({
    properties: {
        radius: {
            type: String,
            value: '0',
            optionalTypes: [String],
        },
        margin: {
            type: String,
            value: '0rpx',
            optionalTypes: [String],
        },
        border: {
            type: Boolean,
            value: true,
            optionalTypes: [Boolean],
        },
        borderColor: {
            type: String,
            value: 'transparent',
            optionalTypes: [String],
        },
    },
    behaviors: [basic_1.default],
    relations: {
        '../FeedsItem/feeds-item': {
            type: 'child',
        },
    },
    data: {
        childNum: 0,
    },
    externalClasses: ['ext-class'],
    methods: {
        _getChildLength: function () {
            var nodes = this.getRelationNodes('../FeedsItem/feeds-item');
            this.setData({
                childNum: nodes.length,
            });
        }
    },
    lifetimes: {
        ready: function () {
            this._getChildLength();
        },
    },
});
