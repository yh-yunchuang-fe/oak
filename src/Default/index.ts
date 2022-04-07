Component({
    /**
     * 组件的属性列表
     */
    properties: {
        iconName: {
            type: String,
            value: '', // 支持设置icon name
        },
        iconColor: {
            type: String,
            value: '#ccc',
        },
        iconSize: {
            type: Number,
            value: 128
        },
        src: {
            type: String,
            value: '', // 图片链接
        },
        imgType: {
            type: String,
            value: '', // 为了省事，不传src也可以，可以默认图标type，01：购物车，02: 地址，03: 定位，04: 搜索，05: 优惠券，06: 订单，07: 网络，08: 服务器，09: 限流，10: 积分，11: 金额记录，12: 购物卡，13: 菜肴，14: 活动，15: 内容为空，16: 下架，17: 404，18: 砍价，19: 其他记录，20: 手机，21: 选择门店
            observer(type): void {
                if(type) {
                    this.handleImgType(type)
                }
            }
        },
        title: {
            type: String,
            value: '',
        },
        subTitle: {
            type: String,
            value: '',
        },
        mainBtnText: {
            type: String,
            value: '',
        },
        subBtnText: {
            type: String,
            value: '',
        },

        direction: {
            type: String,
            value: 'column',
        },
        center: {
            type: Boolean,
            value: false
        },
        top: {
            type: String,
            value: '',
        },
    },
    methods: {
        handleImgType(type): void {
            const {src} = this.data
            if(src) return
            this.setData({src: `https://static.yonghuivip.com/weapp/defaultImg${type}.png`})
        },
        onMainBtnClick(e: event): void {
            this.triggerEvent('onMainBtnClick', e)
        },
        onSubBtnClick(e: event): void {
            this.triggerEvent('onSubBtnClick', e)
        }
    },
    externalClasses: [
        'ext-class',
        'title-class',
        'sub-title-class',
        'main-btn-class',
        'sub-btn-class',
    ],
})
