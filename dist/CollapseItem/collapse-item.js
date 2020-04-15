var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import BasicBehavior from '../mixins/basic';
Component({
    behaviors: [BasicBehavior],
    options: {
        multipleSlots: true,
    },
    properties: {
        title: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        key: {
            type: String,
            value: null,
            optionalTypes: [String],
        },
        icon: {
            type: String,
            value: 'down-light',
            optionalTypes: [String],
        },
        iconPosition: {
            type: String,
            value: 'right',
            optionalTypes: [String],
        },
        disabled: {
            type: Boolean,
            value: false,
        },
        border: {
            type: Boolean,
            value: true,
        },
        iconRotate: {
            type: Boolean,
            value: true,
        }
    },
    relations: {
        '../Collapse/collapse': {
            type: 'parent',
            linked(target) {
                this.parent = target;
                this.indexForParent = target.children.indexOf(this);
                this.toggleCollapseItemContent();
                if (this.data.key === null) {
                    this.setData({
                        key: this.indexForParent
                    });
                }
            }
        },
    },
    data: {
        isShowContent: false,
        itemHeight: null,
    },
    ready() {
        this.getRect('.J-oak-collapse-item-title')
            .then((titleDom) => {
            this.titleHeight = titleDom.height;
        });
    },
    methods: {
        onCollapseItemTap() {
            if (this.data.disabled)
                return;
            const { key } = this.data;
            const currentKey = key !== null ? key : this.indexForParent;
            this.parent.switchCollapseItem({
                index: this.indexForParent,
                key: currentKey,
            });
        },
        showCollapseItemContent() {
            return __awaiter(this, void 0, void 0, function* () {
                const { isShowContent } = this.data;
                if (!this.titleHeight) {
                    yield this.getRect('.J-oak-collapse-item-title')
                        .then((titleDom) => {
                        this.titleHeight = titleDom.height;
                    });
                }
                this.getRect('.J-oak-collapse-item-content')
                    .then((contentDom) => {
                    this.setData({
                        isShowContent: !isShowContent,
                        itemHeight: this.titleHeight + contentDom.height
                    });
                });
            });
        },
        hideCollapseItemContent() {
            this.setData({
                isShowContent: false,
                itemHeight: this.titleHeight,
            });
        },
        toggleCollapseItemContent() {
            const { activeKey } = this.parent.data;
            const { key } = this.properties;
            if (Array.isArray(activeKey)) {
                activeKey.indexOf(key) !== -1 ? this.showCollapseItemContent() : this.hideCollapseItemContent();
            }
            else {
                key === activeKey ? this.showCollapseItemContent() : this.hideCollapseItemContent();
            }
        }
    },
    externalClasses: ['content-class', 'title-class', 'icon-class'],
});
