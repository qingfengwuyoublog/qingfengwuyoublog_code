# Media objects - 媒体对象

## 说明

本文为 `[MDN]CSS layout cookbook - Recipe: Media objects ` 的笔记.

[英文原文](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Media_objects)

通过本案例:

- 能初步了解 grid 布局特性
- 了解 Grid Cell , 如何组成 Grid Area
- 了解 grid-template-columns grid-template-rows grid-template-areas grid-area 

## codepen 示例 

`建议使用 0.5x 查看效果`

<p class="codepen" data-height="400" data-theme-id="0" data-default-tab="result" data-user="qingfengwuyou" data-slug-hash="NVqrMP" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Media objects - css-cookbook">
  <span>See the Pen <a href="https://codepen.io/qingfengwuyou/pen/NVqrMP/">
  Media objects - css-cookbook</a> by qingfengwuyou (<a href="https://codepen.io/qingfengwuyou">@qingfengwuyou</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[codepen](https://codepen.io/qingfengwuyou/pen/NVqrMP)

## 案例需求

### 定义

`Media objects`: 媒体对象，是一种图文混排模式，用于构建复杂、重复的内容列表，由两栏构成。一边有图片，另一边有描述性文字。如贴子或微博

### 需求

- 在小屏时，堆叠排列；在大屏时，左右两栏式布局
- 图像可以在左侧或右侧
- 列表中的图像大小不一
- 媒体对象可以嵌套
- 媒体对象应清除内容，无论哪一侧最高。
- 正文下方有可选的按钮操作区 (原文无,补充)

## 解析

### 左图右文布局

`html 结构`

```pug
.media
  .img
    img(src="balloon-sq2.jpg")
  .content
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  .footer An optional footer goes here.
```

`css`

```css

img {
  max-width: 100%;
}

.media {
    display: grid;
    grid-template-columns: fit-content(200px) 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
        "image content"
        "image footer";
    grid-gap: 20px;
    margin-bottom: 4em;
}

.img {
    grid-area: image;
}

.content {
    grid-area: content;
}

.footer {
    grid-area: footer;
}
```

#### 分析

布局思路为将 media 分成两行两列,如下:

<table>
  <tbody>
    <tr>
      <td><br/><br/><br/>图片区<br/><br/><br/><br/></td>
      <td>　　　　正文区　　　</td>
    </tr>
    <tr>
      <td>图片区</td>
      <td>　　　　页脚区　　　</td>
    </tr>
  </tbody>
</table>

并将左侧上下两格, 合并为 `图片区 image`　，即四个格子分成三块区域

#### 注释

- `fit-content(200px)`: 表示如果内容超过 200px, 则最大为 200px , 如果不足 200px, 则为内容实际大小
- `fr`: 等分剩余空间

#### 样式解析

```
grid-template-columns: fit-content(200px) 1fr;
```
> 分为两列, 第一列自适应不超过 200px , 第二列自动充满

```
grid-template-rows: 1fr auto;
```
> 分为两行, 第一行自动充满, 第二行为内容实际高度


```
grid-template-areas:
    "image content"
    "image footer";
```
> 将两行两列形成的四个格子, 分成三块区域: `image content footer`
> - 区域支持中文
> - 一对双引号指定的一行的单元格
> - 重复网格区域的名称导致内容扩展到这些单元格, 如 image
> - 可用 . – 点号代表一个空网格单元
> - 网格区域一定要形成规整的矩形区域，什么L形，凹的或凸的形状都是不支持的，会认为是无效的属性值。

```
grid-gap: 20px;
```

> grid-gap 为 grid-row-gap 和 grid-column-gap 的缩写, 即行列间距为 20px

```
grid-area: image;
```

> grid子项只要使用grid-area属性指定其隶属于那个区域就可以了

### 左文右图布局

`html 结构`

```pug
.media.media-flip
  .img
    img(src="balloon-sq2.jpg")
  .content
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  .footer An optional footer goes here.
```

`css`

```css
.media-flip {
    grid-template-columns: 1fr fit-content(250px);
    grid-template-areas:
        "content image"
        "footer image";
}
```

#### 分析

`.media-flip` 覆盖 image 的布局位置

### 嵌套布局

`html 结构`

```pug
.media
  .img
    img(src="balloon-sq2.jpg")
  .content
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  .footer An optional footer goes here.
  .media
    .img
      img(src="balloon-sq2.jpg")
    .content
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    .footer An optional footer goes here.
```

如果不设置样式, 则效果如下:

`codepen 错误示例`

`建议使用 0.5x 查看效果`

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="qingfengwuyou" data-slug-hash="joPOPN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Media objects (wrong) - CSS layout cookbook">
  <span>See the Pen <a href="https://codepen.io/qingfengwuyou/pen/joPOPN/">
  Media objects (wrong) - CSS layout cookbook</a> by qingfengwuyou (<a href="https://codepen.io/qingfengwuyou">@qingfengwuyou</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[codepen](https://codepen.io/qingfengwuyou/pen/joPOPN)

因 `嵌套 media` 并没有定义 `grid-area`, 则按规则, 当原有单元格,都已经有内容时,将新增一行,
新增行也有两列, 因此 `嵌套 media` 将自动排在新增行的第一列

要解决这个问题, 增加样式:

```css
.media > .media {
  grid-column-start: 2; 
}
```

`grid-column-start` 是 `grid item` 的属性, `2` 表示从第2条线开始

> 使用特定的网格线确定 grid item 在网格内的位置。grid-column-start/grid-row-start 属性表示grid item的网格线的起始位置，grid-column-end/grid-row-end属性表示网格项的网格线的终止位置。
> 用一个数字来指代相应编号的网格线
> 如果没有声明 grid-column-end / grid-row-end，默认情况下，该网格项将跨越1个轨道。

同时为了适应左文右图布局的嵌套, 要增加样式覆盖上面的样式:

```css
.media-flip > .media {
  grid-column-start: 1;
}
```

## 特点分析

使用 grid 布局实现是考虑:

- 页脚区实现比较方便, 可以保证页脚总是在整体的最下方, 即使图片与正文的高度不一
- 对同一列表,图片大小不一的情况适应更强, 通过 [fit-content\(\)](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content)
- 通过 `grid-template-areas` 很容易实现常规布局和镜像布局


## 降级处理

如果浏览器不支持 grid 布局时:

- `.img` 增加左浮动
- `.media` 盒子清除浮动

[降级原文示例](https://github.com/mdn/css-examples/blob/master/css-cookbook/media-objects-fallback--download.html)

## 使用 Flex 实现

`Bootstrap 4` 是使用 Flex 实现 

[Bootstrap4 - Media object](http://code.z01.com/v4/components/media-object.html)

```css
.media {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
}

.media-body {
  -ms-flex: 1;
  flex: 1;
}
```

```html
<div class="media">
  <img class="mr-3" src="..." alt="Generic placeholder image">
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>
```

样式很简洁,也支持嵌套,左右布局需要调整 `img` 与 `.media-body` 的 html 结构顺序, 不过没有页脚设置