import BasicBehavior from 'Mixins/basic'

const iconMap: any = {
    default: ['checkbox', 'choice-facet', 'un-choose'],
    point: ['checkbox', 'choice_fill', 'un-choose']
}

Component({
    behaviors: [BasicBehavior],
    relations: {
        '../CheckboxGroup/checkbox-group': {
            type: 'parent'
        }
    },
    properties: {
        icon: {
            type: Object,
            value: {},
        },
        color: {
            type: String,
            value: ''
        },
        // 样式：default 打勾 ｜ point 点 ｜ button 按钮
        type: {
            type: String,
            value: 'default'
        },
        // 是否块级 即占一整行
        block: {
            type: Boolean,
            value: false
        },

        value: {
            type: Object,
            value: null
        },
        name: {
            type: Object,
            value: null
        },
        checked: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        disabledColor: {
            type: String,
            value: ''
        }
    },
    data: {
        _icon: {
            normal: 'checkbox',
            active: 'choice-facet',
            disabled: 'un-choose',
        }
    },
    attached(): void {
        this.setIcon()
    },
    ready(): void {
        this.init()
    },
    methods: {
        init(): void {
            const parent = this.getRelationNodes('../CheckboxGroup/checkbox-group')
            const { name, value } = this.data

            const realValue = value || name
            this.hasParent = parent && parent.length > 0

            if (!this.hasParent || !realValue) return

            const { value: parentValue } = parent[0].data
            const checked = parentValue.some(
                (item: string): boolean => JSON.stringify(item) === JSON.stringify(realValue)
            )

            this.setData({ checked })
        },
        setIcon(): void {
            const type = this.data.type || 'default'
            if (['default', 'point'].indexOf(type) === -1) return
            const icon = this.data.icon || {}
            const [normal, active, disabled] = iconMap[type]
            this.setData({ _icon: { normal, active, disabled, ...icon } })
        },
        change(): void {
            const { disabled } = this.data
            if (disabled) return

            this.setValue()
        },
        setValue(): void {
            const { checked, name, value } = this.data
            if (!this.hasParent) {
                this.setData({
                    checked: !checked
                })
                return
            }

            const realValue = value || name
            const parent = this.getRelationNodes('../CheckboxGroup/checkbox-group')
            let { value: parentValue, max } = parent[0].data
            const hasValue = parentValue.some((item: string): boolean => JSON.stringify(item) === JSON.stringify(realValue))

            if (!checked) {
                // 将要变为选中
                const canCheck = !hasValue && (max === null || max > parentValue.length)
                if (canCheck) {
                    parentValue.push(realValue)
                    this.setData({ checked: true })
                }
            } else {
                // 将要取消选中
                if (hasValue) {
                    parentValue = parentValue.filter((item: string): boolean => JSON.stringify(item) !== JSON.stringify(realValue))
                    this.setData({ checked: false })
                }
            }
            parent[0].triggerEvent('change', parentValue)
        }
    },
    externalClasses: ['ext-class']
})
