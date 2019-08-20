import BasicBehavior from 'Mixins/basic'
Component({
    behaviors: [BasicBehavior],
    relations: {
        '../Feeds/feeds': {
            type: 'parent', // 关联的目标节点应为父节点
        },
    },
    properties: {
        width: {
            type: String,
            value: '50',
            optionalTypes: [String],
        }
    },
})
