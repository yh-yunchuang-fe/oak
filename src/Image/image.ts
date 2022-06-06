import BasicBehavior from 'Mixins/basic'
import getSrc from './utils/index'
Component({
    behaviors: [BasicBehavior],
    /**
     * 组件的属性列表
     */
    properties: {
        /**
         * 图片资源地
         *
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
        // 背景图
        bgImg: {
            type: String,
            value: ''
        },
        /**
         * 图片裁剪、缩放的模式, 同步原生组件
         *
         * */
        mode: {
            type: String,
            value: 'scaleToFill'
        },

        /** px */
        width: {
            type: String,
            value: ''
        },
        height: {
            type: String,
            value: ''
        },
        lazyLoad: {
            type: Boolean,
            value: true
        },
        // 四个角
        imgRadius:{
            type: String,
            value: ''
        },
        radius: {
            type: Array,
            value: []
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
        // 是否为100%宽度
        isFullWidth: {
            type: Boolean,
            value: false,
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        hideMini: false,
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
                return
            }
            this.getSrc()
        },
        getCurSrc(): void {
            const { src, pixelRatio, width, quality, imgRadius } = this.data
            const imgSrc = getSrc(src, width, pixelRatio, quality, imgRadius)
            this.setData({ curSrc: imgSrc})
        }
    }
})
