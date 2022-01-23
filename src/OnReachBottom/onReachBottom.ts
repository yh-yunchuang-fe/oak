Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tips: {
            type: String,
            value: '',
            optionalTypes: [String]
        },
        showImg: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean]
        },
        bottom: {
            type: Number,
            optionalTypes: [Object],
            value: 0
        },
        fontColor: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        ancestors: {
            type: String,
            value: '.exposure-wraper',
            optionalTypes: [String],
        } // 用于祖先选择器 
    },
    externalClasses: ['bottom-bg', 'tips-class', 'end-img'],
    /**
     * 组件的初始数据
     */
    data: {},
    ready(): void {
        this._init()
    },
    detached(): void {
        this.intersection && this.intersection.disconnect()
    },
    /**
     * 组件的方法列表
     */
    methods: {
        _init(): void {
            const { bottom } = this.data 
            // @ts-ignore
            this.intersection = wx.createIntersectionObserver() // 不要传参
            this.intersection
                .relativeToViewport({ 
                    bottom: bottom ? bottom : 48,
                })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .observe(`${this.data.ancestors} >>> #yh-on-reach-bottom`, (res: any): void => {
                    const { intersectionRatio } = res
                    if (intersectionRatio > 0) {   
                        this.triggerEvent('onReachBottom')
                    } else {
                        this.triggerEvent('unReachBottom')
                    }
                })
        }
    }
})
