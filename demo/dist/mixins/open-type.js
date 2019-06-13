"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openType = Behavior({
    properties: {
        openType: String
    },
    methods: {
        bindGetUserInfo: function (event) {
            this.triggerEvent('bindgetuserinfo', event.detail);
        },
        bindContact: function (event) {
            this.triggerEvent('bindcontact', event.detail);
        },
        bindGetPhoneNumber: function (event) {
            this.triggerEvent('bindgetphonenumber', event.detail);
        },
        bindError: function (event) {
            this.triggerEvent('binderror', event.detail);
        },
        bindLaunchApp: function (event) {
            this.triggerEvent('bindlaunchapp', event.detail);
        },
        bindOpenSetting: function (event) {
            this.triggerEvent('bindopensetting', event.detail);
        },
    }
});
exports.default = exports.openType;
