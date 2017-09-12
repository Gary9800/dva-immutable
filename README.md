# dva-immutable

用法同 [dva](https://github.com/dvajs/dva) 一致，没有增加额外API，使用了 [redux-immutable](https://github.com/gajus/redux-immutable) 来支持 immutable 类型。

会把初始 state 转为 immutable 类型，所以定义 models 的 state 时仍同 JS 数据写法。

引用 immutable-js 的方法：
```javascript
import immutable from "dva-immutable/immutable"
```