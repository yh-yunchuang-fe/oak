//index.js
Page({
    data: {
        value: 5,
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Stepper',
            path: '/pages/label/label',
        }
    },
    onPlus(info: any): void {
        this.asyncChange({ type: 'plus', value: info.detail.value })
    },
    onMinus(info: any): void {
        this.asyncChange({ type: 'minus', value: info.detail.value })
    },
    asyncChange(info: any): void {
        new Promise((resolve: any): void => {
            wx.showLoading({ mask: true, title: '加载中' })
            setTimeout((): void => {
                resolve(info.value)
            }, 1000)
        }).then((res: any): void => {
            wx.hideLoading()
            //@ts-ignore
            const value = { plus: res + 1, minus: res - 1, input: res }[info.type]
            this.setData!({
                value
            })
        })
    }
})
