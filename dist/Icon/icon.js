"use strict";
Component({
    properties: {
        name: {
            type: String,
            value: 'wechat',
            optionalTypes: [String],
        },
        color: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        size: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        classPrefix: {
            type: String,
            value: 'icon',
            optionalTypes: [String],
        },
        rotate: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean],
        },
    },
    externalClasses: ['ext-class'],
    data: {},
    methods: {}
});
