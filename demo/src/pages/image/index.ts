//index.js
//获取应用实例
Page({
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Image 组件',
            path: '/pages/Image/image',
        }
    },
    data: {
        img1: 'https://image.yonghuivip.com/image/1638171083730b3ecb3b5f0885edd7f5a7b5310c89568a9253633.jpg',
        img2: 'https://image.yonghuivip.com/image/16303891639179b6d5ba3ae7908c8fa574c8d6b4347cac4ee0a2a.jpg',
        img3: 'http://image.yonghuivip.com/image/1638260711605a05ea34e9e8edefc273b751d482b93c330bb5748.jpg',
        errImg: 'http://image.yonghuivip.com/image/1638260711605a05ea34e9e8edefc273b751d482b93c330bb57'
    }
})
