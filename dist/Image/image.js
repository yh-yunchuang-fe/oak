import BasicBehavior from '../mixins/basic';
Component({
    behaviors: [BasicBehavior],
    properties: {
        src: {
            type: String,
            value: null
        },
        width: {
            type: String,
            value: null
        },
        height: {
            type: String,
            value: null
        },
        radius: {
            type: Array,
            value: [0, 0, 0, 0]
        },
        mode: {
            type: String,
            value: 'aspectFill'
        },
        webp: {
            type: Boolean,
            value: true
        },
        lazyLoad: {
            type: Boolean,
            value: true
        },
        showMenuByLongpress: {
            type: Boolean,
            value: false
        }
    },
    externalClasses: ['ext-class', 'img-class'],
    data: {},
    methods: {
        onLoadError(e) {
            this.triggerEvent('onLoadError', e);
        }
    }
});
