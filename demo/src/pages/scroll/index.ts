//index.js
//获取应用实例
Page({
    data: {
        batch: [{
            name: 'lewis'
        }]
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Image 组件',
            path: '/pages/scroll/index',
        }
    },
})
