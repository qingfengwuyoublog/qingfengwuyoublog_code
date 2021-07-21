# css动画基础 - animation

语法：[MDN animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)

## Animation 最基本的动画属性

掌握以下几个属性即可

- @keyframes
- animation 属性是一个简写属性，用于设置八个动画属性
  - animation-name
  - animation-duration
  - animation-timing-function
  - animation-delay
  - animation-iteration-count
  - animation-direction
  - animation-fill-mode
  - animation-play-state 实验功能，不考虑



|属性                      | 描述             |  缺省值        |
|:-----------------------:|:----------------:|:-------------:| 
|animation-name           |动画的名称          |  none        |
|animation-duration       |指定一个动画周期的时长|   0s         |
|animation-timing-function|动画的速度曲线       |  ease        |
|animation-delay          |动画开始延时时间     |    0s         |
|animation-iteration-count|动画运行的次数       |    1         |
|animation-direction      |动画向前循环         | normal       |
|animation-fill-mode      |对象动画时间之外的状态|    none       |


`关于 animation 简写的说明 `

- 顺序没有强制规定
- 但由于有两个属性都涉及时间值，因此第一个时间值会分配给 animation-duration
- 不属于关键字的字符串，会分配给 animation-name
- 只有 animation-name animation-duration 是必须设置的，因为这两个属性的初始值都不会产生动画

## 纵向连续滚动的示例

[codepen](https://codepen.io/qingfengwuyou/pen/VwpBxYO)

`html`

```html
<div class="scroll-view">
  <div class="ul">
    <div class="li">11111</div>
    <div class="li">22222</div>
    <div class="li">33333</div>
    <div class="li">44444</div>
    <div class="li">55555</div>
    <div class="li">11111</div>
  </div>
</div>
```

`css`

```css
@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(-100% + 32px));
  }
}
.ul {
  animation-name: scroll;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  /* animation: scroll 5s linear infinite; 动画属性简写 */
  background-color: #dc3545;
}
.li {
  font-size: 16px;
  height: 32px;
  line-height: 32px;
  text-align: center;
}
.scroll-view {
  box-sizing: border-box;
  margin: 24px;
  background-color: #007bff;
  color: #fff;
  height: 32px;
  padding: 0 24px;
  border-radius: 20px;
  overflow: hidden;
  width: 180px;
}
```

`要点说明：`

- 外部容器定义可显示的高度，并设置 `overflow: hidden`
- 内容容器的总高度可以自适应，但最后一行的高度要已知
  + 因为动画结束时，并不是 translateY(-100%), 而是要预留最后一行不上移
  + 这样的目的是要让：当时间100%时，最后一行留在外部容器内（即视线内），
  + 而不是最后一行仍在上移，当时间100%时，最后一行移至消失在外部容器内，这样在视线中会形成一个空白状态
- 要达到无缝连接的效果，还要让最后一行的内容与第一行相同
  + 因为时间 100% 时，最后一行留在外部容器内，然后马上又切到 时间0% 的状态
  + 即第一行马上呈现到外部容器内
  + 由于第一行与最后一行相同，这样切换在视线中是无感知的

## 属性详解

### animation-name

- 动画名称有一定的命名要求：由大小写敏感的字母a-z、数字0-9、下划线(_)和/或横线(-)组成。第一个非横线字符必须是字母，数字不能在字母前面，不允许两个横线出现在开始位置。
- 可以使用 none 关键字，表示无关键帧。可以不改变其他标识符的顺序而使动画失效，或者使层叠的动画样式失效。

### animation-duration

- 一个动画周期的时长，单位为秒(s)或者毫秒(ms)，无单位值无效。
- 负值无效。
- 必填属性

### animation-timing-function

- 缓动函数,可作用于整个动画周期,也可作用于一个关键帧周期

`函数种类`

- 线性
  + linear: 以相同速度开始至结束
    + = cubic-bezier(0.0, 0.0, 1.0, 1.0)
- 贝塞尔曲线
  + ease: 慢速开始，然后变快，然后慢速结束
    + = cubic-bezier(0.25, 0.1, 0.25, 1.0)
  + ease-in: 以慢速开始
    + = cubic-bezier(0.42, 0, 1.0, 1.0)
  + ease-out: 以慢速结束
    + = cubic-bezier(0, 0, 0.58, 1.0)
  + ease-in-out: 以慢速开始和结束
    + = cubic-bezier(0.42, 0, 0.58, 1.0)
  + cubic-bezier(p1, p2, p3, p4)
- 阶梯函数
  + 


## 简单动画设置技巧

### 通过调整坐标简单平移

- 设置 移动元素 相对定位
- 使用 left right top bottom 进行移动，相同方向选一个属性设置即可


## 其它说明

- 不使用关键帧动画，还可以用更简单的过渡动画 transition 