export default {
    navs: [{
            name: 'Oak UI',
            components: false,
            path: '/intro'
        }, {
            name: '快速上手',
            components: false,
            path: '/querystart'
        },
        {
            name: '定制主题',
            components: false,
            path: '/theme'
        },{
            name: '更新日志',
            components: false,
            path: '/changelog'
        },
        {
            name: 'Components',
            components: true,
            list: [{
                name: '基础',
                groups: [
                    {
                        name: 'Button 按钮',
                        path: '/button'
                    },
                    {
                        name: 'Icon 图标',
                        path: '/icon'
                    }
                ]
            }]
        }
    ]
}