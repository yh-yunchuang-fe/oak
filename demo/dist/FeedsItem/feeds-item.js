import BasicBehavior from '../mixins/basic';
Component({
    behaviors: [BasicBehavior],
    relations: {
        '../Feeds/feeds': {
            type: 'parent',
        },
    },
    properties: {
        width: {
            type: String,
            value: '50',
            optionalTypes: [String],
        }
    },
});
