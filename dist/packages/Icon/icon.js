Component({
    properties: {
        // icon name
        name: {
            type: String,
            value: 'wechat',
            optionalTypes: [String]
        },
        // icon color
        color: {
            type: String,
            value: '',
            optionalTypes: [String]
        },
        // icon size
        size: {
            type: String,
            value: '',
            optionalTypes: [String]
        },
        // icon classPrefix
        classPrefix: {
            type: String,
            value: 'icon',
            optionalTypes: [String]
        },
        rotate: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean]
        }
    },
    externalClasses: ['ext-class'],
    data: {},
    methods: {}
});
