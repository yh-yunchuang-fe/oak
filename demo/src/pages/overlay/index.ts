//index.js
//获取应用实例
Page({
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Image 组件',
            path: '/pages/Overlay/overlay',
        }
    },
    data: {
        show1: false,
        img1: 'https://image.yonghuivip.com/image/1638171083730b3ecb3b5f0885edd7f5a7b5310c89568a9253633.jpg',
    },
    handleShow1(): void{
        this.setData!({ show1: true })
    }
})
