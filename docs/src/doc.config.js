export default {
    navs: [{
        name: 'Oak Weui',
        components: false,
        path: '/intro',
    }, {
        name: '快速上手',
        components: false,
        path: '/querystart',
    },
    {
        name: '定制主题',
        components: false,
        path: '/theme',
    }, {
        name: '更新日志',
        components: false,
        path: '/changelog',
    }, {
        name: 'Components',
        components: true,
        list: [{
            name: '基础',
            groups: [{
                name: 'Button 按钮',
                path: '/Button',
            },{
                name: 'Icon 图标',
                path: '/Icon',
            },{
                name: 'Loading 加载',
                path: '/Loading',
            },{
                name: 'Animation 动画',
                path: '/Animation',
            }],
        }, {
            name: '展示',
            groups: [{
                name: 'Avatar 头像',
                path: '/Avatar',
            }, {
                name: 'Badge 微标',
                path: '/Badge',
            },{
                name: 'Collapse 折叠面板',
                path: '/Collapse',
            }, {
                name: 'Feeds 信息流',
                path: '/Feeds',
            }, {
                name: 'List 列表',
                path: '/List',
            },],
        }, {
            name: '反馈',
            groups: [{
                name: 'ActionSheet 菜单',
                path: '/ActionSheet',
            }, ],
        }],
    },
    ],
}