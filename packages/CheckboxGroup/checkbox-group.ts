import BasicBehavior from '../mixins/basic'

Component({
    behaviors: [BasicBehavior],
    relations: {
        '../Checkbox/checkbox': {
            type: 'child'
        }
    },
    properties: {
        value: {
            type: Object,
            value: [],
            observer(): void {
                const childList = this.getRelationNodes('../Checkbox/checkbox') || []
                childList.forEach((child): void => {
                    if (child.init) child.init()
                })
            }
        },
        disabled: {
            type: Boolean,
            value: false
        },
        max: {
            type: Number,
            value: null
        }
    },
    methods: {

    },
    externalClasses: ['ext-class']
})
