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
        title: '提示的内容',  // 标题
        icon: '',           // oak-icon
        image: '',          // 自定义图片优先级高于 icon
        wrap: true,
        width: null,
        duration: 1500,
        mask: true,
        animation: null
    },
    methods: {
        showToast(options) {
            if (!options.show || this.timer) return

            this.setData({ ...Object.assign({}, this.data, options) })
            this.animation = wx.createAnimation({ duration: 150, timingFunction: 'ease' })
            this.animation.opacity(1).scale3d(1, 1, 1).step()
            
            let timer: any = setTimeout(() => {
                clearTimeout(timer)
                timer = null
                this.setData({ animation: this.animation.export() })
            }, 100)

            this.timer = setTimeout(() => {
                clearTimeout(this.timer)
                this.timer = null
                this.hideToast()
            }, this.data.duration)
        },
        hideToast() {
            this.animation.opacity(0).scale3d(0.9, 0.9, 0.9).step()
            this.setData({ animation: this.animation.export() })
            let timer: any = setTimeout(() => {
                clearTimeout(timer)
                timer = null
                this.setData({ show: false })
            }, 150)
        }
    }
})
