import BasicBehavior from 'Mixins/basic'
import OpenTypeBehavior from 'Mixins/open-type'
import ButtonBehavior from 'Mixins/button-mixin'

Component({
    behaviors: [BasicBehavior, OpenTypeBehavior, ButtonBehavior],
    properties: {
        mask: {
            type: Boolean,
            value: true,
        },
        isShow: {
            type: Boolean,
            value: false,
        },
        itemList: {
            type: Array,
            value: [],
        },
        cancleText: {
            type: String,
            value: '取消',
        },
        zIndex: {
            type: Number,
            value: 9,
        }
    },
    methods: {
        actionSheetItemClick(e: event): void {
            const { index } = e.currentTarget.dataset
            this.triggerEvent('onSelect', { index, item: this.data.itemList[index] })
        },
        actionSheetCancle(): void {
            this.triggerEvent('onClose')
        },
    }
})
