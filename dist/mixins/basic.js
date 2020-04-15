export const BasicBehavior = Behavior({
    methods: {
        getRect(selector, all) {
            return new Promise((resolve) => {
                wx.createSelectorQuery()
                    .in(this)[all ? 'selectAll' : 'select'](selector)
                    .boundingClientRect((rect) => {
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
        isiPhoneXUp() {
            const model = wx.getSystemInfoSync().model;
            return !(/iPhone\s+{4|5|6|7|8}/g.test(model));
        }
    }
});
export default BasicBehavior;
