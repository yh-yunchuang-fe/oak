//index.js
//获取应用实例
Page<Page.PageInstance, any>({
    data: {
        options: {
            show: false
        }
    },
    toastFn1() {
        this.setData({ options: { show: true, title: '基本用法' } })
    },
    toastFn2() {
        this.setData({ options: { show: true, width: 280, title: '换行显示换行显示换行显示换行显示换行显示' } })
    },
    toastFn3() {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.setData({ options: { show: true, title: '连续提示' + i } })
            }, 1000 * i)
        }
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui',
            path: '/pages/toast/toast',
        }
    },
})
