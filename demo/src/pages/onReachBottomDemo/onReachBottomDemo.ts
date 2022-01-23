//index.js
//获取应用实例
Page({
    data: {
        array: [0,1,2,3,4,5,6,7],
        controll: 1,
    },
    // onreachbottom写成什么都可以，但不要写成onReachBottom要不然会和小程序页面自带的勾子冲突！！
    onreachbottom(): void {
        if(this.data.controll > 8) return
        console.log('resqq ',this.data.controll)
        this.data.controll++
        this.setData!({
            array: [
                ...this.data.array,
                10,
                20
            ]
        })
    }
})
