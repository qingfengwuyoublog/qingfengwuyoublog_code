const navConf = require('../../config/navConf.js');
const sidebarConf = require('../../config/sidebarConf/index.js');

// console.log('sidebarConf:');
// console.dir(sidebarConf);
module.exports = {
  title: '清风无忧前端开发博客',
  description: '清风无忧前端开发博客',
  themeConfig: {
    nav: navConf,
    sidebar: sidebarConf
  },
}