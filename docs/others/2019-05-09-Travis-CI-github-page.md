# Travis CI 部署博客到 github page

## 说明

本博客是用 [VuePress 1.x](https://v1.vuepress.vuejs.org/zh/) 构建.

利用 Travis CI 自动部署时, 踩了一些坑, 先简单记录一下

## 特殊要求

与一般的 github page 博客不同, 本博客的源码和静态页面是分别存放在不同的仓库,而网上的教程一般都是在同一仓库

## 踩过的坑

### 登录 Travis CI 的 github 帐号

由于本博客的源码和静态页面不但存放在不同的仓库,且仓库的帐号也是不同的.

因此在登录 Travis CI , 应使用源码项目的 github 帐号

### Travis CI 如何访问(推送静态页面至)静态页面仓库(博客站点)

由于静态页面仓库也在 github, 还是比较方便, 分两步处理即可

`获取 token`

- 先登录 github , 用 静态页面仓库 帐号
- 在帐号头像, 找到 `Settings-Developer settings`
- 找到 `Personal access tokens` 生成 `token` , (选项 将 `repo` 勾上)
- 复制 `token` 备用

`在 Travis CI 设置环境变量`

- 首先你已经在 Travis CI 激活了仓库, 这里为博客源码仓库
- 在仓库找到 `Settings` 页
- 设置 `Environment Variables`
- 变量名可为 `GITHUB_TOKEN` ,变量名可以自已取,  值为前面复制的 `token`

### 在源码项目的根目录添加 `.travis.yml` 文件

文件内容 `VuePress 1.x` 的示例是这样:

```yml
language: node_js
node_js:
  - lts/*
script:
  - npm run docs:build
deploy:
  provider: pages
  skip-cleanup: true
  local_dir: docs/.vuepress/dist
  github-token: $GITHUB_TOKEN # a token generated on github allowing travis to push code on you repository
  keep-history: true
  on:
    branch: master
```

这个示例只适用于源码与博客站点都在同一仓库,本文的情况应用下面的样例:

```yml
language: node_js
node_js:
  - lts/*
script:
  - npm run docs:build
deploy:
  provider: pages
  repo: qingfengwuyou/qingfengwuyou.github.io
  target_branch: master
  skip-cleanup: true
  local_dir: docs/.vuepress/dist
  github-token: $GITHUB_TOKEN
  keep-history: true
  on:
    branch: master

```


即增加:

```
  repo: qingfengwuyou/qingfengwuyou.github.io
  target_branch: master
```

- repo :　指明不同的仓库
- target_branch: 目标仓库的目标分支, 如果不设,默认为 `gh_page` 分支
