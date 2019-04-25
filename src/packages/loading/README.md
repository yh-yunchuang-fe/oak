# Loading

### Usage

Here is a quick example to get you started, it's all you need:

import in `page.json`:
```json
"usingComponents": {
  "oak-loading": "path/to/your/oakui/loading/index"
}
```
use in `page.wxml`
```html
    <oak-loading isShow />
    <oak-loading isShow color="#fff" />
    <oak-loading isShow size="small" />
    <oak-loading isShow position="fixed" />
```

### APIS

| Name | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| isShow | display this loading | `Boolean` | `false` |
| size | can be set to normal, small or large  | `String` | `normal` |
| position | can be set to relative, fixed or absolute  | `String` | `relative` |
| color | Color of the loading  | `String` | `#FD7622` |


### External Classes
none

