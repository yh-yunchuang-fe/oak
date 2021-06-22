import { compareVersion } from '../mixins/basic'
import systemInfo from '../mixins/toy-system-info'

Component({
    properties: {
        title: {
            type: String,
            value: ''
        },
        bgColor: {
            type: String,
            value: '#fff'
        },
        pageStatusObj: {
            type: Object,
            value: {}
        }
    },
    data: {
        statusBarHeight: systemInfo.statusBarHeight,
        isiPhone: /iPhone/g.test(systemInfo.model),
        show: true
    },
    attached: function () {
        if(compareVersion('2.5.0') == -1) {
            this.setData({
                show:false
            })
        }
    },
    methods: {
        toHomePage(){
            wx.switchTab({
                url:'/pages/scanbuyhome/index'
            })
            this.triggerEvent('toHomePage')
        }
    }
})
