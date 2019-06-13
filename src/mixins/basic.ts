export const BasicBehavior = Behavior({
    methods: {
        getRect(selector: string, all: boolean) {
            return new Promise(resolve => {
                wx.createSelectorQuery()
                    .in(this)[all ? 'selectAll' : 'select'](selector)
                    .boundingClientRect((rect: object) => {
                        if (all && Array.isArray(rect) && rect.length) {
                            resolve(rect);
                        }

                        if (!all && rect) {
                            resolve(rect);
                        }
                    })
                    .exec();
            });
        },
    }
});


export default BasicBehavior;