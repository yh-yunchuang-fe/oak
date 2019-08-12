//index.js
//获取应用实例
Page({
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui List 列表',
            path: '/pages/list/list',
        }
    },
})
