'use strict'

interface SystemInfoInt {
    system: string;
    safeArea: {
        top: number;
    };
    statusBarHeight: number;
    SDKVersion: string;
    pixelRatio: number;
    model: string;
    screenWidth: number;
}
let systemInfo: SystemInfoInt
let systemPlatform: SystemInfoInt
export const isAndroid = (): boolean => {
    return /android/ig.test(systemInfo.system)
}
export const isIos = (): boolean => {
    return (/iOS/ig).test(systemInfo.system)
}
export const isIPhoneXUp = (): boolean => {
    if(!isIos()) return false
    return (systemInfo.safeArea || {}).top >= 44 || systemInfo.statusBarHeight >= 44
}
class ToySystemInfo {
    public constructor() {
        this.getSystemInfo()
    }
    public getSystemInfo = (): SystemInfoInt => {
        if(systemInfo) return systemInfo
        // @ts-ignore
        systemInfo = wx.getSystemInfoSync()
        return systemInfo
    }
    public isAndroid = isAndroid
    public isIos = isIos
    public isIPhoneXUp = isIPhoneXUp
}
const toySystemInfo = (): SystemInfoInt => {
    if(systemPlatform) return systemPlatform
    systemPlatform = Object.assign(new ToySystemInfo(), systemInfo)
    return systemPlatform
}
export default toySystemInfo()
