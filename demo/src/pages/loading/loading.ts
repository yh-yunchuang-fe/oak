//index.js
//获取应用实例
Page({
    data: {
        absoluteShow: false,
    },
    absoluteTap(): void {
        this.setData!({
            absoluteShow: true,
        }, (): void => {
            setTimeout((): void => {
                this.setData!({
                    absoluteShow: false,
                })
            }, 2000)
        })
    },
    fixedTap(): void {
        this.setData!({
            fixedShow: true,
        }, (): void => {
            setTimeout((): void => {
                this.setData!({
                    fixedShow: false,
                })
            }, 2000)
        })
    }
})
