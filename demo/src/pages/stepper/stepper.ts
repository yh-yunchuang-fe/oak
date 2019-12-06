//index.js
Page({
    data: {
        value: 5
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
            setTimeout((): void => {
                resolve(info.value)
            }, 2000)
        }).then((res: any):void => {
            this.setData!({
                value: info.type === 'plus' ? res + 1 : res - 1
            })
        })
    }
})
