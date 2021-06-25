Component({
    externalClasses: ['ext-class'],
    properties: {
        isShow: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean],
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
        }
    },
})
