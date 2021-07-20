# min/max-width/height

## 说明

本文大部分说明参考自 [《CSS世界》](https://demo.cssworld.cn/)

## 常用的场景

自适应布局，常常不能设置 width / height，这时候就适合用 min/max-width

比如：适用于大屏，又照顾笔记本的网页宽度自适应

```css
.container {
  min-width: 1200px;
  max-width: 1400px;
}
```

不需要设置 width

又比如常见的图片在移动端自适应显示(防止图片超大):

```css
img {
  max-width: 100%;
  height: auto !important; 
}
```

`height: auto !important` 是防止图片在 html 中设置了高度，如果 max-width 又生效时，就会造成水平压缩。

## 初始值

|属性|初始值|
|:-:|:---:|
|min-width|auto|
|min-height|auto|
|max-width|none|
|max-height|none|


## 覆盖规则

`min-width` > `max-width` > `width !important`

`min-height` > `max-height` > `height !important`


## 任意高度元素滑动展开收起效果

可参考:[《CSS世界》示例：max-height与任意高度元素滑动展开收起效果实例页面](https://demo.cssworld.cn/3/3-2.php)







