### client 可视区域
clientWidth:可视区域的宽(没有边框)，边框内部的宽度
clientHeight:可视区域的高（没有边框），边框内部的高度
clientLeft:左边边框的宽度
clientTop:上面边框的宽度

### offset
client加上边线（如滚动条）

- offsetWidth：获取元素的宽(包含边框)
- offsetHeight：获取元素的高(包含边框)
- offsetLeft：获取元素距离左边的值
- offsetTop：获取元素距离右边的值

### scroll
网页全文长度（如果网页没有滚动条，那么scroll基本上就等于client）

- scrollWidth:元素中内容的实际的宽（没有边框），如果没有内容或是内容不足就是元素的宽
- scrollHeight:元素中内容的实际的高（没有边框），如果没有内容或是内容不足就是元素的高
- scrollLeft:向左卷曲出去的距离
- scrollTop:向上卷曲出去的距离


这里是javascript中制作滚动代码的常用属性

页可见区域宽：   document.body.clientWidth;
网页可见区域高： document.body.clientHeight; window.innerHeight;
网页可见区域宽： document.body.offsetWidth   (包括边线的宽);
网页可见区域高： document.body.offsetHeight (包括边线的宽);
网页正文全文宽： document.body.scrollWidth;
网页正文全文高： document.body.scrollHeight;
网页被卷去的高： document.body.scrollTop;
网页被卷去的左： document.body.scrollLeft;
网页正文部分上： window.screenTop;
网页正文部分左： window.screenLeft;
屏幕分辨率的高： window.screen.height;
屏幕分辨率的宽： window.screen.width;
屏幕可用工作区高度： window.screen.availHeight;