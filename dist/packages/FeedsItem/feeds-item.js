"use strict";
exports.__esModule = true;
var basic_1 = require("../mixins/basic");
Component({
    behaviors: [basic_1["default"]],
    relations: {
        '../Feeds/feeds': {
            type: 'parent',
            linked: function (target) {
                // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
            },
            linkChanged: function (target) {
                // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
            },
            unlinked: function (target) {
                // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
            }
        }
    },
    properties: {
        width: {
            type: String,
            value: '50',
            optionalTypes: [String]
        }
    }
});
