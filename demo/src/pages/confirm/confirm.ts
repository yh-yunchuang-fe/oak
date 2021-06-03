//index.js
//获取应用实例
Page({
    data: {
        isConfirmShow: false
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Confirm 反馈弹窗',
            path: '/pages/confirm/confirm',
        }
    },
    show(e: event): void {
        const { options } = e.currentTarget.dataset
        this.setData!({
            ...options,
            isConfirmShow: true,
        })
    },
    onModalConfirm(): void {
       
    },
    onModalCancel(): void {
       
    },
})
