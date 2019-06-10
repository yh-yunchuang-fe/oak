import BasicBehavior from 'Mixins/basic';
Component({
    behaviors: [BasicBehavior],
    relations: {
        '../Feeds/feeds': {
            type: 'parent', // 关联的目标节点应为父节点
            linked(target) {
                // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
            },
            linkChanged(target) {
                // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
            },
            unlinked(target) {
                // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
            },
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
