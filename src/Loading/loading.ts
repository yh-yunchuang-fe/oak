Component({
    externalClasses: ['ext-class', 'loader-class', 'custom-class'],
    options: {
        // @ts-ignore
        styleIsolation: 'isolated'
    },
    properties: {
        isShow: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean],
        },
        type: {
            type: String,
            value: 'default',
        },
        size: {
            type: String,
            value: 'default', // default, small, large
            optionalTypes: [String],
        },
        position: {
            type: String,
            value: 'relative', // fixed, absolute
            optionalTypes: [String],
        },
        color: {
            type: String,
            value: '#FD7622',
            optionalTypes: [String],
        },
        shadow: {
            type: Boolean,
            value: true,
            optionalTypes: [Boolean]
        },
        text: {
            type: String,
            value: ''
        },
        mask: {
            type: Boolean,
            value: false,
        }
    },
})
