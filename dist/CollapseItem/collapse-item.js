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
            value: '',
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
            }
        },
    },
    data: {
        isShowContent: false,
        itemHeight: null,
    },
    ready() {
        this.indexForParent = this.parent.children.indexOf(this);
        this.getRect('.J-oak-collapse-item-title')
            .then((titleDom) => {
            this.titleHeight = titleDom.height;
            this._initContent();
        });
    },
    methods: {
        onCollapseItemTap() {
            if (this.data.disabled)
                return;
            const { key } = this.data;
            const currentKey = key ? key : this.indexForParent;
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
                if (isShowContent) {
                    this.setData({
                        isShowContent: !isShowContent,
                        itemHeight: this.titleHeight,
                    });
                }
                else {
                    this.getRect('.J-oak-collapse-item-content')
                        .then((contentDom) => {
                        this.setData({
                            isShowContent: !isShowContent,
                            itemHeight: this.titleHeight + contentDom.height
                        });
                    });
                }
            });
        },
        _initContent() {
            const { activeKey } = this.parent.data;
            const { key } = this.properties;
            if (activeKey instanceof Array) {
                ((key && activeKey.indexOf(key) !== -1) || activeKey.indexOf(this.indexForParent) !== -1) && this.showCollapseItemContent();
            }
            else if (key === activeKey || this.indexForParent === activeKey) {
                this.showCollapseItemContent();
            }
        }
    },
    externalClasses: ['content-class', 'title-class', 'icon-class'],
});
