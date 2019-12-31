import BasicBehavior from 'Mixins/basic'
Component({
    behaviors: [BasicBehavior],
    properties: {
        treeData: {
            type: Array,
            value: [],
        },
        labelWidth: {
            type: String,
            value: ''
        },
        defaultLabelIndex: {
            type: Number,
            value: null,
            optionalTypes: [String]
        },
        labelIndex: {
            type: Number,
            value: null,
            optionalTypes: [String]
        },
    },
    externalClasses: ['label-class', 'label-item-class', 'label-active-class', 'content-class', 'item-disabled-class', 'item-class'],
    attached(): void {
        this.hasSetLabelIndex = this.data.labelIndex !== null
    },
    ready(): void {
        this.setData({
            labelIndex: this.data.defaultLabelActive || 0,
        })
    },
    methods: {
        onLabelTap(event: event): void {
            const { index } = event.currentTarget.dataset
            const { treeData } = this.data

            if (treeData[index].disabled) return

            // 如果外部没有设定 `labelIndex` 则主动修改，否则等外部处理
            if (!this.hasSetLabelIndex) {
                this.setData({
                    labelIndex: index,
                })
            }
            this.triggerEvent('labeltap', { index })
        },
        onContentItemTap(event: event): void {
            console.log(event)
        }
    }
})
