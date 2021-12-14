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
    onClick(e: event): void {
        const { icon } = e.currentTarget?.dataset || {}
        if (!icon) return
        // 复制icon名称
        wx.setClipboardData({
            data: icon,
            success: function (): void {
                wx.getClipboardData({
                    success: function (res): void {
                        console.log(res.data)// data
                    }
                })
            }
        })
    }
})
