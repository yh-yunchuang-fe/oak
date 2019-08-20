import BasicBehavior from '../mixins/basic';
Component({
    behaviors: [BasicBehavior],
    properties: {
        show: {
            type: Boolean,
            value: null,
            optionalTypes: [String, Number],
            observer(newVal, oldVal) {
                this._toggleShow(newVal, oldVal);
            },
        },
        duration: {
            type: Number,
            value: 1000,
        },
        timingFunction: {
            type: String,
            value: 'ease'
        },
        name: {
            type: String,
            value: 'fadeIn',
            observer(newVal, oldVal) {
                this.preAnimationName = oldVal;
                console.log('name', newVal);
                if (this.data.show !== null)
                    return;
                if (newVal) {
                    this.setData({
                        _animationName: newVal,
                        _show: true,
                    }, this._resetClass);
                }
                else {
                    this.setData({
                        _show: false,
                    }, this._resetClass);
                }
            }
        }
    },
    methods: {
        _resetClass() {
            const { duration, name, show } = this.data;
            this.resetClassTimeOut && clearTimeout(this.resetClassTimeOut);
            this.resetClassTimeOut = setTimeout(() => {
                this.triggerEvent('onAnimationEnd', { animationName: name });
                this.setData({
                    _show: show,
                    _animationName: '',
                });
            }, duration);
        },
        _toggleShow(newVal) {
            const { name } = this.data;
            if (newVal) {
                this.setData({
                    _animationName: this.data.name,
                    _show: newVal
                }, this._resetClass);
            }
            else if (!newVal && name !== this.preAnimationName) {
                this.setData({
                    _animationName: this.data.name,
                }, this._resetClass);
            }
            else {
                this.setData({
                    _show: false,
                    _animationName: '',
                });
            }
        }
    },
    externalClasses: ['ext-class'],
});
