import BasicBehavior from '../mixins/basic'

Component({
    behaviors: [BasicBehavior],
    relations: {
        '../Button/button': {
            type: 'child'
        }
    },
    properties: {
        // 大小
        size: {
            type: String,
            value: 'middle', // 'mini' | 'small' | 'middle' | 'large'
        },
        // 按钮形状-圆角
        round: {
            type: Boolean,
            value: false
        },
        // 按钮形状-直角
        angle: {
            type: Boolean,
            value: false
        },
    },
    methods: {
        getChildNum(): number {
            const childList = this.getRelationNodes('../Button/button') || []
            return childList.length
        }
    },
    externalClasses: ['ext-class']
})
