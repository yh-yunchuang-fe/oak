//index.js
//获取应用实例
Page({
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Badge 微标',
            path: '/pages/badge/badge',
        }
    },
})
