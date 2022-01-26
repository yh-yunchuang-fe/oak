//index.js
//获取应用实例
Page({
    data: {
        array: [0,1,2,3,4,5,6,7],
        controll: 1,
    },
    onReachBottom(): void {
        if(this.data.controll > 8) return
        this.data.controll++
        this.setData!({
            array: [
                ...this.data.array,
                10,20,30,40
            ]
        })
    }
})
