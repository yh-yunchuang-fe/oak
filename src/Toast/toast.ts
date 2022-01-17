Component({
    properties: {
        isShow: {
            type: Boolean,
            value: false,
            observer(newVal:any) {
                 newVal && this._showToast(newVal)
            },
        },
        icon: {
            type: String,
            value: ''
        },
        success: {
            type: Boolean,
            value: false,
            optionalTypes: [String]
        },
        warn: {
            type: Boolean,
            value: false,
            optionalTypes: [String]
        },
        iconSize: {
            type: String,
            value: ''
        },
        iconColor: {
            type: String,
            value: ''
        },
        duration: {
            type: Number,
            value: 2000,
        },
    },
    methods: {
        _showToast() {
            this.setData({
                isShow: true,
            })
            setTimeout(() => {
                this.setData({
                    isShow: false,
                })
            }, this.data.duration)
        },
    },
})
