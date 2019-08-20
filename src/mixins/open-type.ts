export const openType = Behavior({
    properties: {
        openType: {
            type: String,
            value: '',
        }
    },

    methods: {
        bindGetUserInfo(event): void {
            this.triggerEvent('bindgetuserinfo', event.detail)
        },

        bindContact(event): void {
            this.triggerEvent('bindcontact', event.detail)
        },

        bindGetPhoneNumber(event): void {
            this.triggerEvent('bindgetphonenumber', event.detail)
        },

        bindError(event): void {
            this.triggerEvent('binderror', event.detail)
        },

        bindLaunchApp(event): void {
            this.triggerEvent('bindlaunchapp', event.detail)
        },

        bindOpenSetting(event): void {
            this.triggerEvent('bindopensetting', event.detail)
        },
    }
})

export default openType