'use strict';
let systemInfo;
let systemPlatform;
export const isAndroid = () => {
    return /android/ig.test(systemInfo.system);
};
export const isIos = () => {
    return (/iOS/ig).test(systemInfo.system);
};
export const isIPhoneXUp = () => {
    if (!isIos())
        return false;
    return (systemInfo.safeArea || {}).top >= 44 || systemInfo.statusBarHeight >= 44;
};
class ToySystemInfo {
    constructor() {
        this.getSystemInfo = () => {
            if (systemInfo)
                return systemInfo;
            systemInfo = wx.getSystemInfoSync();
            return systemInfo;
        };
        this.isAndroid = isAndroid;
        this.isIos = isIos;
        this.isIPhoneXUp = isIPhoneXUp;
        this.getSystemInfo();
    }
}
const toySystemInfo = () => {
    if (systemPlatform)
        return systemPlatform;
    systemPlatform = Object.assign(new ToySystemInfo(), systemInfo);
    return systemPlatform;
};
export default toySystemInfo();
