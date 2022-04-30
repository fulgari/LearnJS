<!-- BFC块级格式化上下文.md -->

- BFC 元素特性表现原则就是，内部子元素再怎么翻江倒海，翻云覆雨都不会影响外部的元素。所以，避免 margin 穿透啊，清除浮动什么的也好理解了。

### 父子塌陷问题

父亲没有设置 padding、border 内容时，子元素垂直方向的 margin 会叠加给父亲一旦发生塌陷，叠加规则：父亲最终垂直方向的 margin 为父子中最大的 margin 值，并非相加

解决方法：

1. 把儿子的 margin 转换成父亲的 padding 注意盒子总高度变化问题
2. 给父亲增加一个属性 overflow:hidden; //触发了 BFC

### 触发 BFC 有哪些方式？

（1）根元素 HTML
（2）float 不为 none
（3）display 为 inline-block 或 table-cell
（4）overflow 不为 visible
（5）position 不为 static
（6）display: flex, inline-flex

概括来说就是**脱离了文档流**的元素

只要为根、浮、po、内、overflow 这些之一，都可以在它们自己造出来的 BFC 内翻云覆雨了。
