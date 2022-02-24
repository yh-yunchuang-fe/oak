//index.js
//获取应用实例

Page({
    data: {
        sendText: '发送验证码',
        disabled: false,
        timer: null,
        error: true,
        errorMessage: '输入内容有误'
    },
    getCaptcha(): void {
        console.log('获取验证码')
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui',
            path: '/pages/index/index'
        }
    }
})
