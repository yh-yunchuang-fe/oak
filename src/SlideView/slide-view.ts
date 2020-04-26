import BasicBehavior from 'Mixins/basic'

Component({
    options: {
        multipleSlots: true
    },
    behaviors: [BasicBehavior],
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        share: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean]
        },
        edit: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean]
        },
        del: {
            type: Boolean,
            value: true,
            optionalTypes: [Boolean]
        },
        rightWidth: {
            type: Number,
            value: 80,
            optionalTypes: [Number]
        },
        custom: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean]
        },
        // async: {
        //     type: Boolean,
        //     value: false,
        //     optionalTypes: [Boolean]
        // },
        type: {
            type: String,
            value: 'text', // text、oak icon
            optionalTypes: [String]
        }
    },
    attached(): void {
        // 轻击开始时间
        this.touchStartTime = 0

        // 记录上一次点击时间
        this.lastTouchTime = 0

        // 记录初始轻击的位置
        this.x1, this.y1, this.x2, this.y2

        // 轻击事件的延时器
        this.touchDelay
        this.longTap

        // 记录当前事件是否已为等待结束的状态
        this.isActive = false
        // 记录有坐标信息的事件
        this.eventMark = null

        this.draging = false
        this.position = 'Right' // 'Left'
        // 过渡效果
        this.transition = 'transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);'

        // 初始化 right width
        const { rightWidth, custom, share, edit, del } = this.data
        const width = custom ? rightWidth : (share + edit + del) * 80
        this.setData({ width })
    },

    data: {
        // 这里是一些组件内部数据
        offsetX: 0,
        transition: '',
        width: 160
    },
    externalClasses: ['icon-class'],
    methods: {
        // 这里是一个自定义方法
        touchstart(e): void {
            console.log('[Toucher.touchstart]', e.touches)
            if (!e.touches) return
            // 缓存事件
            this.eventMark = e
            this.x1 = e.touches[0].pageX
            this.y1 = e.touches[0].pageY
            this.x2 = e.touches[0].pageX
            this.y2 = e.touches[0].pageY
            this.isActive = true
            this.touchStartTime = new Date().getTime()

            this.triggerEvent('onSwipeStart', e)

            clearTimeout(this.longTap)

            this.longTap = setTimeout((): void => {
                console.log('[Toucher.touchstart]', e.touches)
                this._actionOver(e)
                // 断定此次事件为长按事件
                this.triggerEvent('onLongTap', e)
            }, 500)

            this.draging = true
            this.setData({ transition: '' })
        },

        touchmove(e): void {
            if (!e.touches) return
            // 缓存事件
            // 在原生事件基础上记录初始位置（为swipe事件增加参数传递）
            e.plugStartPosition = {
                pageX: this.x1,
                pageY: this.y1
            }
            this.eventMark = e

            // 断定此次事件为移动事件
            this.triggerEvent('onSwipe', e)

            if (!this.isActive) {
                return
            }
            this.x2 = e.touches[0].pageX
            this.y2 = e.touches[0].pageY

            clearTimeout(this.longTap)

            // 设置偏移量
            let offsetX = this.x2 - this.x1
            let { width: rightWidth } = this.data
            if (this.position === 'Down' || this.position === 'Up') {
                return
            }

            if (this.position === 'Right') {
                offsetX = offsetX > 0 ? 0 : offsetX
                offsetX = offsetX < -rightWidth ? -rightWidth : offsetX
            } else {
                offsetX = offsetX - rightWidth < 0 ? offsetX - rightWidth : offsetX
                offsetX = offsetX > 0 ? 0 : offsetX
            }

            if (Math.abs(offsetX) > rightWidth) return

            this.setData({ offsetX })
        },

        touchend(e): void {
            // touchend中，拿不到坐标位置信息，故使用全局保存下数据
            e.plugStartPosition = this.eventMark.plugStartPosition
            e.plugTouches = this.eventMark.touches
            console.log(
                '[Toucher.touchend]',
                e,
                Math.abs(this.x1 - this.x2) > 5 ||
                Math.abs(this.y1 - this.y2) > 5,
                this.isActive
            )
            this.triggerEvent('onSwipeEnd', e)
            if (!this.isActive) {
                return
            }
            const now: number = new Date().getTime()
            let { width: rightWidth } = this.data
            if (
                Math.abs(this.x1 - this.x2) > 0 ||
                Math.abs(this.y1 - this.y2) > 0
            ) {
                // 断定此次事件为移动手势
                const direction = this._swipeDirection(
                    this.x1,
                    this.x2,
                    this.y1,
                    this.y2
                )
                this.triggerEvent(`onSwipe${direction}`, e)
                this._actionOver(e)

                let { offsetX } = this.data

                offsetX = direction === 'Left' ? -rightWidth : 0

                this.position = direction
                this.setData({
                    offsetX,
                    transition: this.transition
                })
            } else if (now - this.lastTouchTime > rightWidth) {
                // 延迟响应
                this.touchDelay = setTimeout((): void => {
                    this.isSingleTap()
                }, 190)
            } else {
                clearTimeout(this.touchDelay)
                this._actionOver(e)
                // 断定此次事件为连续两次轻击事件
                this.triggerEvent('onDoubleTap', this.eventMark)
            }

            this.lastTouchTime = now

            this.draging = false
        },

        isSingleTap(): void {
            this._actionOver()
            this.triggerEvent('onTap', this.eventMark)
        },

        _actionOver(): void {
            this.isActive = false
            clearTimeout(this.touchDelay)
        },

        _swipeDirection(x1, x2, y1, y2): string {
            // eslint-disable-next-line no-nested-ternary
            return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
                ? x1 - x2 > 0 ? 'Left' : 'Right'
                : y1 - y2 > 0 ? 'Up' : 'Down'
        },

        _swipeMove(offset: number = 0): void {
            console.log(offset)
        },

        _cancel(): void {
            this.setData({
                offsetX: 0,
                transition: this.transition
            })
        },

        onShare(): void {
            this._cancel()
            this.triggerEvent('share')
        },

        onEdit(): void {
            this._cancel()
            this.triggerEvent('edit')
        },

        onDelete(): void {
            this._cancel()
            this.triggerEvent('delete')
        }
    }
})
