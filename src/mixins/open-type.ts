export const openType = Behavior({
    properties: {
        openType: String
    },

    methods: {
        bindGetUserInfo(event: Partial<event.Base>) {
            this.triggerEvent('bindgetuserinfo', event.detail);
        },

        bindContact(event: Partial<event.Base>) {
            this.triggerEvent('bindcontact', event.detail);
        },

        bindGetPhoneNumber(event: Partial<event.Base>) {
            this.triggerEvent('bindgetphonenumber', event.detail);
        },

        bindError(event: Partial<event.Base>) {
            this.triggerEvent('binderror', event.detail);
        },

        bindLaunchApp(event: Partial<event.Base>) {
            this.triggerEvent('bindlaunchapp', event.detail);
        },

        bindOpenSetting(event: Partial<event.Base>) {
            this.triggerEvent('bindopensetting', event.detail);
        },
    }
});

export default openType;