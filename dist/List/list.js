import BasicBehavior from '../mixins/basic';
Component({
    behaviors: [BasicBehavior],
    properties: {
        title: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        border: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean],
        }
    },
    externalClasses: ['title-class', 'ext-class'],
});
