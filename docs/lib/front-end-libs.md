# 前端常用库与框架

## 实用工具库

### 综合工具

推荐使用:

- Lodash

#### Lodash

★★★★★

[Lodash 中文文档](https://www.html.cn/doc/lodash/)


> Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库 \
> Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。 \
> Lodash 的模块化方法 非常适用于：
>- 遍历 array、object 和 string
>- 对值进行操作和检测
>- 创建符合功能的函数


#### Underscore

★★★★

[Underscore.js (1.9.1) 中文文档](https://www.html.cn/doc/underscore/)

> Underscore一个JavaScript实用库，提供了一整套函数式编程的实用功能，但是没有扩展任何JavaScript内置对象。

### 日期处理

#### moment

★★★★★

[Moment.js - 英文文档](http://momentjs.com/docs/)

[Moment.js - 部分中文](http://momentjs.cn/docs/)

> Moment.js 是一个 JavaScript 日期处理类库,用于解析、检验、操作、以及显示日期

#### date-fns

★★★★★

[date-fns - 英文文档](https://date-fns.org/docs/Getting-Started)

`注: 网站经常无法访问`

[date-fns - github](https://github.com/date-fns/date-fns)

> 轻量级的 JavaScript 日期库 

#### moment VS date-fns

[以下内容来自 `date-fns —— 轻量级的 JavaScript 日期库`(可译网) ](http://coyee.com/article/12360-introduction-to-date-fns-a-lightweight-javascript-date-library)

根据 Sasha Koss，date-fns 的观点，Moment.js 天生就存在一些问题，正是这些问题促使它创造了 date-dns。\
Sasha 在 项目的 GitHub 页对此进行了解释，归结如下：

- Moment.js 是可变的，这可能会导致缺陷。
- 它具有复杂的面向对象的 API (这加剧了可变性问题)。
- 其复杂的 API 带来大量性能开销。
- 在使用 Webpack 将其打包在构建结果中时，会导致构建结果尺寸增长不少。

对比
    
- date-fns 是不可变的，总是返回新的日期，而不是修改传入的那个。
- 它的 API 很简单。你做每件事都只需要一个函数。
- 它很快。你的用户会有更好的用户体验。
- 它是 Webpack 完美的伴侣。由于其每个文件一个函数的风格，你可以在打包时选择需要的部分而扔弃没用到的那些功能。