//index.js
Page({
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Progress',
            path: '/pages/progress/progress',
        }
    },
    onShow() {
        setTimeout(() => {
            // @ts-ignore
            this.setData({ progress: 50})
        }, 200)
    }
})
