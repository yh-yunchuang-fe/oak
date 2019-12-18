import BasicBehavior from '../mixins/basic'
Component({
    behaviors: [BasicBehavior],
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        icon: {
            type: String,
            value: '',
        },
        shape: {
            type: String,
            value: 'circle',
        },
        size: {
            type: String,
            value: 'default',
        },
        src: {
            type: String,
            value: '',
        },
        alt: {
            type: String,
            value: '',
        },
        color: {
            type: String,
            value: '',
        },
        background: {
            type: String,
            value: '',
        }
    },
    methods: {
        onError(): void {
            this.triggerEvent('onError')
            this.setData({
                _alt: this.data.alt,
            })
        }
    },
    externalClasses: ['ext-class', 'img-class'],
})
