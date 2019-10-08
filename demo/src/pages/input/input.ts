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
    sendCode() {
        console.log('发送验证码')

        let time = 60
        let timer: any = null
        this.setData!({ sendText: `已发送 ${time}`, disabled: true })
        timer = setInterval(() => {
            time--
            if (time === 0) {
                this.setData!({ sendText: '发送验证码', disabled: false })
                clearInterval(timer)
                timer = null
                return
            }
            this.setData!({ sendText: `已发送 ${time}` })
        }, 1000)
    },
    focus() {
        console.log('focus')
    },
    change(e: any) {
        let {
            detail: { detail }
        } = e
        console.log('password：', detail)
    },
    blur() {
        console.log('blur')
    },
    confirm() {
        console.log('confirm')
    },
    keyboardheightchange() {
        console.log('keyboardheightchange')
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui',
            path: '/pages/index/index'
        }
    }
})
