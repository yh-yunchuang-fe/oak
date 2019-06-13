"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basic_1 = __importDefault(require("../mixins/basic"));
var open_type_1 = __importDefault(require("../mixins/open-type"));
Component({
    behaviors: [basic_1.default, open_type_1.default],
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
        someData: {}
    },
    ready: function () {
    },
    methods: {},
    externalClasses: ['hover-class', 'loading-class'],
});
