import BasicBehavior from '../mixins/basic'

/* eslint-disable */
enum DateFormat {
    day = 'D+',
    hour = 'H+',
    minute = 'm+',
    second = 's+',
    millisecond = 'S+'
}
/* eslint-enable */

interface WXMLFMT {
    'D+': string | null;
    'H+': string | null;
    'm+': string | null;
    's+': string | null;
    'S+': string | null;
    YText: string | null;
    MText: string | null;
    DText: string | null;
    HText: string | null;
    mText: string | null;
    sText: string | null;
    SText: string | null;
}

interface SelfComponent {
    [propertyName: string]: WxComponent;
}

let selfComponent: SelfComponent = {}

/* eslint-disable */
Component({
    behaviors: [BasicBehavior],
    properties: {
        format: {
            type: String,
            value: 'DDDD:HH:mm:ss',
            optionalTypes: [String]
        },
        endTimestamp: {
            type: Number,
            value: 0,
            optionalTypes: [Number]
        },
        nowTimestamp: {
            type: Number,
            value: 0,
            optionalTypes: [Number]
        },
        silence: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean]
        },
        log: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean]
        }
    },
    externalClasses: ['ext-class', 'num-class', 'text-class'],
    lifetimes: {
        attached() {
            const { __wxExparserNodeId__: id } = this
            if (selfComponent[id] === this) return
            selfComponent[id] = this
            this._init()
        },
        detached() {
            Object.keys(selfComponent).map(k => {
                selfComponent[k]._clear()
            })
            selfComponent = {}
        }
    },
    pageLifetimes: {
        show() {
            Object.keys(selfComponent).map(k => {
                selfComponent[k]._init()
            })
        },
        hide() {
            Object.keys(selfComponent).map(k => {
                const { silence } = selfComponent[k].data
                if (silence) return
                selfComponent[k]._clear()
            })
        }
    },
    data: {
        _deltaTime: 0,
        _timer: null,
        WXML_FMT: null
    },
    methods: {
        _log(text, color, data = '') {
            if (!this.data.log) return
            console.log(`%c[oak-countdown]: ${text}`, `color:${color}`, data)
        },
        _number(num: number = 0) {
            if (/(^[1-9]\d*$)/.test(num + '')) {
                return num
            }
            return 0
        },
        _init() {
            if (this.data._timer) return
            this._log('_init', '#23a0ff', this)
            const { format, endTimestamp } = this.data
            const { currentTime, deltaTime } = this._getCurrentTime()
            const timestamp: number = endTimestamp - currentTime
            const WXML_FMT = this._format(format, this._number(timestamp))
            this.setData(
                { _deltaTime: deltaTime, WXML_FMT },
                this._countdown(format, timestamp, currentTime, endTimestamp)
            )
        },
        _getCurrentTime(): { currentTime: number; deltaTime: number } {
            const { nowTimestamp, _deltaTime } = this.data
            const clientTime: number = new Date().getTime()
            let currentTime: number = nowTimestamp || clientTime
            let deltaTime: number = nowTimestamp - clientTime

            if (_deltaTime > 0) {
                currentTime = clientTime + _deltaTime
                deltaTime = _deltaTime
            }

            return { currentTime, deltaTime }
        },
        _countdown(
            format: string,
            timestamp: number,
            currentTime: number,
            endTimestamp: number
        ) {
            this.data._timer = setInterval(() => {
                timestamp = this._number(timestamp - 1000)
                currentTime = currentTime + 1000
                if (currentTime >= endTimestamp) {
                    clearInterval(this.data._timer)
                    this.triggerEvent('callback')
                    return
                }
                const WXML_FMT = this._format(format, timestamp)
                this.setData({ WXML_FMT })
            }, 1000)
        },
        _getText(format: string): any {
            const match: string[] | null = format.match(
                /(?:D+([^H]))?(?:H+([^m]))?m+([^m])s+(.*)/
            )

            if (!match) {
                this._log('format error', 'red', format)
            }

            const [
                ,
                DText = '',
                HText = '',
                mText = '',
                sText = ''
            ] = match || []

            return { DText, HText, mText, sText }
        },
        _getDate(timestamp: number) {
            return {
                [DateFormat.day]: Math.floor(timestamp / 1000 / 60 / 60 / 24),
                [DateFormat.hour]: Math.floor(
                    (timestamp / 1000 / 60 / 60) % 24
                ),
                [DateFormat.minute]: Math.floor((timestamp / 1000 / 60) % 60),
                [DateFormat.second]: Math.floor((timestamp / 1000) % 60),
                [DateFormat.millisecond]: Math.floor(timestamp % 1000)
            }
        },
        _format(format: string, timestamp: number): WXMLFMT {
            let o: any = {}
            let t: any = this._getText(format)
            let d: any = this._getDate(timestamp)
            Object.keys(d).map(k => {
                if (new RegExp('(' + k + ')').test(format)) {
                    const length = RegExp.$1.length
                    const flag = length === 1 || length > 2
                    const num = ('00' + d[k]).substr(('' + d[k]).length)
                    o[k] = flag ? d[k] : num
                } else if (DateFormat.day === k) {
                    d[DateFormat.hour] += d[k] * 24
                } else if (DateFormat.hour === k) {
                    d[DateFormat.minute] += d[k] * 60
                }
            })

            return { ...o, ...t }
        },
        _clear() {
            if (this.data._timer) {
                this._log('_clear', '#23a0ff')
                clearInterval(this.data._timer)
                this.setData({ _timer: null })
            }
        }
    }
})
