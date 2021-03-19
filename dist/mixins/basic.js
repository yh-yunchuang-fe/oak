function compareVersion(v1, v2) {
    v1 = v1.split('.');
    v2 = v2.split('.');
    const len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
        v1.push('0');
    }
    while (v2.length < len) {
        v2.push('0');
    }
    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i]);
        const num2 = parseInt(v2[i]);
        if (num1 > num2) {
            return 1;
        }
        else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
}
function useWebp() {
    const info = wx.getSystemInfoSync();
    const SDKVersion = info.SDKVersion;
    return compareVersion(SDKVersion, '2.9.0') >= 0;
}
export const BasicBehavior = Behavior({
    data: {
        useWebp: useWebp(),
        pixelRatio: wx.getSystemInfoSync().pixelRatio
    },
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
        },
        rpxToPx(str, minus) {
            let reg;
            const systemInfo = wx.getSystemInfoSync();
            const screenK = systemInfo.screenWidth / 750;
            if (minus) {
                reg = /^-?[0-9]+([.]{1}[0-9]+){0,1}(rpx|px)$/g;
            }
            else {
                reg = /^[0-9]+([.]{1}[0-9]+){0,1}(rpx|px)$/g;
            }
            const results = reg.exec(str);
            if (!str || !results) {
                console.error(`The size: ${str} is illegal`);
                return 0;
            }
            const unit = results[2];
            const value = parseFloat(str);
            let res = 0;
            if (unit === 'rpx') {
                res = Math.round(value * screenK);
            }
            else if (unit === 'px') {
                res = value;
            }
            return res;
        }
    }
});
export default BasicBehavior;
