//index.js
//获取应用实例
Page({
    data: {
        buttons: {
            share: function() { this.share() },
            edit: function() { this.edit() },
            delete: function() { this.delete() },
        }
    },
    delete() {
        console.log('delete')
        wx.showToast({ title: '删除成功', icon: 'none', duration: 1000 })
    },
    edit() {
        console.log('edit')
        wx.showToast({ title: '正在编辑', icon: 'none', duration: 1000 })
    },
    share() {
        console.log('share')
        wx.showToast({ title: '分享成功', icon: 'none', duration: 1000 })
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak SlideView 滑动操作',
            path: '/pages/index/index'
        }
    }
})
