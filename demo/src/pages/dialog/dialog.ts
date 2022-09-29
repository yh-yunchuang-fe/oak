//index.js
//获取应用实例
Page({
    data: {
        confirmAsync: false,
        show: false,
        buttonBlock: false,
        closable: false,
        maskClosable: true,
        title: '',
        content: '',
        buttons: [],
        type: 'default',
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Dialog 弹窗',
            path: '/pages/dialog/dialog',
        }
    },
    showDialog(e: event): void {
        const { options } = e.currentTarget.dataset
        this.setData!({
            diy: false,
            ...options,
            show: true,
        })
    },
    onConfirm(): void {
        const { confirmAsync = false } = this.data
        if (confirmAsync) {
            setTimeout((): void => {
                this.setData!({
                    show: false,
                })
            }, 5 * 1000)
        }
    },
    dialogShow(): void {
        this.setData!({
            diy: false,
            confirmAsync: false,
        })
        this.selectComponent!('#dialog').confirm({
            title: '实例调用',
            content: '同一页面中存在多次调用时推荐',
            buttons:[{text:'取消', type:'cancel'},{text:'知道了',type:'confirm'}],
            confirmAsync: true,
            onConfirm(hide: Function): void {
                setTimeout((): void => {
                    hide()
                }, 2000)
            }
        })
    },
    onClose(): void {
        this.setData!({
            title: '',
            content: '',
            diy: false,
            confirmAsync: false,
            show: false,
            buttonBlock: false,
            closable: false,
            maskClosable: true,
            buttons: [],
            type: 'default',
        })
    }
})
