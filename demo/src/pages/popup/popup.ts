//index.js
//获取应用实例
Page({
    data: {
        showPopup: false,
        positon: ''
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Popup 弹出窗',
            path: '/pages/popup/popup',
        }
    },
    onPopupShow(e: event ): void {
        const { position, style } = e.currentTarget.dataset
        this.setData!({
            position,
            style,
            showPopup: true,
        })
    },
    onPopupClose(): void {
        this.setData!({
            showPopup: false,
        })
    }
})
