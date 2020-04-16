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
            value: '',
            optionalTypes: [String, Number, Array],
            observer(newKey: KeyType, oldKey: KeyType): void {
                if (this.data.accordion && Array.isArray(newKey)) {
                    return console.error('[Collapse] Type ERROR!! accordion is `true`, activeKey can only be String or Number!')
                }
                this.setData({
                    _activeKey: newKey
                })

                if (newKey !== oldKey && this.isReady) {
                    this.children.length && this.children.map((child: { toggleCollapseItemContent: Function }): void => {
                        child.toggleCollapseItemContent()
                    })
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
    data: {
        _activeKey: ''
    },
    created(): void {
        this.children = []
    },
    ready(): void {
        this.data.border && this.children[this.children.length - 1].setData({
            border: false,
        })

        this.isReady = true
    },
    methods: {
        // 这里是一个自定义方法
        switchCollapseItem(children: { key: KeyType; index: number }): void {
            const { accordion, _activeKey } = this.data
            if (accordion) {
                let activeIndex = this.children.findIndex((child: {
                    data: {
                        key: KeyType;
                    };
                    indexForParent: number;
                }): boolean => {
                    return child.data.key === _activeKey || child.indexForParent === _activeKey
                })
                if (activeIndex !== children.index) {
                    (activeIndex !== -1) && this.children[activeIndex].hideCollapseItemContent()
                    this.children[children.index].showCollapseItemContent()

                    this.setData({
                        _activeKey: children.key || children.index,
                    })
                } else {
                    this.children[activeIndex].hideCollapseItemContent()
                    this.setData({
                        _activeKey: '',
                    })
                }

            } else {
                const activeKeyTemp = Array.isArray(_activeKey) ? _activeKey : (_activeKey !== '' ? [_activeKey] : [])

                if (activeKeyTemp.indexOf(children.key) !== -1) {
                    this.children[children.index].hideCollapseItemContent()
                    activeKeyTemp.splice(activeKeyTemp.indexOf(children.key), 1)
                } else {
                    this.children[children.index].showCollapseItemContent()
                    activeKeyTemp.push(children.key)
                }
                this.setData({
                    _activeKey: activeKeyTemp,
                })
            }
            this.triggerEvent('onChange', { activeKey: this.data._activeKey })
        },
    },
    externalClasses: ['ext-class'],
})
