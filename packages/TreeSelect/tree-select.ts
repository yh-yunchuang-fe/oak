import BasicBehavior from '../mixins/basic'
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
            value: 0,
            optionalTypes: [String]
        },
        labelIndex: {
            type: Number,
            value: null,
            optionalTypes: [String]
        },
        activeId: {
            type: null,
            value: '',
        },
        defaultActiveId: {
            type: null,
            value: '',
        },
        max: {
            type: Number,
            optionalTypes: [String],
            value: Infinity,
        },
        icon: {
            type: String,
            value: 'choice-facet',
        },
        iconSize: {
            type: String,
            value: '32rpx'
        },
        iconColor: {
            type: String,
            value: '#fd7622'
        },
    },
    externalClasses: ['label-class', 'label-item-class', 'label-disabled-class', 'label-active-class', 'content-class', 'item-disabled-class', 'item-class', 'item-active-class'],
    data: {
        labelIndex: 0,
    },
    attached(): void {
        this.hasSetLabelIndex = this.data.labelIndex !== null
        this.hasSetActiveId = !!this.data.activeId
    },
    ready(): void {
        this.setData({
            labelIndex: this.data.defaultLabelIndex || 0,
            activeId: this.data.defaultActiveId,
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
            const { index, data } = event.currentTarget.dataset

            if (data.disabled) return

            // 如果外部没有设定 `activeId` 则主动修改，否则等外部处理
            if (!this.hasSetActiveId) {
                this._changeSelectId(data)
            }

            this.triggerEvent('itemtap', { index, data })
        },
        _changeSelectId(item: { id: string | number }): void {
            const { activeId, max } = this.data

            if (Array.isArray(activeId)) {
                const itemIndex = activeId.findIndex((id: string | number): boolean => id === item.id)

                if ((activeId.length >= max) && (itemIndex === -1)) return

                itemIndex === -1 ? activeId.push(item.id) : activeId.splice(itemIndex, 1)

                this.setData({
                    activeId
                })

            } else {
                this.setData({
                    activeId:  activeId === item.id ? null : item.id
                })
            }
        }
    }
})
