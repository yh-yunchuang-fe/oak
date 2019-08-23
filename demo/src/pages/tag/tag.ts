//index.js
//获取应用实例
Page({
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Tag 标签',
            path: '/pages/tag/tag',
        }
    },
})
