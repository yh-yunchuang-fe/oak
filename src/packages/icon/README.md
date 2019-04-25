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
    <oak-icon isShow />
    <oak-icon isShow color="#fff" />
    <oak-icon isShow size="small" />
    <oak-icon isShow position="fixed" />
```

### APIS

| Name | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| name | can be set to icon name or image url | `String` | none |
| size | Size of the icon  | `String` | `32rpx` |
| classPrefix | Class prefix of then icon | `String` | `icon` |
| color | Color of the icon  | `String` | `#333` |


### External Classes

| Name | Description |
|-----------|-----------|
| c_class | root class |
