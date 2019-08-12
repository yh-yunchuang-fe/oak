import BasicBehavior from '../mixins/basic';
Component({
    behaviors: [BasicBehavior],
    properties: {
        icon: {
            type: String,
            value: '',
        },
        shape: {
            type: String,
            value: 'circle',
        },
        size: {
            type: String,
            value: 'default',
        },
        src: {
            type: String,
            value: '',
        },
        alt: {
            type: String,
            value: '',
        },
        color: {
            type: String,
            value: '',
        },
        background: {
            type: String,
            value: '',
        }
    },
    methods: {
        onError() {
            this.triggerEvent('onError');
            this.setData({
                _alt: this.data.alt,
            });
        }
    },
    externalClasses: ['ext-class'],
});
