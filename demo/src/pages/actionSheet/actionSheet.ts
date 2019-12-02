//index.js
//获取应用实例
const ActionMap: { [key: string]: { [key: string]: string | boolean | number }[] } = {
    base: [{
        title: '选项1',
    }, {
        title: '选项2',
    }, {
        title: '选项3',
        subtitle: '描述信息'
    }],
    cancle: [{
        title: '选项1',
    }, {
        title: '选项2',
    }, {
        title: '选项3',
        subtitle: '描述信息'
    }],
    diy: [{
        title: '可以用icon',
        icon: 'brush'
    }, {
        title: '禁用状态',
        disabled: true,
    }, {
        subtitle: '加载中..',
        loading: true,
        loaderColor: '#ccc'
    }, {
        title: '字体颜色',
        subtitle: '描述文字颜色',
        color: '#12B7F5',
        subcolor: '#FD7622'
    }],
    openType: [{
        title: '分享(share)',
        openType: 'share'
    }, {
        title: '打开客服会话(contact)',
        openType: 'contact'
    }, {
        title: '获取用户手机号，(getPhoneNumber)',
        openType: 'getPhoneNumber'
    }, {
        title: '获取用户信息(getUserInfo)',
        openType: 'getUserInfo'
    }, {
        title: '打开APP(launchApp)',
        openType: 'launchApp'
    }, {
        title: '授权设置页(openSetting)',
        openType: 'openSetting'
    }, {
        title: '意见反馈(feedback)',
        openType: 'feedback'
    },]
}
Page({
    data: {
        showActionSheet: false,
        itemList: [],
        cancleTitle: ''
    },
    onActionSheet(e: event): void {
        const { type, cancletext = '' } = e.currentTarget.dataset
        console.log(e)
        this.setData!({
            showActionSheet: true,
            itemList: ActionMap[type],
            cancleTitle: cancletext,
        })
    },
    onClose(): void {
        this.setData!({
            showActionSheet: false,
        })
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui',
            path: '/pages/index/index',
        }
    },
    onSelect(e: { detail: { index: number } }): void {
        const { index } = e.detail
        const { itemList } = this.data
        const item: { disabled: boolean; title: string } = itemList[index]
        if (item.disabled) return
        wx.showToast({
            title: item.title,
            icon: 'none',
        })
        this.onClose()
    },
    bindgetuserinfo(event: wx.GetUserInfoCompleteCallback): void {
        console.log(event)
    }
})
