//index.js
import Icons from './icons'
Page({
    data: {
        icons: Icons,
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Icon 图标',
            path: '/pages/icon/index',
        }
    },
})
