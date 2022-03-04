import BasicBehavior from '../mixins/basic'

Component({
    behaviors: [BasicBehavior],
    properties: {
        /**
         * 图片资源地址
         * */
        src: {
            type: String,
            value: '',
            observer(newVal, oldVal): void {
                if (newVal && newVal !== oldVal) {
                    this.isReady && this.init()
                }
            }
        },
        /** 不带单位时，默认px */
        width: {
            type: String,
            value: ''
        },
        height: {
            type: String,
            value: ''
        },
        // 容器圆角
        radius: {
            type: null,
            value: '',
            optionalTypes: [String, Array]
        },
        // 背景图
        bgImg: {
            type: String,
            value: ''
        },
        // 背景颜色
        bgColor: {
            type: String,
            value: ''
        },
        /**
         * 图片裁剪、缩放的模式, 同步原生组件
         *
         * */
        mode: {
            type: String,
            value: 'aspectFit'
        },

        lazyLoad: {
            type: Boolean,
            value: true
        },
        // 图片自身圆角，只允许设置一个值
        imgRadius: {
            type: String,
            value: '',
        },
        webp: {
            type: Boolean,
            value: true
        },
        // 设置请求图片的质量登记(0, 100]
        quality: {
            type: Number,
            value: 95
        },
        // 是否设定背景图
        noBgImg: {
            type: Boolean,
            value: false,
        },
    },
    /**
     * 组件的初始数据
     */
    data: {
        status: 0 // 0加载中，1加载成功，2加载失败
    },
    externalClasses: ['class', 'ext-class', 'img-class'],
    options: {
        addGlobalClass: false
    },
    ready(): void {
        this.isReady = true
        this.data.src && this.init()
    },
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 获取七牛的图片处理器
         * 参考 https://developer.qiniu.com/dora/manual/1270/the-advanced-treatment-of-images-imagemogr2
         *
         * */
        init(): void {
            if (!/^(http|https)./g.test(this.data.src)) {
                console.warn(
                    `[Image Component] ${this.data.src} 图片路径有误！本地图片请使用原生 <image> 组件`
                )
            }
        },
        onLoad(e): void{
            this.setData({ status: 1 })
            this.triggerEvent('load', e)
        },

        onError(e): void{
            this.setData({ status: 2 })
            this.triggerEvent('error', e)
        }
    }
})
