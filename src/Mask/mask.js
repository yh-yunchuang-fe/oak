/**
 * 简介：遮罩组件
 * 属性：isAutoClose 是否点击遮罩自动隐藏
 * 方法：show 显示,hide隐藏
 * 事件：onMaskClick 遮罩被点击。
 */
Component({
    /**
     * 组件的属性列表
     */
    externalClasses:['mask-custom-class'],
    properties: {
        // 是否点击mask，自动隐藏
        isAutoClose: {
            type: Boolean,
            value: true
        },
        // mask是否显示
        isShow: {
            type: Boolean,
            value: true
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 显示mask
        show() {
            this.setData({
                isShow: true
            })
        },
        // 隐藏mask
        hide() {
            this.setData({
                isShow: false
            })
        },
        // 点击mask调用
        onMaskClick() {
            this.triggerEvent('onMaskClick')
            this.data.isAutoClose && this.hide()
        }
    }
})
