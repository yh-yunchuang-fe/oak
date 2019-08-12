//index.js
//获取应用实例
Page({
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Avatar 头像',
            path: '/pages/avatar/avatar',
        }
    },
})
