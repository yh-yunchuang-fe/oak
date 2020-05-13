//index.js
//获取应用实例
Page({
    data:{
        dropDownList:[{
            id: 0,
            value:'百度',
            src:'www.baidu.com'
        },
        {
            id: 1,
            value:'谷歌',
            src:'www.google.com'
        },
        {
            id: 2,
            value:'知乎',
            src:'www.zhihu.com'
        },],
        activeValue:'下拉菜单'

    },

    onSelect(e: event): void {
        const { index} = e.detail
        const { dropDownList } = this.data
        console.log('onSelect e', e)
        this.setData!({
            activeValue: dropDownList[index].value
        })
        wx.showToast({
            title: dropDownList[index].value,
            icon: 'none',
        })
    },

    onHrefSelect(e: event): void {
        const { index} = e.detail
        const { dropDownList } = this.data
        console.log('onHrefSelect e', e)
        this.setData!({
            activeValue: dropDownList[index].value
        })
        wx.showToast({
            title: dropDownList[index].value,
            icon: 'none',
        })
        // window.location.href= dropDownList[index].src 
    },
   
})
