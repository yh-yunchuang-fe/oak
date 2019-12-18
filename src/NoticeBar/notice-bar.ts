Component({
    properties: {
        prefixCls: {
            type: String,
            value: 'oak-notice-bar',
        },
        icon: {
            type: Object,
            value: {
                name: 'trumpet',
                size: '26rpx',
                color: '#FD7622'
            },
        },
        content: {
            type: Array,
            value: [],
        },
        mode: {
            type: String,
            value: '',
        },
        action: {
            type: Object,
            value: {
                name: 'close-light',
                size: '26rpx',
                color: '#FD7622'
            },
        },
        circular: {
            type: Boolean,
            value: true
        },
        interval: {
            type: Number,
            value: 2000
        },
        duration: {
            type: Number,
            value: 500
        }
    },
    data: {
        visible: true
    },
    methods: {
        onAction(): void {
            if (this.data.mode === 'close') {
                this.setData({ visible: false })
            }
            this.triggerEvent('action-click', this.data.mode)
        },
        noticItemClick(event: event): void {
            const { currentTarget: { dataset: { index } } } = event

            this.triggerEvent('click', this.data.content[index])
        }
    },
    externalClasses: ['basic-class', 'header-class', 'body-class', 'footer-class']
})
