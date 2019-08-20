//index.js
//获取应用实例
Page({
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Feeds 信息流',
            path: '/pages/feeds/feeds',
        }
    },
})
