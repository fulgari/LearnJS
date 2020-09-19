<!-- BFC块级格式化上下文.md -->

- BFC元素特性表现原则就是，内部子元素再怎么翻江倒海，翻云覆雨都不会影响外部的元素。所以，避免margin穿透啊，清除浮动什么的也好理解了。

###父子塌陷问题
父亲没有设置padding、border 内容时，子元素垂直方向的margin会叠加给父亲一旦发生塌陷，叠加规则：父亲最终垂直方向的margin为父子中最大的margin值，并非相加     

解决方法：  
1. 把儿子的margin转换成父亲的padding 注意盒子总高度变化问题
2. 给父亲增加一个属性 overflow:hidden;    //触发了BFC

###触发BFC的方式
1. body 根元素
2. 浮动元素：float 除 none 以外的值
3. 绝对定位元素：position (absolute、fixed)
4. display 为 inline-block、table-cells、flex
5. overflow 除了 visible 以外的值 (hidden、auto、scroll)

只要为根、浮、绝、内、overflow这些之一，都可以在它们自己造出来的BFC内翻云覆雨了。