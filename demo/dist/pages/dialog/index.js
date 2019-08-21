"use strict";
Page({
    data: {
        showDefaultModel: false,
        showTopModel: false,
        showCModel: false,
        showBModel: false,
        message: '',
    },
    onLoad() {
    },
    openDefault() {
        this.setData({
            showDefaultModel: true
        });
    },
    opentop() {
        this.setData({
            showTModel: true,
        });
    },
    openbottom() {
        this.setData({
            showBModel: true
        });
    },
    openCenter() {
        this.setData({
            showCModel: true
        });
    }
});
