//index.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>();

Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },
    onLoad() {
        
    },
})
