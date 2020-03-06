//index.js
//获取应用实例
Page({
    data: {
        treeData: [{
            text: 'Node1',
            value: '0-0',
            id: '0-0',
            children: [{
                text: 'Node1 Child1',
                value: '0-0-1',
                id: '0-0-1',
                disabled: true,
            }, {
                text: 'Node1 Child2',
                value: '0-0-2',
                id: '0-0-2',
            }, {
                text: 'Node1 Child3',
                value: '0-0-3',
                id: '0-0-3',
            }, {
                text: 'Node1 Child4',
                value: '0-0-4',
                id: '0-0-4',
            }],
        }, {
            text: 'Node2',
            value: '0-1',
            disabled: true,
            id: '0-1',
            children: [{
                text: 'Child 2 fadfadfsa',
                value: '0-0-1',
                id: '0-0-1',
            }, {
                text: 'Child Node2 fdsafsad',
                value: '0-0-2',
                id: '0-0-2',
            }, {
                text: 'Node2 Child3',
                value: '0-0-3',
                id: '0-0-3',
            }, {
                text: 'Node2 Child4',
                value: '0-0-4',
                id: '0-0-4',
            }],
        }, {
            text: 'Node3',
            value: '0-2',
            id: '0-2',
            children: [{
                text: 'Node3 Child1',
                value: '0-2-1',
                id: '0-2-1',
            }, {
                text: 'Node3 Child2',
                value: '0-2-2',
                id: '0-2-2',
            }, {
                text: 'Node3 Child3',
                value: '0-2-3',
                id: '0-2-3',
            }, {
                text: 'Node3 Child4',
                value: '0-2-4',
                id: '0-2-4',
            }],
        }, {
            text: 'Node4',
            value: '0-3',
            id: '0-3',
            children: [{
                text: 'Node4 Child1',
                value: '0-3-1',
                id: '0-3-1',
            }, {
                text: 'Node4 Child2',
                value: '0-3-2',
                id: '0-3-2',
            }, {
                text: 'Node4 Child3',
                value: '0-3-3',
                id: '0-3-3',
            }, {
                text: 'Node4 Child4',
                value: '0-3-4',
                id: '0-3-4',
            }],
        }],
        diy: [{
            text: '自定义右侧',
            value: '0-0',
            id: '0-0',
        }],
        defaultIds: ['0-0-4', '0-0-2']
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui TreeSelect 树形选择',
            path: '/pages/treeSelect/treeSelect',
        }
    },
})
