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
        }
    }
})

export default BasicBehavior
