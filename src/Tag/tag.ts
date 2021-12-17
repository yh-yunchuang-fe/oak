import BasicBehavior from 'Mixins/basic'

Component({
    behaviors: [BasicBehavior],
    properties: {
        //字体颜色
        color: {
            type: String,
            value: '#fff',
        },
        // 背景色 支持渐变
        background: {
            type: String,
            value: '#FF1A34',
        },
        // 边框颜色 默认不显示
        borderColor: {
            type: String,
            value: '#FF1A34',
        },
        // 是否空心
        plain: {
            type: Boolean,
            value: false,
        },
        // 前后图标 支持图片
        icon: {
            type: String,
            value: null,
        },
        //图标 位置
        iconPosition: {
            type: String,
            value: 'left', // left | right
        },
        //图标 样式
        iconStyle: {
            type: String,
            value: '', 
        },
        // 圆角
        radius: {
            type: String,
            value: '',
        },

        disabled:{
            type: Boolean,
            value: false,
        }
    },
    methods: {
        _setStyle(): void {
            const { color, textColor, plain, borderColor } = this.data
            let _style = ''
            const colorRegx = /^(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\))/i

            if (plain) {
                _style = `;border: 2rpx solid ${color};`
                !textColor && (_style += `;color: ${color};`)
            } else if (colorRegx.test(color)) {
                const regx = /^#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}/i

                if (regx.test(color)) {
                    const colorArray: string[] = color.split(',')
                    _style += colorArray.length === 2 ? `;background:linear-gradient(${this.data.rotate}deg, ${colorArray[0]}, ${colorArray[1]});` : `;background:${colorArray[0]};`
                } else {
                    _style += `;background:${color};`
                }

                !textColor && (_style += ';color: #fff;')
            }

            if (textColor) {
                _style += `;color: ${textColor};`
            }

            if (borderColor) {
                _style += `;border: 2rpx solid ${borderColor};`
            }

            this.setData({
                _style,
            })
        }
    },
    externalClasses: ['custom-class', 'before-class', 'after-class'],
})
