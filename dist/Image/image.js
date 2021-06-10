import BasicBehavior from '../mixins/basic';
Component({
    behaviors: [BasicBehavior],
    properties: {
        src: {
            type: String,
            value: '',
            observer(newVal, oldVal) {
                if (newVal && newVal !== oldVal) {
                    this.isReady && this.init();
                }
            }
        },
        bgImg: {
            type: String,
            value: ''
        },
        mode: {
            type: String,
            value: 'scaleToFill'
        },
        style: {
            type: String,
            value: ''
        },
        width: {
            type: Number,
            value: 0
        },
        height: {
            type: Number,
            value: 0
        },
        lazyLoad: {
            type: Boolean,
            value: true
        },
        imgRadius: {
            type: String,
            value: false
        },
        radius: {
            type: Array,
            value: [0, 0, 0, 0]
        },
        webp: {
            type: Boolean,
            value: true
        },
    },
    data: {
        hideMini: false,
    },
    externalClasses: ['class', 'ext-class', 'img-class'],
    options: {
        addGlobalClass: false
    },
    ready() {
        this.isReady = true;
        this.data.src && this.init();
    },
    methods: {
        init() {
            if (!/^(http|https)./g.test(this.data.src)) {
                console.error(`[Image Component] ${this.data.src} 图片路径有误！本地图片请使用原生 <image> 组件`);
            }
        },
        onLoad() {
            this.setData({ hideMini: true });
            this.triggerEvent('load');
        },
        onLoadError(e) {
            console.error(this.data.src, e);
        },
        clickImg() {
            this.triggerEvent('clickImage', {
                src: this.data.src
            });
        }
    }
});
