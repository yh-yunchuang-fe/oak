/**
 * 简介：遮罩组件
 * 属性：autoClose 是否点击遮罩自动隐藏
 * 方法：show 显示,hide隐藏
 * 事件：onMaskClick 遮罩被点击。
 */
Component({
    /**
     * 组件的属性列表
     */
    externalClasses:['ext-class','wrap-class'],
    properties: {
        // 是否点击遮罩，自动隐藏
        autoClose: {
            type: Boolean,
            value: false
        },
        // mask是否显示
        isShow: {
            type: Boolean,
            value: true
        },
        position: {
            type: String,
            value: 'fixed', // fixed, absolute
        },
        type:{
            type: String,
            value: 'page', // page, card
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 显示mask
        show(): void{
            this.setData({
                isShow: true
            })
        },
        // 隐藏mask
        hide(): void{
            this.setData({
                isShow: false
            })
        },
        // 点击mask调用
        onMaskClick(): void{
            this.triggerEvent('onMaskClick')
            this.data.autoClose && this.hide()
        }
    }
})
