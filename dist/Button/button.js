import BasicBehavior from '../mixins/basic';
import OpenTypeBehavior from '../mixins/open-type';
import ButtonBehavior from '../mixins/open-type';
Component({
    behaviors: [BasicBehavior, OpenTypeBehavior, ButtonBehavior],
    properties: {
        size: {
            type: String,
            value: 'default',
            optionalTypes: [String],
        },
        type: {
            type: String,
            value: 'default',
            optionalTypes: [String],
        },
        shape: {
            type: String,
            value: ''
        },
        icon: {
            type: String,
            value: ''
        },
        plain: {
            type: Boolean,
            value: false,
        },
        loading: {
            type: Boolean,
            value: false,
        },
        loaderColor: {
            type: String,
            value: ''
        },
        loaderSize: {
            type: String,
            value: ''
        },
        disabled: {
            type: Boolean,
            value: false,
        },
    },
    externalClasses: ['button-class', 'hover-class', 'loading-class'],
});
