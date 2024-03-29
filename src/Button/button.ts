import BasicBehavior from 'Mixins/basic'
import OpenTypeBehavior from 'Mixins/open-type'
import ButtonBehavior from 'Mixins/button'
import { compareVersion } from 'Mixins/basic'
import systemInfo from 'Mixins/toy-system-info'

const bhv = [BasicBehavior, OpenTypeBehavior, ButtonBehavior]
const isFormField = compareVersion(systemInfo.SDKVersion, '2.10.3') > 0
if (isFormField) bhv.push('wx://form-field-button')

Component({
    behaviors: bhv,
    relations: {
        '../ButtonGroup/button-group': {
            type: 'parent'
        }
    },
    properties: {
        formType: {
            type: String,
            value: ''
        },
        // 按钮类型
        type: {
            type: String,
            value: 'default', // 'default' | 'primary' ｜ 'warning'
        },
        // 填充模式
        fill: {
            type: String,
            value: 'solid',// 'solid' | 'outline' | 'none'
        },
        // 大小
        size: {
            type: String,
            value: 'middle', // 'mini' | 'small' | 'middle' | 'large'
        },
        // 是否是块级元素
        block: {
            type: Boolean,
            value: false
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
        // // 按钮形状-胶囊（默认）
        // capsules: {
        //     type: Boolean,
        //     value: false
        // },
        // 是否是待唤起状态
        waiting: {
            type: Boolean,
            value: false
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            value: false
        },
        // 是否处于加载状态
        loading: {
            type: Boolean,
            value: false
        },
        // 加载状态下额外展示的文字
        loadingText: {
            type: String,
            value: '',
        },
        // 图标
        icon: {
            type: String,
            value: '',
        },
        // style
        buttonStyle: {
            type: String,
            value: '',
        },
    },
    data: {
    },
    ready(): void {
        this.init()
    },
    methods: {
        init(): void {
            this.parents = this.getRelationNodes('../ButtonGroup/button-group')
            this.hasParent = this.parents && this.parents.length > 0
            if (!this.hasParent) return

            const parent = this.parents[0] || {}
            const { size: groupSize } = parent.data || {}

            // 同级按钮个数，默认是1，是该按钮自己也算一个
            const childNum = (parent.getChildNum && parent.getChildNum()) || 1

            this.setData({
                size: (groupSize || this.data.size),
                angle: childNum > 1 //当按钮个数大于1时，按钮需要是直角的
            })
        },
        onTap(e: event): void {
            const { disabled, loading, waiting } = this.data
            if (disabled || loading || waiting) return
            this.triggerEvent('click', e)
        }
    },
    externalClasses: ['button-class', 'hover-class', 'loading-class'],
})
