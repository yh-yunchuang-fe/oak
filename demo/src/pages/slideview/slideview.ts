//index.js
//获取应用实例
Page({
    onShareAppMessage(): object {
        return {
            title: 'Oak SlideView 滑动操作',
            path: '/pages/index/index',
        }
    },
})
