# CSS 实现毛玻璃效果 - backdrop-filter

## backdrop-filter

移动端可直接使用 backdrop-filter 设置

```css
  backdrop-filter: blur(10px);
```

### 适用条件

- 父级内容要有图片或丰富变化的颜色，才会有效果，如果父级内容仍为纯色块，则无效果
- 本级容器的背景色要设置透明度，如果文字前景色与父级内容颜色反差很大时，可以接近全透明

### 示例设置

```css
.glassmorphism {
  background: hsla(0, 0%, 75%, .75);
  backdrop-filter: blur(6px);
}
```

背景色使用 hsla 设置，更容易模拟白玻璃效果，

白玻璃效果

`hsla(0, 0%, 100%, .75);`

如果需要偏黑，将第三个参数的百分比设置小一点即可

## 其它说明

`backdrop-filter` 与 `filter` 用法基本一致

如果浏览器不支持 backdrop-filter 时，可使用 `filter` 变通实现


区别在于使用 backdrop-filter 时，可以实现背景部分清晰，部分模糊的效果，
而用 `filter` 变通实现时，只能让整个背景模糊

