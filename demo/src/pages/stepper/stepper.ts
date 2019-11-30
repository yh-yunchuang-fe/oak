//index.js
Page({
    data: {
        value: 5
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Stepper',
            path: '/pages/label/label',
        }
    },
})
