//index.js
//获取应用实例
Page({
    data:{
        dropDownList:[{
            id: 0,
            value:'item0'
        },
        {
            id: 1,
            value:'item1'
        },
        {
            id: 2,
            value:'item2'
        },
    ]
    },
    onSelect(e: event): void {
        const { id, value = '' } = e.detail
        console.log('e', e)
        // this.setData!({
        //     showActionSheet: true,
        //     itemList: ActionMap[type],
        //     cancleTitle: cancletext,
        // })
    },
   
})
