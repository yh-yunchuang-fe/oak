import BasicBehavior from '../mixins/basic'
Component({
    behaviors: [BasicBehavior],
    options: {
        multipleSlots: true,
    },
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
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
            value: 'right', // left
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
            linked(target): void {
                this.parent = target
                this.indexForParent = target.children.indexOf(this)
                if (this.data.key === null) {
                    this.setData({
                        key: this.indexForParent
                    })
                    this.toggleCollapseItemContent()
                }
            }
        },
    },
    data: {
        // 这里是一些组件内部数据
        isShowContent: false,
        itemHeight: null,
    },
    ready(): void {
        this.getRect('.J-oak-collapse-item-title')
            .then((titleDom: { height: number }): void => {
                this.titleHeight = titleDom.height
            })
    },
    methods: {
        // 这里是一个自定义方法
        onCollapseItemTap(): void {
            if (this.data.disabled) return

            const { key } = this.data
            const currentKey = key !== null ? key : this.indexForParent

            this.parent.switchCollapseItem({
                index: this.indexForParent,
                key: currentKey,
            })
        },
        async showCollapseItemContent(): Promise<void> {
            const { isShowContent } = this.data
            if (!this.titleHeight) {
                await this.getRect('.J-oak-collapse-item-title')
                    .then((titleDom: { height: number }): void => {
                        this.titleHeight = titleDom.height
                    })
            }

            this.getRect('.J-oak-collapse-item-content')
                .then((contentDom: { height: number }): void => {
                    this.setData({
                        isShowContent: !isShowContent,
                        itemHeight: this.titleHeight + contentDom.height
                    })
                })
        },
        hideCollapseItemContent(): void {
            this.setData({
                isShowContent: false,
                itemHeight: this.titleHeight,
            })
        },
        toggleCollapseItemContent(): void {
            const { _activeKey } = this.parent.data
            const { key } = this.properties
            if (Array.isArray(_activeKey)) {
                _activeKey.indexOf(key) !== -1 ? this.showCollapseItemContent() : this.hideCollapseItemContent()
            } else {
                key === _activeKey ? this.showCollapseItemContent() : this.hideCollapseItemContent()
            }
        }
    },
    externalClasses: ['content-class', 'title-class', 'icon-class'],
})
