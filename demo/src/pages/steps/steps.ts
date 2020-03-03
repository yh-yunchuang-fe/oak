//index.js
Page({
    data: {
        steps: [
            {slot: '123455', status: '退款成功', time: '2019-12-24 11:13', desc: '退款116.48元，将于1-3个工作日原路退回'},
            {slot: '223455', status: '退款成功', time: '2019-12-24 11:13', desc: '退款116.48元，将于1-3个工作日原路退回'},
            {slot: '233455', status: '退款成功', time: '2019-12-24 11:13', desc: '退款116.48元，将于1-3个工作日原路退回'},
            {slot: '323455', status: '退款成功', time: '2019-12-24 11:13', desc: '退款116.48元，将于1-3个工作日原路退回'},
            {slot: '323453', status: '退款成功', time: '2019-12-24 11:13', desc: '退款116.48元，将于1-3个工作日原路退回'},
        ],
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Steps',
            path: '/pages/steps/steps',
        }
    },
})
