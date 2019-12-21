//index.js
Page({
    data: {
        value: 5,
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Steps',
            path: '/pages/steps/steps',
        }
    },
})
