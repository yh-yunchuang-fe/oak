Component({
    properties: {
        // show or hide
        isShow: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean]
        },
        // loading size
        size: {
            type: String,
            value: 'normal',
            optionalTypes: [String]
        },
        // position
        position: {
            type: String,
            value: 'relative',
            optionalTypes: [String]
        },
        // loading color
        color: {
            type: String,
            value: '#FD7622',
            optionalTypes: [String]
        }
    },
    data: {},
    methods: {
        test: function () {
            console.log(this);
        }
    }
});
