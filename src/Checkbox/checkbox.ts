import BasicBehavior from 'Mixins/basic'

Component({
    behaviors: [BasicBehavior],
    relations: {
        '../CheckboxGroup/checkbox-group': {
            type: 'parent',
            linked(target) {
                let { name } = this.data

                if (!target || !name) return

                let { value } = target.data
                let selected = value.filter(
                    (item: any) => JSON.stringify(item) === JSON.stringify(name)
                )

                this.setData({ value: selected.length > 0 })
            }
        }
    },
    properties: {
        icon: {
            type: Object,
            value: {
                normal: 'unselect',
                active: 'selected',
                disabled: 'select-disable'
            },
        },
        color: {
            type: String,
            value: '#FD7622'
        },
        size: {
            type: String,
            value: '',
            optionalTypes: [String]
        },
        value: {
            type: Boolean,
            value: false
        },
        name: {
            type: Object,
            value: null
        },
        disabled: {
            type: Boolean,
            value: false
        },
        disabledColor: {
            type: String,
            value: '#d2d2d2'
        }
    },
    methods: {
        change() {
            let { disabled, value, name } = this.data

            if (disabled) return

            this.setParentValue(name)
            this.triggerEvent('change', value)
        },
        setParentValue(name) {
            let parent = this.getRelationNodes(
                '../CheckboxGroup/checkbox-group'
            )

            if (!parent || !parent[0]) return

            let { value, max } = parent[0].data
            let arr = value.filter(
                (item: any) => JSON.stringify(item) !== JSON.stringify(name)
            )

            if (arr.length !== value.length) {
                this.setData({ value: false })
            } 
            else if (max === null || max > arr.length) {
                arr.push(name)
                this.setData({ value: true })
            }

            parent[0].triggerEvent('change', arr)
        }
    },
    externalClasses: ['ext-class']
})
