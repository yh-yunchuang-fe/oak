//index.js
//获取应用实例

Page({
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui default 默认页面展示',
            path: '/pages/default/index',
        }
    },
    onMainBtnClick(e: event): void {
        console.log('mainBtnClick', e)
    },
    onSubBtnClick(e: event): void {
        console.log('subBtnClick', e)
    }
})
