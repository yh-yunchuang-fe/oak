export const openType = Behavior({
    properties: {
        openType: {
            type: String,
            value: '',
        }
    },

    methods: {
        bindGetUserInfo(event): void {
            this.triggerEvent('getuserinfo', event.detail)
        },

        bindContact(event): void {
            this.triggerEvent('contact', event.detail)
        },

        bindGetPhoneNumber(event): void {
            this.triggerEvent('getphonenumber', event.detail)
        },

        bindError(event): void {
            this.triggerEvent('error', event.detail)
        },

        bindLaunchApp(event): void {
            this.triggerEvent('launchapp', event.detail)
        },

        bindOpenSetting(event): void {
            this.triggerEvent('opensetting', event.detail)
        },
    }
})

export default openType