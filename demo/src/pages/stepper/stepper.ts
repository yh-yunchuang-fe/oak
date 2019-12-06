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
    onPlus(info: any) {
        this.asyncChange({type: 'plus', value: info.detail.value})
       
    },
    onMinus(info: any) {
        this.asyncChange({type: 'minus', value: info.detail.value})
    },
    asyncChange(info: object): any {
        new Promise(resolve => {
            setTimeout(() => {
                resolve(info.value)
            }, 2000)
        }).then((res: any) => {
            this.setData!({
                value: info.type === 'plus' ? res + 1 : res - 1
            })
        })
    }
})
