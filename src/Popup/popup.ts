
const animationMap: { [key: string]: { in: string; out: string } } = {
    center: {
        in: 'fadeIn',
        out: 'fadeOut'
    },
    top: {
        in: 'slideInDown',
        out: 'slideOutUp',
    },
    bottom: {
        in: 'slideInUp',
        out: 'slideOutDown',
    },
}
Component({
    properties: {
        // 是否显示
        show: {
            type: Boolean,
            value: false,
            observer(): void {
                this.toggleShow()
            }
        },
        // 是否显示蒙层
        mask: {
            type: Boolean,
            value: true,
        },
        // 蒙层是否可点击关闭
        maskClosable: {
            type: Boolean,
            value: true,
        },
        // 浮层层级
        zIndex: {
            type: Number,
            value: 20,
        },
        // 弹窗位置
        position: {
            type: String,
            value: 'bottom',// center top bottom
        },
        // 动画时长 ms
        duration: {
            type: Number,
            value: 400
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
        height: {
            type: String, 
            value: ''
        },
        // 底部安全区域，针对iOS异形屏
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
        },
    },
    data: {
        _maskShow: false,
        _bodyShow: false,
        _show: false,
        _animate: '',   // 动画
        _loaded: false, //首次显示后 置为true，使组件仅在首次显示时才加载内容
    },
    methods: {
        /**
         * 设置页面overflow，解决浮层滚动穿透问题
         * @param overflow 
         * @returns 
         */
        setPageOverflow(overflow): void {
            try {
                // @ts-ignore
                wx.setPageStyle({
                    style: { overflow },
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
            const { position } = this.data
            const _animate = (animationMap[position] || {}).in || ''
            this.setData({
                _show: true,
                _loaded: true,
                _animate,
                _maskShow: true,
                _bodyShow: true,
            }, (): void => {
                // 异步的情况会导致，mask先显示，body动画后显示，有一定的延迟，全部改为同步
                // this.setData({
                //     _maskShow: true,
                //     _bodyShow: true,
                // })
            })
        },
        animationEnd(e: event): void {
            const animation = animationMap[this.data.position] || {}
            e.detail.animationName === animation.out && this.setData({
                _show: false,
            })
        },
        close(): void {
            this.setPageOverflow('visible')
            const { _show, position } = this.data
            const _animate = (animationMap[position] || {}).out || ''
            if (!_show) return
            this.setData({
                _bodyShow: false,
                _maskShow: false,
                _animate
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
        onSubTitleClick(e: event): void {
            this.triggerEvent('subTitleClick', e)
        },
    },
    externalClasses: ['root-class', 'wrap-class', 'header-class', 'body-class', 'safe-class'],
})
