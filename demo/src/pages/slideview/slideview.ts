//index.js
//获取应用实例
Page({
    data: {
        buttons: {
            share: function(): void { this.share() },
            edit: function(): void { this.edit() },
            delete: function(): void { this.delete() },
        }
    },
    delete(): void {
        console.log('delete')
        wx.showToast({ title: '删除成功', icon: 'none', duration: 1000 })
    },
    edit(): void {
        console.log('edit')
        wx.showToast({ title: '正在编辑', icon: 'none', duration: 1000 })
    },
    share(): void {
        console.log('share')
        wx.showToast({ title: '分享成功', icon: 'none', duration: 1000 })
    },
    collect(): void {
        console.log('collect')
        wx.showToast({ title: '收藏成功', icon: 'none', duration: 1000 })
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak SlideView 滑动操作',
            path: '/pages/index/index'
        }
    }
})
