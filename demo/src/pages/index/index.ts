//index.js
//获取应用实例

Page({
    data: {
        activeKey: '0',
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui',
            path: '/pages/index/index',
        }
    },
})
