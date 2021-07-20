const css = require('./css/index.js');
const javascript = require('./javascript/index.js');
const database = require('./database/index.js');
const lib = require('./lib/index.js');
const backEnd = require('./back-end/index.js');
const resource = require('./resource/index.js');
const others = require('./others/index.js');
const philosophy = require('./philosophy/index.js');

/**
 * 侧边栏的配置
 * 当路由深度越深时应当排序在更前方
 * 示例: /shop 和 /shop/abc
 * 
 * 应当将 /shop/abc 写在更上方
 */
module.exports = {
  // 商城帮助文档
  '/css/': css,
  '/javascript/': javascript,
  '/database/': database,
  '/lib/': lib,
  '/back-end/': backEnd,
  '/resource/': resource,
  '/others/': others,
  '/philosophy/': philosophy,
  // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
  // '/': ['']
};