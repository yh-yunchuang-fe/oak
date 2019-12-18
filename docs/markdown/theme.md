# 定制主题

Oak Weui 支持灵活定制样式，以满足业务和品牌上多样化的视觉需求，包括全局样式和部分组件的特定样式。


## Oak Weui 的样式变量

Oak 的样式使用了 [Less](http://lesscss.org/) 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

以下是一些最常用的通用变量，所有样式变量可以在 [这里](https://github.com/yh-yunchuang-fe/oak/blob/develop/packages/style/variable.less) 找到。

```scss

@theme-color: #FD7622; // 主题色

@txt-default: #333; // 主文本色

@txt-info: #999; // 信息文本色

@txt-muted: #ccc; // 失效文本色

@txt-warning: #FF0500; // 警告文本色

@txt-link: #00a5e0; // 链接色

@font-size-base: 24rpx; // 主字号

@font-size-icon: 40rpx; // icon字号

@border-radius-base: 4rpx; // 主圆角

@wrap-padding: 30rpx; // 容器内间距

@border-color: rgba(221, 221, 221, .8); // 边框色

```

如果以上变量不能满足你的定制需求，可以给我们提 issue。


## 定制方式
我们建议 clone [Oak 源码](https://github.com/yh-yunchuang-fe/oak)到本地，然后修改[变量文件](https://github.com/yh-yunchuang-fe/oak/blob/develop/packages/style/variable.less)在本地重编译。项目运行请参考[Oak 开发文档](https://github.com/yh-yunchuang-fe/oak/wiki/Development(%E5%BC%80%E5%8F%91%E8%80%85%E8%AF%B4%E6%98%8E))。
