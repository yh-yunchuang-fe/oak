export const openType = Behavior({
    properties: {
        openType: {
            type: String,
            value: '',
        }
    },
    methods: {
        bindGetUserInfo(event) {
            this.triggerEvent('bindgetuserinfo', event.detail);
        },
        bindContact(event) {
            this.triggerEvent('bindcontact', event.detail);
        },
        bindGetPhoneNumber(event) {
            this.triggerEvent('bindgetphonenumber', event.detail);
        },
        bindError(event) {
            this.triggerEvent('binderror', event.detail);
        },
        bindLaunchApp(event) {
            this.triggerEvent('bindlaunchapp', event.detail);
        },
        bindOpenSetting(event) {
            this.triggerEvent('bindopensetting', event.detail);
        },
    }
});
export default openType;
