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
            type: Number,
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
        width: {
            type: String,
            value: '200rpx'
        },
        height: {
            type: String,
            value: '24rpx'
        }
    },
    externalClasses: ['ext-class', 'bg-class', 'color-class'],
    data: {},
    methods: {}
});