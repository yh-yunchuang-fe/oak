export const BasicBehavior = Behavior({
    methods: {
        getRect(selector: string, all?: boolean): Promise<object> {
            return new Promise((resolve): void => {
                wx.createSelectorQuery()
                    .in(this)[all ? 'selectAll' : 'select'](selector)
                    .boundingClientRect((rect: object): void => {
                        if (all && Array.isArray(rect) && rect.length) {
                            resolve(rect)
                        }
                        if (!all && rect) {
                            resolve(rect)
                        }
                    })
                    .exec()
            })
        },
        isiPhoneXUp(): boolean {
            const model = wx.getSystemInfoSync().model
            return !(/iPhone\s+{4|5|6|7|8}/g.test(model))
        },
        rpxToPx(str: string, minus?: boolean): number {
            let reg
            const systemInfo = wx.getSystemInfoSync()
            const screenK = systemInfo.screenWidth / 750
            if (minus) {
                reg = /^-?[0-9]+([.]{1}[0-9]+){0,1}(rpx|px)$/g
            } else {
                reg = /^[0-9]+([.]{1}[0-9]+){0,1}(rpx|px)$/g
            }
            const results = reg.exec(str)
            if (!str || !results) {
                console.error(`The size: ${str} is illegal`)
                return 0
            }
            const unit = results[2]
            const value = parseFloat(str)

            let res = 0
            if (unit === 'rpx') {
                res = Math.round(value * screenK)
            } else if (unit === 'px') {
                res = value
            }
            return res
        }
    }
})

export default BasicBehavior
