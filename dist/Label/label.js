"use strict";
Component({
    properties: {
        index: {
            type: Number,
            value: 0,
            optionalTypes: [String]
        },
        size: {
            type: String,
            value: 'normal'
        },
        checked: {
            type: Boolean,
            value: false,
            optionalTypes: [String]
        },
        iconPrefix: {
            type: String,
            value: 'oak-icon'
        },
        icon: {
            type: String,
            value: ''
        },
        styles: {
            type: String,
            value: ''
        }
    },
    externalClasses: ['ext-class'],
    data: {}
});
