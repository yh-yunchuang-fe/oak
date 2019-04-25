# Icon

### Usage

Here is a quick example to get you started, it's all you need:

import in `page.json`:
```json
"usingComponents": {
  "oak-icon": "path/to/your/oakui/icon/index"
}
```
use in `page.wxml`
```html
    <oak-icon name='wechat' />
    <oak-icon name='https://xxxx.com/your/icon/name' />
    <oak-icon name='wechat' size="60rpx" />
    <oak-icon name='wechat' color="#000" />
```

### APIS

| Name | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| name | can be set to icon name or image url | `String` | none |
| size | Size of the icon  | `String` | `32rpx` |
| classPrefix | Class prefix of the icon | `String` | `icon` |
| color | Color of the icon  | `String` | `#333` |


### External Classes

| Name | Description |
|-----------|-----------|
| c_class | root class |
