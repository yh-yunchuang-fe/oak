import BasicBehavior from 'Mixins/basic';
import openType from 'Mixins/open-type';

let showTimer : number;
let closeTimer : number;
Component({
    behaviors: [
        BasicBehavior,
        openType
    ],
    properties: {
        dialogStyle: {
            type: String,
            value: 'padding: 30rpx;'
        },
        //蒙层透明度
        maskStyle: {
            type: String,
            value: 'background-color: rgba(0,0,0,.7);'
        },
        // 新增 animationType
        animationType: {
            type: String,
            value: 'none', // 'none' , 'fadeIn', 'fadeInDown', 'fadeInUp', 'fadeInLeft', 'fadeInRight', 'slideInUp', 'slideInDown', 'slideInRight', 'slideInLeft'
        },
        // 新增 动画持续时间
        duration: {
            type: Number,
            value: 300, // 300ms
        },
        // 新增 点击蒙层是否关闭
        maskClosable: {
            type: Boolean,
            value: true, // 300ms
        },
        isShow: {
            type: Boolean,
            value: false,
            observer(newVal : boolean) {
                newVal ? this._show() : this._hide();
            }
        }
    },
    data: {
        // 这里是一些组件内部数据
        isShowClass: 'hide',
        startClass: '',
        endClass: '',
        originalAniType: '',
        animateMap: {
            fadeIn: 'fadeOut',
            fadeInDown: 'fadeOutUp',
            fadeInUp: 'fadeOutDown',
            fadeInLeft: 'fadeOutLeft',
            fadeInRight: 'fadeOutRight',
            slideInUp: 'slideOutDown',
            slideInDown: 'slideOutUp',
            slideInRight: 'slideOutRight',
            slideInLeft: 'slideOutLeft'
        }
    },
    ready() {},
    methods: {
        _show() {
            this.setData({isShowClass: '', isShow: true});
            if(!this.data.animateMap[this.data.animationType]) return
            showTimer = setTimeout(() => {
                this.setData({
                    originalAniType: this.data.animationType || 'none',
                    animationType: this.data.animateMap[this.data.animationType] || 'none'
                });
                clearTimeout(showTimer)
            }, this.data.duration);
        },
        _hide() {
            this.setData({isShow: false});
            if(!this.data.originalAniType) {
                this.setData({
                    isShowClass: 'hide',
                });
                return
            }
            closeTimer = setTimeout(() => {
                this.setData({
                    animationType: this.data.originalAniType || 'none',
                    isShowClass: 'hide',
                    originalAniType: ''
                });
                clearTimeout(closeTimer)
            }, this.data.duration / 2);
        },
        animationEnd(e: any) {
            console.log('thisend', e.detail.animationName)
        },
        _maskClick() {
            if (!this.data.maskClosable) 
                return
            this._hide();
            this.triggerEvent('onHide', {});
        }
    },
    externalClasses: ['dialog-class']
})
