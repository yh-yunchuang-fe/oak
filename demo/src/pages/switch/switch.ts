//index.js
//获取应用实例
Page({
    data: {
        checked: false,
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Switch 开关',
            path: '/pages/switch/switch',
        }
    },
    change(e: event): void {
        const { checked } = e.detail
        console.log(checked)

        wx.showToast({
            title: checked ? '打开' : '关闭',
            icon: 'none'
        })
    },
    asyncFun(): void {
        const _this = this
        this.selectComponent!('#dialog').confirm({
            title: '是否切换开关',
            content: '',
            cancleText: '取消',
            confirmText: '确认',
            onConfirm(): void {
                _this.setData!({
                    checked: !_this.data.checked,
                })
            },
        })
    }
})
