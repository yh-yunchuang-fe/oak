"use strict";
Component({
    properties: {
        name: {
            type: String,
            value: '',
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
            value: 'oak-icon',
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
