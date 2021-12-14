Component({
    /**
     * 组件的属性列表
     */
    properties: {
        icon: {
            type: String,
            value: 'https://static.yonghuivip.com/weapp/defaultImg05.png',
        },
        desc: {
            type: String,
            value: '',
        },

        styleConf: {
            type: String,
            value: '',
        },

        position: {
            type: String,
            value: 'fixed',
        },
        isPromotion: {
            type: Boolean,
            value: false,
        },
    }
})
