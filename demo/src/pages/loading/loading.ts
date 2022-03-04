//index.js
//获取应用实例
Page({
    data: {
        absoluteShow: false,
    },
    globalTap(): void {
        this.setData!({
            globalShow: true,
        }, (): void => {
            setTimeout((): void => {
                this.setData!({
                    globalShow: false,
                })
            }, 3000)
        })
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
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Loading 加载',
            path: '/pages/loading/loading',
        }
    },
})
