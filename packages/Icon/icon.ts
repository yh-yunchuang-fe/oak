
Component({
    properties: {
        // icon name
        name: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        // icon color
        color: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        // icon size
        size: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        // icon classPrefix
        classPrefix: {
            type: String,
            value: 'oak-icon',
            optionalTypes: [String],
        },
        rotate: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean],
        },
        uuid: {
            type: String,
            value: ''
        }
    },
    externalClasses: ['ext-class'],
    data: {
    },
    methods: {
    }
})
