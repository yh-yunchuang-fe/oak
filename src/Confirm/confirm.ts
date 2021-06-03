Component({
    /**
     * 组件的属性列表
     */
    properties: {
        isConfirmShow: {
            type: Boolean,
            value: false
        },
        confirmText: {
            type: String,
            value: '确定',
        },
        cancelText: {
            type: String,
            value: '取消',
        },
        content: {
            type: String,
            value: '',
        },
        title: {
            type: String,
            value: '',
        },
        showCancel: {
            type: Boolean,
            value: false
        }
    },

    externalClasses: ['confirm-btn-class'],

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        hide() {
            this.setData({
                isConfirmShow: false,
            })
        },

        show() {
            this.setData({
                isConfirmShow: true,
            })
        },

        onModalConfirm() {
            this.hide()
            this.triggerEvent('onModalConfirm')
        },

        onModalCancel() {
            this.hide()
            this.triggerEvent('onModalCancel')
        },

        onModalClose() {
            this.hide()
        },

        move() {
            
        }
    },
})
