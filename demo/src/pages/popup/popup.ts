//index.js
//获取应用实例
Page({
    data: {
        showPopup1: false,
        showPopup2: false,
        positon: '',
        size:'',
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
            showPopup1: true,
        })
    },
    onPopupClose(): void {
        this.setData!({
            showPopup1: false,
        })
    },
    onPopupShow2(e: event ): void {
        const { position, size,style } = e.currentTarget.dataset
        this.setData!({
            position,
            size,
            style:style?style:'',
            showPopup2: true,
        })
    },
    onPopupClose2(): void {
        this.setData!({
            showPopup2: false,
        })
    }
})
