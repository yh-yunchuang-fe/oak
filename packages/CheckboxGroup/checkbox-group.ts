import BasicBehavior from '../mixins/basic'

Component({
    behaviors: [BasicBehavior],
    relations: {
        '../Checkbox/checkbox': {
            type: 'child'
        }
    },
    properties: {
        value: {
            type: Object,
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
