//index.js
//获取应用实例
Page({
    data: {
        treeData: [{
            label: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [{
                label: 'Node1 Child1',
                value: '0-0-1',
                key: '0-0-1',
                disabled: true,
            }, {
                label: 'Node1 Child2',
                value: '0-0-2',
                key: '0-0-2',
            }],
        }, {
            label: 'Node2',
            value: '0-0',
            disabled: true,
            key: '0-0',
            children: [{
                label: 'Child 2 fadfadfsa',
                value: '0-0-1',
                key: '0-0-1',
            }, {
                label: 'Child Node2 fdsafsad',
                value: '0-0-2',
                key: '0-0-2',
            }],
        }, {
            label: 'Node3',
            value: '0-0',
            key: '0-0',
            children: [{
                label: 'Child Node1 fadsfadsfdas',
                value: '0-0-1',
                key: '0-0-1',
            }, {
                label: 'Child Node2 wwwww',
                value: '0-0-2',
                key: '0-0-2',
            }],
        }],
    },
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui',
            path: '/pages/index/index',
        }
    },
})
