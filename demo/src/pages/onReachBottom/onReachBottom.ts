//index.js
//获取应用实例
Page({
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui OnReachBottom 触底组件',
            path: '/pages/onReachBottom/onReachBottom',
        }
    },
    toThing(): void {
        wx.navigateTo({
            url : '../onReachBottomDemo/onReachBottomDemo'
        })
    }
})
