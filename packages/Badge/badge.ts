import BasicBehavior from 'Mixins/basic'
Component({
    behaviors: [BasicBehavior],
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        count: {
            type: Number,
            value: 0,
            optionalTypes: [String],
        },
        overflowCount: {
            type: Number,
            value: 99,
            optionalTypes: [String],
        },
        showZero: {
            type: Boolean,
            value: false,
        },
        background: {
            type: String,
            value: ''
        },
        fontColor: {
            type: String,
            value: '',
        },
        borderColor: {
            type: String,
            value: '',
        },
        dot: {
            type: Boolean,
            value: false,
        },
    },
    data: {
        hasSlot: false
    },
    ready(): void {
        this.getRect('.J-oak-badge-slot')
            .then((dom: { height: number }): void => {
                console.log(dom)
                dom.height && this.setData({
                    hasSlot: true,
                })
            })
    },
    methods: {
        // 这里是一个自定义方法
    },
    externalClasses: ['badge-class',],
})
