import BasicBehavior from 'Mixins/basic';
Component({
    properties: {
        radius: {
            type: String,
            value: '0',
            optionalTypes: [String],
        },
        margin: {
            type: String,
            value: '0rpx',
            optionalTypes: [String],
        },
        border: {
            type: Boolean,
            value: true,
            optionalTypes: [Boolean],
        },
        borderColor: {
            type: String,
            value: 'transparent',
            optionalTypes: [String],
        },
    },
    behaviors: [BasicBehavior],
    relations: {
        '../FeedsItem/feeds-item': {
            type: 'child',
            linked(target) {
                // console.log('Feeds', target, target.data);
            },
            linkChanged(target) {
            },
            unlinked(target) {
            },
        },
    },
    data: {
        childNum: 0,
    },
    externalClasses: ['ext-class'],
    methods: {
        _getChildLength() {
            const nodes = this.getRelationNodes('../FeedsItem/feeds-item');
            this.setData({
                childNum: nodes.length,
            });
        }
    },
    ready() {
        this._getChildLength();
    },
})
