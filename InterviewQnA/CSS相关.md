<!-- CSS相关.md -->

### CSS 中哪些属性可以继承?
1. 字体系列属性 font-family：字体系列 font-weight：字体的粗细 font-size：字体的大小 font-style：字体的风格
2. 文本系列属性 text-indent：文本缩进 text-align：文本水平对齐 line-height：行高 word-spacing：单词之间的间距 letter-spacing：中文或者字母之间的间距 color：文本颜色
3. 可见性 visibility：控制元素显示隐藏
4. 列表布局属性 list-style：列表风格，包括list-style-type、list-style-image等

【注1】：虽然字体大小和颜色可以继承，但有*默认样式*的标签需要单独设置，如h类标签无法继承字体大小，a标签无法继承颜色。

### CSS 中的 background 的 background-image 属性可以和 background-color 属性一起生效么？
可以，而且background-image在background-color前面

### CSS 中的 vertical-align 有哪些值？它在什么情况下才能生效？
vertical-align属性设置元素的垂直对齐方式
1. 线类：baseline、top、middle、bottom
2. 文本类：text-top、text-bottom
3. 上标下标类：sub、super
4. 数值百分比类：20px、2em、20%等（对于基线往上或往下偏移）

vertical-align生效前提：
1. 内联元素span、strong、em、img、button、input等
2. display值为inline、inline-block、inline-table或table-cell的元素
3. 需要注意浮动和绝对定位会让元素块状化，因此此元素绝对不会生效
