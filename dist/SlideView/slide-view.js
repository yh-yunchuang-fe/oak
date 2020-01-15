import BasicBehavior from '../mixins/basic';
Component({
    options: {
        multipleSlots: true
    },
    behaviors: [BasicBehavior],
    properties: {
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
        type: {
            type: String,
            value: 'text',
            optionalTypes: [String]
        }
    },
    attached() {
        this.touchStartTime = 0;
        this.lastTouchTime = 0;
        this.x1, this.y1, this.x2, this.y2;
        this.touchDelay;
        this.longTap;
        this.isActive = false;
        this.eventMark = null;
        this.draging = false;
        this.position = 'Right';
        this.transition = 'transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);';
        const { rightWidth, custom, share, edit, del } = this.data;
        const width = custom ? rightWidth : (share + edit + del) * 80;
        this.setData({ width });
    },
    data: {
        offsetX: 0,
        transition: '',
        width: 160
    },
    externalClasses: ['icon-class'],
    methods: {
        touchstart(e) {
            console.log('[Toucher.touchstart]', e.touches);
            if (!e.touches)
                return;
            this.eventMark = e;
            this.x1 = e.touches[0].pageX;
            this.y1 = e.touches[0].pageY;
            this.x2 = e.touches[0].pageX;
            this.y2 = e.touches[0].pageY;
            this.isActive = true;
            this.touchStartTime = new Date().getTime();
            this.triggerEvent('onSwipeStart', e);
            clearTimeout(this.longTap);
            this.longTap = setTimeout(() => {
                console.log('[Toucher.touchstart]', e.touches);
                this._actionOver(e);
                this.triggerEvent('onLongTap', e);
            }, 500);
            this.draging = true;
            this.setData({ transition: '' });
        },
        touchmove(e) {
            if (!e.touches)
                return;
            e.plugStartPosition = {
                pageX: this.x1,
                pageY: this.y1
            };
            this.eventMark = e;
            this.triggerEvent('onSwipe', e);
            if (!this.isActive) {
                return;
            }
            this.x2 = e.touches[0].pageX;
            this.y2 = e.touches[0].pageY;
            clearTimeout(this.longTap);
            let offsetX = this.x2 - this.x1;
            let { width: rightWidth } = this.data;
            if (this.position === 'Down' || this.position === 'Up') {
                return;
            }
            if (this.position === 'Right') {
                offsetX = offsetX > 0 ? 0 : offsetX;
                offsetX = offsetX < -rightWidth ? -rightWidth : offsetX;
            }
            else {
                offsetX = offsetX - rightWidth < 0 ? offsetX - rightWidth : offsetX;
                offsetX = offsetX > 0 ? 0 : offsetX;
            }
            if (Math.abs(offsetX) > rightWidth)
                return;
            this.setData({ offsetX });
        },
        touchend(e) {
            e.plugStartPosition = this.eventMark.plugStartPosition;
            e.plugTouches = this.eventMark.touches;
            console.log('[Toucher.touchend]', e, Math.abs(this.x1 - this.x2) > 5 ||
                Math.abs(this.y1 - this.y2) > 5, this.isActive);
            this.triggerEvent('onSwipeEnd', e);
            if (!this.isActive) {
                return;
            }
            const now = new Date().getTime();
            let { width: rightWidth } = this.data;
            if (Math.abs(this.x1 - this.x2) > 0 ||
                Math.abs(this.y1 - this.y2) > 0) {
                const direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
                this.triggerEvent(`onSwipe${direction}`, e);
                this._actionOver(e);
                let { offsetX } = this.data;
                offsetX = direction === 'Left' ? -rightWidth : 0;
                this.position = direction;
                this.setData({
                    offsetX,
                    transition: this.transition
                });
            }
            else if (now - this.lastTouchTime > rightWidth) {
                this.touchDelay = setTimeout(() => {
                    this.isSingleTap();
                }, 190);
            }
            else {
                clearTimeout(this.touchDelay);
                this._actionOver(e);
                this.triggerEvent('onDoubleTap', this.eventMark);
            }
            this.lastTouchTime = now;
            this.draging = false;
        },
        isSingleTap() {
            this._actionOver();
            this.triggerEvent('onTap', this.eventMark);
        },
        _actionOver() {
            this.isActive = false;
            clearTimeout(this.touchDelay);
        },
        _swipeDirection(x1, x2, y1, y2) {
            return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
                ? x1 - x2 > 0 ? 'Left' : 'Right'
                : y1 - y2 > 0 ? 'Up' : 'Down';
        },
        _swipeMove(offset = 0) {
            console.log(offset);
        },
        _swipeLeave() { },
        _cancel() {
            this.setData({
                offsetX: 0,
                transition: this.transition
            });
        },
        onShare() {
            this._cancel();
            this.triggerEvent('share');
        },
        onEdit() {
            this._cancel();
            this.triggerEvent('edit');
        },
        onDelete() {
            this._cancel();
            this.triggerEvent('delete');
        }
    }
});
