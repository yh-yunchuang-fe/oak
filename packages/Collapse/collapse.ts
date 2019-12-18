import BasicBehavior from '../mixins/basic'

type KeyType =
    | string
    | number
    | []

Component({
    behaviors: [BasicBehavior],
    properties: {
        accordion: {
            type: Boolean,
            value: false,
        },
        activeKey: {
            type: null,
            value: null,
            optionalTypes: [String, Number, Array],
            observer(newKey: KeyType): void {
                if (this.data.accordion && newKey instanceof Array) {
                    console.error('[Collapse] Type ERROR!! accordion is `true`, activeKey can only be String or Number!')
                }
            }
        },
        border: {
            type: Boolean,
            value: false,
        }
    },
    relations: {
        '../CollapseItem/collapse-item': {
            type: 'child',
            linked(child): void {
                this.children.push(child)
            },
        },
    },
    created(): void {
        this.children = []
    },
    ready(): void {
        this.data.border && this.children[this.children.length - 1].setData({
            border: false,
        })
    },
    methods: {
        // 这里是一个自定义方法
        switchCollapseItem(chrildren: { key: KeyType; index: number }): void {
            const { accordion, activeKey } = this.data
            if (accordion) {
                let activeIndex = this.children.findIndex((child: {
                    data: {
                        key: KeyType;
                    };
                    indexForParent: number;
                }): boolean => {
                    return child.data.key === activeKey || child.indexForParent === activeKey
                })

                activeIndex !== -1 && this.children[activeIndex].showCollapseItemContent()
                if (activeIndex !== chrildren.index) {
                    this.children[chrildren.index].showCollapseItemContent()

                    this.setData({
                        activeKey: chrildren.key,
                    })
                } else {

                    this.setData({
                        activeKey: '',
                    })
                }

            } else {
                let _activeKey: KeyType[] = activeKey instanceof Array ? activeKey : [activeKey]

                if (_activeKey.indexOf(chrildren.key) !== -1) {
                    _activeKey.splice(_activeKey.indexOf(chrildren.key), 1)
                } else {
                    _activeKey.push(chrildren.key)
                }

                this.setData({
                    activeKey: _activeKey,
                })
                this.children[chrildren.index].showCollapseItemContent()
            }

            this.triggerEvent('onChange', { activeKey: this.data.activeKey })
        },
    },
    externalClasses: ['ext-class'],
})
