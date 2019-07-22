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
        '../Collapse/collapse': {
            type: 'parent',
        },
    },
    data: {
        someData: {}
    },
    methods: {
        customMethod() { }
    }
});
