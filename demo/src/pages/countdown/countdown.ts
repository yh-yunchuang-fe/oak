//index.js
//获取应用实例

interface MyPage extends Page.PageInstance {
    data: {
        text: string;
    };
    onCallback: Function;
}

Page<Page.PageInstance, MyPage>({
    data: {
        text: ''
    },
    onCallback() {
        console.log('%c[oak-countdown]: 计数结束', 'color: yellow')
        this.setData!({ text: '计时结束' })
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Countdown 倒计时',
            path: '/pages/countdown/countdown'
        }
    }
})
