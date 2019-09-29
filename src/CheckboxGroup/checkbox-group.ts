import BasicBehavior from 'Mixins/basic'

Component({
    behaviors: [BasicBehavior],
    relations: {
        '../Checkbox/checkbox': {
            type: 'child',
        },
    },
    properties: {
        value: {
            type: Array,
            value: []
        },
        disabled: {
            type: Boolean,
            value: false
        },
        max: {
            type: Number,
            value: null
        }
    },
    methods: {},
    externalClasses: ['ext-class']
})
