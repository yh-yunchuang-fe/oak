
Component({
    externalClasses: ['custom-class'],
    options: {
        // @ts-ignore
        styleIsolation: 'isolated'
    },
    properties: {
        isShow: {
            type: Boolean,
            value: false
        }
    }
})