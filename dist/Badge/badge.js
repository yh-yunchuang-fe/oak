import BasicBehavior from '../mixins/basic';
Component({
    behaviors: [BasicBehavior],
    properties: {
        count: {
            type: Number,
            value: 0,
            optionalTypes: [String],
        },
        overflowCount: {
            type: Number,
            value: 99,
            optionalTypes: [String],
        },
        showZero: {
            type: Boolean,
            value: false,
        },
        background: {
            type: String,
            value: ''
        },
        fontColor: {
            type: String,
            value: '',
        },
        borderColor: {
            type: String,
            value: '',
        },
        dot: {
            type: Boolean,
            value: false,
        },
    },
    data: {
        hasSlot: false
    },
    ready() {
        this.getRect('.J-oak-badge-slot')
            .then((dom) => {
            console.log(dom);
            dom.height && this.setData({
                hasSlot: true,
            });
        });
    },
    methods: {},
    externalClasses: ['badge-class',],
});
