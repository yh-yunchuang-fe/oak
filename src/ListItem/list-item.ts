import BasicBehavior from 'Mixins/basic'

declare interface Icon {
    name?: string;
    color?: string;
    size?: string;
}

Component({
    behaviors: [BasicBehavior],
    options: {
        multipleSlots: true,
    },
    properties: {
        title: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        subTitle: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        titleDirection:{
            type: String,
            value: 'vertical',// horizontal vertical
        },
        content: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        border: {
            type: Boolean,
            value: true,
            optionalTypes: [Boolean],
        },
        
        image: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        imgWidth: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        imgHeight: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        icon: {
            type: String,
            value: 'right-light',
        },
        iconSize:{
            type: String,
            value: '',
        },
        showIcon:{
            type: Boolean,
            value: true,
        },
        navigate:{
            type: String,
            value: '',
        }
    },
    externalClasses: ['title-class', 'ext-class', 'subtitle-class', 'cnt-class', 'body-class', 'label-class'],
})
