export default {
    navs: [
        {
            name: 'Oak Weui',
            components: false,
            path: '/intro'
        },
        {
            name: '快速上手',
            components: false,
            path: '/querystart'
        },
        {
            name: '定制主题',
            components: false,
            path: '/theme'
        },
        {
            name: '更新日志',
            components: false,
            path: '/changelog'
        },
        {
            name: 'Components',
            components: true,
            list: [
                {
                    name: '基础',
                    groups: [
                        {
                            name: 'Button 按钮',
                            path: '/Button'
                        },
                        {
                            name: 'Icon 图标',
                            path: '/Icon'
                        },
                        {
                            name: 'Overlay 遮罩层',
                            path: '/Overlay'
                        },
                        // {
                        //     name: 'Animation 动画',
                        //     path: '/Animation'
                        // },
                        {
                            name: 'Popup 弹出层',
                            path: '/Popup'
                        }
                    ]
                },
                {
                    name: '表单',
                    groups: [
                        {
                            name: 'Checkbox',
                            path: '/Checkbox'
                        },
                        {
                            name: 'CheckboxGroup',
                            path: '/CheckboxGroup'
                        },
                        // {
                        //     name: 'Switch 开关',
                        //     path: '/Switch'
                        // },
                        // {
                        //     name: 'Search Bar 搜索框',
                        //     path: '/SearchBar'
                        // },
                        // {
                        //     name: 'Input 输入框',
                        //     path: '/Input'
                        // }
                    ]
                },
                {
                    name: '展示',
                    groups: [
                        // {
                        //     name: 'Avatar 头像',
                        //     path: '/Avatar'
                        // },
                        // {
                        //     name: 'Badge 微标',
                        //     path: '/Badge'
                        // },
                        // {
                        //     name: 'Collapse 折叠面板',
                        //     path: '/Collapse'
                        // },
                        // {
                        //     name: 'Countdown 倒计时',
                        //     path: '/Countdown'
                        // },
                        // {
                        //     name: 'Feeds 信息流',
                        //     path: '/Feeds'
                        // },
                        {
                            name: 'List 列表',
                            path: '/List'
                        },
                        {
                            name: 'Tag 标签',
                            path: '/Tag'
                        },
                        {
                            name: 'Default 缺省状态',
                            path: '/Default'
                        },
                        // {
                        //     name: 'Label 可操作标签',
                        //     path: '/Label'
                        // },
                        {
                            name: 'Stepper 进步组件',
                            path: '/Stepper'
                        },
                        {
                            name: 'OnReachBottom 触底组件',
                            path: '/OnReachBottom'
                        },
                        {
                            name: 'Image 图片组件',
                            path: '/Image'
                        },
                        // {
                        //     name: 'Steps 步骤条',
                        //     path: '/Steps'
                        // },
                        // {
                        //     name: 'TreeSelect 树形选择',
                        //     path: '/TreeSelect'
                        // }
                    ]
                },
                {
                    name: '反馈',
                    groups: [
                        // {
                        //     name: 'ActionSheet 菜单',
                        //     path: '/ActionSheet'
                        // },
                        // {
                        //     name: 'Loading 加载',
                        //     path: '/Loading'
                        // },
                        {
                            name: 'Dialog 弹窗',
                            path: '/Dialog'
                        },
                        // {
                        //     name: 'NoticeBar 通告栏',
                        //     path: '/NoticeBar'
                        // },
                        // {
                        //     name: 'SlideView 滑动单元',
                        //     path: '/SlideView'
                        // }
                    ]
                },
                {
                    name: '导航组件',
                    groups: [{
                        name: 'Tab 标签页',
                        path: '/Tab',
                    }],
                }
                // {
                //     name: '业务组件',
                //     groups: [{
                //         name: 'SubmitBar 提交订单栏',
                //         path: '/SubmitBar',
                //     }],
                // }
            ]
        }
    ]
}
