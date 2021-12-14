//index.js
//获取应用实例
Page({
    data: {
        showPopup1: false,
        showPopup2: false,
        showPopup3: false,
        closable: false,
        position: '',
        size: '',
        titleStyle:'',
        subTitle: {
            name: '关闭',
            icon: 'close-light',
            style:''
        }
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Popup 弹出窗',
            path: '/pages/popup/popup',
        }
    },
    onPopupShow(e: event): void {
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
    onPopupShow2(e: event): void {
        const { position, size, style } = e.currentTarget.dataset
        this.setData!({
            position,
            size,
            style: style ? style : '',
            showPopup2: true,
        })
    },
    onPopupClose2(): void {
        this.setData!({
            showPopup2: false,
        })
    },
    onPopupClose3(): void {
        console.log('subTitleClick')
        this.setData!({
            showPopup3: false,
        })
    },
    onPopupShow3(e: event): void {
        const { position, closable = false, title = '', titlestyle = '', subicon = '', subname = '', substyle = '' } = e.currentTarget.dataset
        console.log(e.currentTarget.dataset)
        this.setData!({
            position,
            closable,
            title,
            titleStyle:titlestyle,
            subTitle: {
                name: subname,
                icon: subicon,
                style: substyle
            },
            showPopup3: true,
        })
    },
})
