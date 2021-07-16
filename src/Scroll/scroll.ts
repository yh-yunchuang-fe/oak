/* eslint-disable */
//@ts-nocheck
Component({
    externalClasses: ['ext-class'],
    options: {
        pureDataPattern: /^_/,
        virtualHost: true,
        multipleSlots: true
    },
    relations: {
        './scroll-item': {
            type: 'child', // 关联的目标节点应为子节点
            linked(target) {}
        }
    },
    observers: {
        '_list, _pageSize': function(_list, _pageSize) {
            if (_list?.length > 0) {
                this.init(_list, _pageSize)
            }
        }
    },
    properties: {
        _list: {
            type: Array,
            value: []
        },
        _pageSize: {
            type: Number,
            value: 5
        },
        scrollX: {
            type: Boolean,
            value: false
        },
        scrollY: {
            type: Boolean,
            value: false
        },
        upperThreshold: {
            type: Number,
            value: 50
        },
        lowerThreshold: {
            type: Number,
            value: 50
        }
    },
    data: {
        _currentIndex: 0
    },
    methods: {
        init(_list: any[], _pageSize: Number) {
            console.log(_list)
        }
    }
})
