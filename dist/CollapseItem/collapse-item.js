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
            value: 'down',
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
            const { isShowContent } = this.data;
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
