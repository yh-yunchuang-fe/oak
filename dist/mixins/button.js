export const button = Behavior({
    properties: {
        lang: {
            type: String,
            value: 'en',
            optionalTypes: [String],
        },
        sessionFrom: {
            type: String,
            value: ''
        },
        sendMessageTitle: {
            type: String,
            value: ''
        },
        sendMessagePath: {
            type: String,
            value: ''
        },
        sendMessageImg: {
            type: String,
            value: ''
        },
        showMessageCard: {
            type: Boolean,
            value: false,
        },
        appParameter: {
            type: String,
            value: ''
        },
    },
});
export default button;
