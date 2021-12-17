//index.js
//获取应用实例
Page({
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui List 列表',
            path: '/pages/list/list',
        }
    },
    data: {
        checked1: false,
        checked2: false,
    },
    onCheckbox1(): void{
        this.setData!({
            checked1: !this.data.checked1
        })
    },
    onCheckbox2(): void{
        this.setData!({
            checked2: !this.data.checked2
        })
    },
})
