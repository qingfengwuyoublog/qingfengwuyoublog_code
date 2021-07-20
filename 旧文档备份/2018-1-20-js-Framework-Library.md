---
layout: post
title: 前端流行框架和实用库列表
tag: [javascript, Framework, nodejs]
---

收集前端常用流行框架及 nodejs 第三方实用库

## 后端

### 渲染相关

#### bigview

支持 前端使用 bigpipe 模式的后端渲染

[https://github.com/bigviewjs/bigview](https://github.com/bigviewjs/bigview)

- 支持静态布局和动态布局
- 支持5种bigpipe渲染模式
  - parallel.js   并行模式， 先写布局，并行请求，但在获得所有请求的结果后再渲染
  - pipeline.js  (默认) 管线模式：即并行模式， 先写布局，并行请求，并即时渲染
  - reduce.js    顺序模式： 先写布局，按照pagelet加入顺序，依次执行，写入
  - reducerender.js 先写布局，然后顺序执行，在获得所有请求的结果后再渲染
  - render.js 一次渲染模式：即普通模式，不写入布局，所有pagelet执行完成，一次写入到浏览器。支持搜索引擎，用来支持那些不支持JS的客户端。
- 支持子pagelet，无限级嵌套
- 支持根据条件渲染模板，延时输出布局
- bigview支持错误模块显示，仅限于布局之前

### 代理工具

#### hiproxy

hiproxy是一个基于Node.js开发的轻量级网络代理工具，主要目的是为了解决多个开发者在开发过程中遇到的hosts管理和反向代理的问题。使得在开发时，不再需要修改系统hosts和启动一个Nginx服务。hiproxy扩展了hosts的语法，支持端口号。此外，hiproxy还支持通过类似于nginx配置文件的语法来配置代理。

[https://github.com/hiproxy/hiproxy](https://github.com/hiproxy/hiproxy)

* 支持Nginx风格的配置文件格式，配置简单直观
* 支持hosts以及扩展（支持端口号）
* 支持插件扩展rewrite指令、CLI命令和页面
* 支持HTTPS证书自动生成
* 支持代理自动配置（Proxy auto-config）
* 支持后台启动，日志输出到文件
* 支持配置文件自动查找
* 支持打开浏览器窗口并自动配置代理
* 提供Node.js API
* ...