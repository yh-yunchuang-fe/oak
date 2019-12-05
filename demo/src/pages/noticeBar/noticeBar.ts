Page({
    data: {
        icon: {
            name: 'trash',
            size: '28rpx',
            color: '#FD7622'
        },
        content: [
            {
                id: 1,
                type: '【1】',
                value: '这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据这是测试数据'
            },
            {
                id: 2,
                type: 2,
                value: '测试数据'
            }
        ]
    },

    onHandlerClick(e: event): void {
        console.log(e)
    }
})
