# OAKUI
> A Wechat App UI Lib.
<br/>

## Development

### get start
```code
$ git clone git@github.com:yh-yunchuang-fe/oak.git
$ cd oak
$ npm install
$ npm start
```

```code
$ git clone git@github.com:yh-yunchuang-fe/oak.git
$ cd oak
$ npm install
$ npm start

// docs start
$ npm run docs:dev
```

### build
```code
// component build
$ npm run build 

// docs build & publish
$ npm run docs 
```

### new
`-d` 指定创建目录，以`src/`为根目录
```code
$ npm run new -- --p {page} // 创建示例页面
$ npm run new -- --c {component}  // 创建组件
```

批量创建页面（组件），`-c`, `-p` 后传入多个页面（组件）以 `,` 区分
```code
$ npm run new -- --c Channel
```

## TODO

- [x] [Icon](https://github.com/yh-yunchuang-fe/oak/blob/develop/src/packages/Icon/)
- [x] [Button](https://github.com/yh-yunchuang-fe/oak/blob/develop/src/packages/Button/)
- [ ] Text
- [ ] Tips
- [x] [Feeds](https://github.com/yh-yunchuang-fe/oak/blob/develop/src/packages/Feeds/)
- [ ] List
- [ ] Avatar
- [ ] From
- [ ] SearchBar
- [ ] Tabs
- [x] [Loading](https://github.com/yh-yunchuang-fe/oak/blob/develop/src/packages/Loading/)
- [ ] Tags

## License
MIT © YongHui
