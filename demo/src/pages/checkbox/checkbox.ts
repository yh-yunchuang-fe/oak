//index.js
//获取应用实例

Page({
    data: {
        checked: false,
        color: '#1989fa',
        icon: {
            normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
            active: 'https://img.yzcdn.cn/vant/user-active.png'
        },
        disabled: true,
        list: [
            { id: 1, value: 'a' },
            { id: 2, value: 'b' },
            { id: 3, value: 'c' },
        ],
        selected: [
            {
                id: 1,
                value: 'a'
            }
        ],
        maxSelected: []
    },
    onChange() {
        this.setData!({
            checked: !this.data.checked
        })
    },
    onChangeGroup(e: any) {
        let { detail } = e

        console.log('detail:', detail)

        this.setData!({
            selected: detail
        })
    },
    onChangeMax(e: any) {
        let { detail } = e

        console.log('max detail:', detail)

        this.setData!({
            maxSelected: detail
        })
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Checkbox 复选框',
            path: '/pages/checkbox/checkbox'
        }
    }
})
