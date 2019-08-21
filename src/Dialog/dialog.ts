import BasicBehavior from 'Mixins/basic';
import openType from 'Mixins/open-type';

let showTimer: number;
let closeTimer: number;
Component({
    behaviors: [BasicBehavior, openType],
    properties: {
        style: {
            type: String,
            value: 'padding: 30rpx;',
        },
        //蒙层透明度
        maskStyle: {
            type: String,
            value: 'background-color: rgba(0,0,0,.7)',
        },
        //弹窗位置
        position: {
            type: String,
            value: 'center',
        },
        // 支持动画
        direction: {
            type: String,
            value: 'none',
        },
        // 新增 animationType
        animationType: {
            type: String,
            value: 'none', // none | fade | slide-up | slide-down
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
            observer(newVal:boolean) {
                newVal ? this._show() : this._hide();
            },
        },
    },
    data: {
        // 这里是一些组件内部数据
        isShowClass: 'hide',
        startClass: '',
        endClass: '',
    },
    ready() {
    },
    methods: {
        _show() {
            this.setData({
                isShowClass: '',
            });
            if ( this.data.direction === 'left' || this.data.direction === 'right' || this.data.direction === 'top' || this.data.direction === 'bottom' ) {
                this.setData({
                    startClass: this.data.direction,
                    endClass: '',
                });
                clearTimeout(showTimer);
                showTimer = setTimeout(() => {
                    this.setData({
                        startClass: '',
                        endClass: this.data.position,
                    });
                }, 100);
            } else {
                this.setData({
                    startClass: '',
                    endClass: this.data.position,
                });
            }
        },
        _hide() {
            if ( this.data.direction === 'left' || this.data.direction === 'right' || this.data.direction === 'top' || this.data.direction === 'bottom' ) {
                this.setData({
                    startClass: this.data.direction,
                    endClass: '',
                });
                clearTimeout(closeTimer)
                closeTimer = setTimeout(() => {
                    this.setData({
                        isShowClass: 'hide',
                        isShow: false,
                    });
                }, 300);
            } else {
                this.setData({
                    startClass: this.data.direction,
                    endClass: '',
                    isShowClass: 'hide',
                    isShow: false
                });
            }
        },
        _maskClick() {
            if(!this.data.maskClosable) return
            this._hide();
            this.triggerEvent('onHide', {});
        },
    },
    externalClasses: ['dialog-class'],
})
