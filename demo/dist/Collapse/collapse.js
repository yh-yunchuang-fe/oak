import BasicBehavior from '../mixins/basic';
Component({
    behaviors: [BasicBehavior],
    properties: {
        innerText: {
            type: String,
            value: 'default value',
            optionalTypes: [String],
        }
    },
    relations: {
        '../CollapseItem/collapse-item': {
            type: 'child',
        },
    },
    data: {
        someData: {}
    },
    methods: {
        customMethod() { }
    }
});
