import BasicBehavior from '../mixins/basic';
import OpenTypeBehavior from '../mixins/open-type';
import ButtonBehavior from '../mixins/open-type';
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
        actionSheetItemClick(e) {
            const { index } = e.currentTarget.dataset;
            this.triggerEvent('onSelect', { index, item: this.data.itemList[index] });
        },
        actionSheetCancle() {
            this.triggerEvent('onClose');
        },
    }
});
