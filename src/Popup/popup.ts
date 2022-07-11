Component({
    properties: {
        show: {
            type: Boolean,
            value: false,
            observer(): void {
                this.toggleShow()
            }
        },
        mask: {
            type: Boolean,
            value: true,
        },
        maskClosable: {
            type: Boolean,
            value: true,
        },
        zIndex: {
            type: Number,
            value: 20,
        },
        // 弹窗位置
        position: {
            type: String,
            value: 'bottom',// center top bottom left right
        },
        // 动画时长 ms
        duration: {
            type: Number,
            value: 200
        },
        // 显示尺寸：占宽高比的7/9 6/9 5/9 4/9 3/9
        sizeInNine: {
            type: String,
            value: '6',// 2 3 4 5 6 7
        },
        // 显示圆角：仅上下浮层
        showRadius: {
            type: Boolean,
            value: true,
        },
        //是否显示左上角的关闭按钮
        closable: {
            type: Boolean,
            value: true,
        },
        safeArea: {
            type: Boolean,
            value: true,
        },
        // 标题：中间
        title: {
            type: String,
            value: '',
        },
        // 标题样式
        titleStyle: {
            type: String,
            value: '',
        },
        // 次标题：右侧
        subTitle: {
            type: Object,
            value: {
                name: '',   // 文字 优先与icon
                icon: '',   // icon 
                style: '',  // 样式
            },
        }
    },
    data: {
        _maskShow: false,
        _bodyShow: false,
        _show: false,
    },
    methods: {
        /**
         * 设置页面overflow，解决覆层滚动穿透问题
         * @param overflow 
         * @returns 
         */
        setPageOverflow(overflow): void {
            try {
                // @ts-ignore
                wx.setPageStyle({
                    style: {
                        overflow,
                    },
                })
            } catch (err) {
                console.warn(err)
            }
        },
        wrapClick(): void {
            this.triggerEvent('onWrapClick')
        },
        maskClick(): void {
            this.triggerEvent('onMaskClick')
            if (this.data.maskClosable) {
                this.popupClose()
            }
        },
        async popupClose(): Promise<void> {
            await this.close()
            this.triggerEvent('onPopupClose')
        },
        open(): void {
            this.setPageOverflow('hidden')
            this.setData({
                _show: true,
            }, (): void => {
                this.setData({
                    _maskShow: true,
                    _bodyShow: true,
                })
            })
        },
        close(): Promise<void> {
            this.setPageOverflow('visible')
            const { _show } = this.data
            if (!_show) return Promise.resolve()

            return new Promise<void>((res): void => {
                this.setData({
                    _bodyShow: false,
                    _maskShow: false,
                }, (): void => {
                    const { duration } = this.data
                    this.timer = setTimeout((): void => {
                        res()
                        this.clearTimer()
                    }, duration)
                })
            }).then((): void => {
                this.setData({
                    _show: false,
                }, this.clearTimer)
            })
        },
        toggleShow(): void {
            const { show } = this.data
            if (show) {
                this.open()
            } else {
                this.close()
            }
        },
        clearTimer(): void {
            if (this.timer) {
                clearTimeout(this.timer)
                this.timer = null
            }
        },
        detached(): void {
            this.clearTimer()
        },
        onSubTitleClick(e: event): void {
            this.triggerEvent('subTitleClick', e)
        },
    },
    externalClasses: ['root-class', 'wrap-class', 'header-class', 'body-class'],
})
