"use strict";
Component({
    properties: {
        isShow: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean],
        },
        size: {
            type: String,
            value: 'default',
            optionalTypes: [String],
        },
        position: {
            type: String,
            value: 'relative',
            optionalTypes: [String],
        },
        color: {
            type: String,
            value: '#FD7622',
            optionalTypes: [String],
        },
    },
    data: {},
    methods: {
        test() {
            console.log(this);
        }
    },
});
