//index.js
//获取应用实例

Page({
    data: {
        
    },
    onChange(e: object): void {
        console.log('change', e)
    },
    onFocus(e: object): void {
        console.log('focus', e)
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui',
            path: '/pages/index/index'
        }
    }
})
