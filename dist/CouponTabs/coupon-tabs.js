"use strict";
Component({
    properties: {
        tabs: {
            type: Array,
            value: []
        },
        selectIndex: {
            type: Number,
            value: 0,
        }
    },
    methods: {
        onTabClick(event) {
            const { dataset, } = event.currentTarget || {};
            this.setData({
                selectIndex: dataset.index,
            });
            this.triggerEvent('onTabClick', {
                dataset,
            });
        }
    },
    externalClasses: ['ext-class', 'tab-class', 'tab-title'],
});
