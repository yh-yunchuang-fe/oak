import BasicBehavior from '../mixins/basic'

Component({
    behaviors: [BasicBehavior],
    properties: {
        color: {
            type: String,
            value: 'default',
            optionalTypes: [String],
            observer(color): void {
                color && this._setStyle()
            }
        },
        rotate: {
            type: Number,
            value: 90
        },
        plain: {
            type: Boolean,
            value: false,
            optionalTypes: [String],
        },
        shape: {
            type: String,
            value: '',
        },
        textColor: {
            type: String,
            value: '',
            observer(color): void {
                color && this._setStyle()
            }
        },
        borderColor: {
            type: String,
            value: '',
            observer(color): void {
                color && this._setStyle()
            }
        },
        beforeImage: {
            type: String,
            value: null,
        },
        afterImage: {
            type: String,
            value: null,
        }
    },
    methods: {
        _setStyle(): void {
            const { color, textColor, plain, borderColor } = this.data
            let _style = ''
            const colorRegx = /^(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\))/i

            if (plain) {
                _style = `;border: 2rpx solid ${color};`
                !textColor && ( _style += `;color: ${color};`)
            } else if (colorRegx.test(color)) {
                const regx = /^#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}/i

                if (regx.test(color)) {
                    const colorArray: string[] = color.split(',')
                    _style += colorArray.length === 2 ? `;background:linear-gradient(${this.data.rotate}deg, ${colorArray[0]}, ${colorArray[1]});` : `;background:${colorArray[0]};`
                } else {
                    _style += `;background:${color};`
                }

                !textColor && ( _style += ';color: #fff;')
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
    externalClasses: ['custom-class'],
})
