export const BasicBehavior = Behavior({
    methods: {
        getRect(selector: string, all?: boolean): Promise<object> {
            return new Promise((resolve): void => {
                wx.createSelectorQuery()
                    .in(this)
                    [all ? 'selectAll' : 'select'](selector)
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

            return (
                /iphone\sx/i.test(model) ||
                (/iphone/i.test(model) && /unknown/.test(model)) ||
                /iphone\s11/i.test(model)
            )
        }
    }
})

export default BasicBehavior
