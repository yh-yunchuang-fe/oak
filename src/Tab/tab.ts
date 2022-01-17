import BasicBehavior from 'Mixins/basic'
import systemInfo from 'Mixins/toy-system-info'

Component({
    behaviors: [BasicBehavior],
    properties: {
        // 类型 默认 default ｜ 组合 combination ｜ 按钮胶囊 button
        type: {
            type: String,
            value: 'default'
        },
        //  是否支持侧滑
        scroll: {
            type: Boolean,
            value: false
        },

    },
    data: {
        active: 0,
        scrollLeft: 0,
    },
    methods: {
        onClick(e: any): void {
            const { dataset, offsetLeft } = e.currentTarget
            const { index } = dataset || {}
            if (index === this.data.active) return
            this.setData({ active: index })

            // 激活标签滑动居中
            const screenCenter = systemInfo.screenWidth / 2
            this.getRect(`.tab-item_${index}`).then((rect: { width: number }): void => {
                const { width } = rect
                const newTargetLeft = screenCenter - (width / 2)
                this.setData({ scrollLeft: offsetLeft - newTargetLeft })
            })
        },
    },
    externalClasses: ['ext-class', 'before-class', 'after-class'],
})
