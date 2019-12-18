import BasicBehavior from '../mixins/basic'

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
            value: {
                normal: 'checkbox',
                active: 'choice-facet',
                disabled: 'un-choose'
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
    ready() {
        let parent = this.getRelationNodes('../CheckboxGroup/checkbox-group')
        let { name } = this.data

        if (!parent || !parent[0] || !name) return

        let { value } = parent[0].data
        let selected = value.filter(
            (item: any) => JSON.stringify(item) === JSON.stringify(name)
        )

        this.setData({ value: selected.length > 0 })
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
