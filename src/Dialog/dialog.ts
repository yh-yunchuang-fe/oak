import BasicBehavior from 'Mixins/basic'
import OpenTypeBehavior from 'Mixins/open-type'
import ButtonBehavior from 'Mixins/button'

Component({
    behaviors: [BasicBehavior, OpenTypeBehavior, ButtonBehavior],
    options: {
        multipleSlots: true
    },
    properties: {
        show: {
            type: Boolean,
            value: false,
        },
        type: {
            type: String,
            value: 'default', // default | bottom-close
        },
        closable: {
            type: Boolean,
            value: false,
        },
        maskClosable: {
            type: Boolean,
            value: true,
        },
        duration: {
            type: Number,
            value: 200,
        },
        buttons: {
            type: Array,
            value: [
                { text: '取消', type: 'cancel', },
                { text: '确认', type: 'confirm', }, //type: confirm | cancel
            ]
        },
        buttonBlock: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: '',
        },
        content: {
            type: String,
            value: '',
        },
        zIndex: {
            type: Number,
            value: 20,
        },
        confirmAsync: {
            type: Boolean,
            value: false,
        },
        /** 是否有协议 */
        isAgreement: {
            type: Boolean,
            value: false,
        },
        /** 确认时必须勾选协议 */
        confirmMustAgreement: {
            type: Boolean,
            value: false,
        },
    },
    data: {
        okLoading: false,
        agreement: false,
    },
    methods: {
        /**
         * 确认
         * @param options 
         */
        confirm(options: {}): void {
            const defaultOptions = {
                onCancel: Function,
                onConfirm: Function,
                onClose: Function,
                buttons: [
                    { text: '取消', type: 'cancel', },
                    { text: '确认', type: 'confirm', },
                ]
            }
            this.setData({
                show: true,
                ...defaultOptions,
                ...options,
            })
        },
        /**
         * 关闭
         */
        close(): void {
            this.setData({
                show: false,
            }, (): void => {
                const { onClose } = this.data
                if (typeof onClose === 'function') {
                    onClose()
                    this._resetData()
                } else {
                    this.triggerEvent('onClose')
                }
            })
        },
        /**
         * 取消
         */
        _dialogCancel(): void {
            const { onCancel } = this.data
            this.close()
            if (typeof onCancel === 'function') {
                onCancel()
                this._resetData()
            } else {
                this.triggerEvent('onCancel')
            }
        },
        /**
         * 确认
         */
        _dialogConfirm(): void {
            const { onConfirm } = this.data
            !this.data.confirmAsync && this.close()
            this.data.confirmAsync && this.setData({
                okLoading: true,
            })
            if (typeof onConfirm === 'function') {
                const close = this.close.bind(this)
                onConfirm(close)
                this._resetData()
            } else {
                this.triggerEvent('onConfirm')
            }
        },
        /**
         * 关闭后重置数据
         */
        _resetData(): void {
            clearTimeout(this.resetHandle)
            this.resetHandle = setTimeout((): void => {
                this.setData({
                    title: '',
                    content: '',
                    agreement: false,
                    okLoading: false,
                    confirmAsync: false
                })
            }, this.data.duration)
        },
        // 协议点击
        _changeAgreement(): void {
            const agreement = this.data.agreement
            this.setData({
                agreement: !agreement
            }, (): void => {
                this.triggerEvent('onAgreement', { value: !agreement })
            })
        },
    },
    externalClasses: ['dialog-class', 'title-class', 'content-class',],
})
