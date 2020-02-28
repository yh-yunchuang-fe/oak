Component({
    properties: {
        index: {
            type: Number,
            value: 0,
            optionalTypes: [String]
        },
        size: {
            type: String,
            value: 'normal'
        },
        checked: {
            type: Boolean,
            value: false,
            optionalTypes: [String]
        },
        iconPosition: {
            type: String,
            value: 'front', // front: 前置；rear: 后置
        },
        icon: {
            type: String,
            value: ''
        },
        iconSize: {
            type: String,
            value: ''
        },
        iconColor: {
            type: String,
            value: ''
        },
        styles: {
            type: String,
            value: ''
        }
    },
    externalClasses: ['ext-class', 'checked-class'],
    data: {
    }
})
