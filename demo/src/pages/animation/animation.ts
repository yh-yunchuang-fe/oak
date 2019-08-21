//index.js
//获取应用实例
Page({
    data: {
        array: ['fadeIn', 'fadeInDown', 'fadeInUp', 'fadeInLeft', 'fadeInRight', 'fadeOut', 'fadeOutLeft', 'fadeOutRight', 'fadeOutUp', 'fadeOutDown', 'slideInUp', 'slideInDown', 'slideInRight', 'slideInLeft', 'slideOutLeft', 'slideOutRight', 'slideOutUp', 'slideOutDown'],
        index: 0,
        show: false,
    },
    bindPickerChange(e: { detail: { value: string } }): void {
        const index = parseInt(e.detail.value)
        setTimeout((): void => {
            this.setData!({
                index,
                show: +new Date(),
            })
        }, 400)

    },
    onReady(): void {
        this.setData!({
            show: true,
        })
    },
})
