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
            }
        },
    },
    data: {
        // 这里是一些组件内部数据
        isShowContent: false,
        itemHeight: null,
    },
    ready(): void {
        this.indexForParent = this.parent.children.indexOf(this)

        this.getRect('.J-oak-collapse-item-title')
            .then((titleDom: { height: number }): void => {
                this.titleHeight = titleDom.height
                this._initContent()
            })
    },
    methods: {
        // 这里是一个自定义方法
        onCollapseItemTap(): void {
            if (this.data.disabled) return

            const { key } = this.data
            const currentKey = key ? key : this.indexForParent

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
            if (isShowContent) {
                this.setData({
                    isShowContent: !isShowContent,
                    itemHeight: this.titleHeight,
                })
            } else {
                this.getRect('.J-oak-collapse-item-content')
                    .then((contentDom: { height: number }): void => {
                        this.setData({
                            isShowContent: !isShowContent,
                            itemHeight: this.titleHeight + contentDom.height
                        })
                    })
            }
        },
        _initContent(): void {
            const { activeKey } = this.parent.data
            const { key } = this.properties

            if (activeKey instanceof Array) {
                ((key && activeKey.indexOf(key) !== -1) || activeKey.indexOf(this.indexForParent) !== -1) && this.showCollapseItemContent()
            } else if (key === activeKey || this.indexForParent === activeKey) {
                this.showCollapseItemContent()
            }
        }
    },
    externalClasses: ['content-class', 'title-class', 'icon-class'],
})
