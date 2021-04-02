"use strict";
Component({
    properties: {
        radiu: {
            type: Number,
            value: 12
        },
        color: {
            type: String,
            value: '#FF3819'
        },
        bgColor: {
            type: String,
            value: '#ff38194d'
        },
        strokeWidth: {
            type: String,
            value: 0
        },
        disabledColor: {
            type: String,
            value: '#aaa'
        },
        disabledBgColor: {
            type: String,
            value: '#ddd'
        },
        disabled: {
            type: Boolean,
            value: false
        },
        rotate: {
            type: Number,
            value: 90
        },
    },
    externalClasses: ['ext-class', 'bg-class', 'color-class', 'disabled-bg-class', 'disabled-color-class'],
    data: {},
    methods: {}
});
