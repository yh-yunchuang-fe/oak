//index.js
//获取应用实例
Page({
    onShareAppMessage(): object {
        return {
            title: 'Oak Weui Tab 标签',
            path: '/pages/tab/tab',
        }
    },
    data: {
        rows: [
            {
                type: 'default',
                title: '基础样式',
                tabs: [
                    { title: '超级热卖' },
                    { title: '为你推荐' },
                    { title: '新鲜水果' },
                ]
            },
            {
                type: 'combination',
                title: '组合样式',
                tabs: [
                    { title: '猜你喜欢',subtitle:'精选好物' },
                    { title: '品质鲜果' ,subtitle:'健康安心'},
                    { title: '时令商品' ,subtitle:'应季鲜货'} ,
                    { title: '熟食卤味' ,subtitle:'懒人即食'},
                ]
            },
            {
                type: 'button',
                title: '胶囊样式',
                tabs: [
                    { title: '0～10元' },
                    { title: '10～20元' },
                    { title: '20元以上' }
                ]
            },
            {
                type: 'img',
                title: '图片样式',
                tabs: [
                    { title: '超级热卖', sort: 'default' },
                    { title: '为你推荐' },
                    { title: '按价排序', sort: 'asc' }
                ]
            },
            {
                type: 'img',
                title: '支持排序，仅支持图片样式',
                sort: true,
                tabs: [
                    { title: '超级热卖', sort: 'default' },
                    { title: '为你推荐' },
                    { title: '按价排序', sort: 'asc' }
                ]
            }
        ],
        rows1: [
            {
                type: 'default',
                title: '基础样式',
                tabs: [
                    { title: '超级热卖' },
                    { title: '为你推荐' },
                    { title: '新鲜水果' },
                    { title: '品质蔬菜' },
                    { title: '海鲜水产' },
                ]
            },
            {
                type: 'combination',
                title: '组合样式',
                tabs: [
                    { title: '猜你喜欢',subtitle:'精选好物' },
                    { title: '品质鲜果' ,subtitle:'健康安心'},
                    { title: '时令商品' ,subtitle:'应季鲜货'} ,
                    { title: '熟食卤味' ,subtitle:'懒人即食'},
                    { title: '熟食卤味' ,subtitle:'懒人即食'},
                ]
            },
            {
                type: 'button',
                title: '胶囊样式',
                tabs: [
                    { title: '超级热卖' },
                    { title: '为你推荐' },
                    { title: '新鲜水果' },
                    { title: '品质蔬菜' },
                    { title: '海鲜水产' },
                ]
            },
            {
                type: 'img',
                title: '图片样式',
                tabs: [
                    { title: '超级热卖' },
                    { title: '为你推荐' },
                    { title: '新鲜水果' },
                    { title: '品质蔬菜' },
                    { title: '海鲜水产' },
                ]
            },
            {
                type: 'img',
                title: '支持排序，仅至此图片样式',
                sort: true,
                tabs: [
                    { title: '超级热卖' },
                    { title: '为你推荐' },
                    { title: '新鲜水果' },
                    { title: '品质蔬菜' },
                    { title: '海鲜水产' },
                ]
            }
        ]
    },
    change(e: any): void {
        console.log('change', e)
    },
    sortChange(e: any): void {
        console.log('sortChange', e)
    }
})
