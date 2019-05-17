Component({
    properties: {
        // show or hide
        isShow: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean],
        },
         // loading size
         size: {
            type: String,
            value: 'default', // default, small, large
            optionalTypes: [String],
        },
        // position
        position: {
            type: String,
            value: 'relative', // fixed, absolute
            optionalTypes: [String],
        },
        // loading color
        color: {
            type: String,
            value: '#FD7622',
            optionalTypes: [String],
        },
    },
    data: {
    },
    methods: {
        test() {
            console.log(this)
        }
    },
})
