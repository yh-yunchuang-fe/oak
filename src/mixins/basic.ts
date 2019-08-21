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
    }
})


export default BasicBehavior