//index.js
//获取应用实例

Page({
    data: {
        activeKey: '1',
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui',
            path: '/pages/index/index',
        }
    },
})
