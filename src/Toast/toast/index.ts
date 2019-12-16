import BasicBehavior from 'Mixins/basic'

Component({
    behaviors: [BasicBehavior],
    properties: {
        options: {
            type: Object,
            value: null,
            optionalTypes: [Object],
            observer(nval, oval) {
                if (nval === oval) return
                this.showToast(nval)
            }
        }
    },
    data: {
        title: '提示的内容', // 标题
        icon: '', // oak-icon
        image: '', // 自定义图片优先级高于 icon
        wrap: true,
        maxWidth: 'auto',
        duration: 1500,
        mask: true
    },
    methods: {
        showToast(options) {
            if (!options.show) return

            this.setData({ ...Object.assign({}, this.data, options) })

            if (this.timer) return

            this.timer = setTimeout(() => {
                this.hideToast()
                clearTimeout(this.timer)
                this.timer = null
            }, this.data.duration)
        },
        hideToast() {
            this.setData({ show: false })
        }
    }
})
