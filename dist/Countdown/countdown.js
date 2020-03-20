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
    data: {
        someData: {}
    },
    methods: {}
});
