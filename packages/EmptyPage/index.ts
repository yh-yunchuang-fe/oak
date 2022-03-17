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
        // 描述文字自定义样式
        descStyleConf: {
            type: String,
            value: ''
        }
    }
})
