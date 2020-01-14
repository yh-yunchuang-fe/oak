//index.js
//获取应用实例

interface IPage extends Page.PageInstance {
    /** toast 配置 */
    data: { options: { show: boolean } };
    /** 基本用法 */
    toastFn1: Function;
    /** 换行显示 */
    toastFn2: Function;
    /** 连续提示 */
    toastFn3: Function;
    onShareAppMessage: () => { title: string; path: string };
}

Page<Page.PageInstance, IPage>({
    data: {
        options: {
            show: false,
        }
    },
    onLoad(options: any) {
        console.log(options)
    },
    toastFn1() {
        console.log('基本用法')
        this.setData!({ options: { show: true, title: '基本用法' } })
    },
    toastFn2() {
        console.log('换行显示')
        this.setData!({ options: { show: true, width: 280, title: '换行显示换行显示换行显示换行显示换行显示' } })
    },
    toastFn3() {
        console.log('连续提示')
        for (let i = 0; i <= 9; i++) {
            setTimeout(() => {
                this.setData!({ options: { show: true, title: '连续提示' + i } })
                console.log(`提示${i}`)
            }, 800 * i)
        }
    },
    onShareAppMessage() {
        return {
            title: 'Oak Weui',
            path: '/pages/toast/toast'
        }
    },
})
