
Component({
    externalClasses: ['custom-class'],
    options: {
        styleIsolation: 'isolated'
    },
    properties: {
        position: {
            type: String,
            value: 'fixed'
        },
        text: {
            type: String,
            value: ''
        },
        isShow: {
            type: Boolean,
            value: false
        },
        mask: {
            type: Boolean,
            value: false,
        }
    }
})