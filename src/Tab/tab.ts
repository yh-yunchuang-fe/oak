import BasicBehavior from 'Mixins/basic'
import systemInfo from 'Mixins/toy-system-info'

enum Sort {
    Default = 'default',
    Asc = 'asc',
    Desc = 'desc',
}

interface Tab {
    key: string;
    title: string;
    subtitle?: string;
    icon?: string;
    sort?: Sort;
}

Component({
    behaviors: [BasicBehavior],
    properties: {
        // 类型 默认 default ｜ 组合 combination ｜ 按钮胶囊 button ｜ 带图片 img
        type: {
            type: String,
            value: Sort.Default
        },
        // 标签列表
        tabs: {
            type: Array,
            value: []
        },
        // 是否支持排序, 仅在img类型下支持
        sort: {
            type: Boolean,
            value: false
        },
        // 激活tab的index
        active: {
            type: Number,
            value: 0
        }
    },
    data: {
        scrollLeft: 0,
    },
    methods: {
        onClick(e: any): void {
            const { dataset, offsetLeft } = e.currentTarget
            const { index } = dataset || {}
            const { active, tabs } = this.data
            if (index === active) return
            this.setData({ active: index })
            this.triggerEvent('change', tabs[index])

            // 激活标签滑动居中
            const screenCenter = systemInfo.screenWidth / 2
            this.getRect(`.tab-item_${index}`).then((rect: { width: number }): void => {
                const { width } = rect
                const newTargetLeft = screenCenter - (width / 2)
                this.setData({ scrollLeft: offsetLeft - newTargetLeft })
            })
        },
        handleSort(e: any): void {
            const { dataset } = e.currentTarget
            const { index } = dataset || {}
            const tab = this.data.tabs[index] || {}
            const sort = tab.sort || Sort.Default
            const SORTS = ['default', 'asc', 'desc']
            let nextSortIndex = SORTS.indexOf(sort) + 1
            nextSortIndex = nextSortIndex >= SORTS.length ? 0 : nextSortIndex
            this.setData({
                [`tabs.[${index}].sort`]: SORTS[nextSortIndex]
            }, (): void => {
                const sortList: Sort[] = (this.data.tabs || []).map((tab: Tab): Sort => (tab.sort || Sort.Default))
                this.triggerEvent('sortChange', sortList)
            })
        }
    },
    externalClasses: ['ext-class', 'item-class'],
})
