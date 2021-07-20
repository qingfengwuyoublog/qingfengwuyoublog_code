module.exports = function(title, children = [''], collapsable = true, sidebarDepth = 1) {
  return {
    title,
    collapsable,
    sidebarDepth,
    children
  }
}