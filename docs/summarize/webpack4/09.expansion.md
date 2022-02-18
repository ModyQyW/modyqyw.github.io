# 一些简单的拓展

- Scope Hoisting 作用域提升

js 里面有变量提升和函数提升的概念，也就是把变量和函数的声明提升到当前作用域顶部。`webpack` 里面的作用域提升和它们类似，在某些情况下，`webpack` 会把被引入的 js 文件提升到引入者的顶部，减少创建的代码作用域，使得代码体积和内存开销变小。

构建模式是 `production` 时，`webpack` 会自动开启作用域提升，你也可以用 `ModuleConcatenationPlugin` 来手动开启。

作用域提升是针对 ESM 的，非 ESM 的情况下，`webpack` 会自动回退，不使用作用域提升。

- Hot Module Reload 模块热更新

![热更新原理图](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/1/16ec13499800dfce~tplv-t2oaga2asx-watermark.awebp)

[图源](https://juejin.im/post/6844904008432222215)

![热更新原理图](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/2/16cf203824359397~tplv-t2oaga2asx-watermark.awebp)

[图源](https://juejin.cn/post/6844903933157048333)

- Tree Shaking 摇树优化

使用摇树优化是为了删除一些没有被使用的代码，同样，它也是依赖于 ESM 的。

- Module Federation 模块联邦

TODO
