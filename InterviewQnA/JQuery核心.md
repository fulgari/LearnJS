<!-- JQuery核心.md -->

###JQuery函数
`jQuery([selector,[context]])`
这个函数接收一个包含 CSS 选择器的字符串，然后用这个字符串去匹配一组元素。

###JQuery对象
使用JQuery获取元素后，就是JQuery对象了。

- 两种转换方式将一个jQuery对象转换成js对象：取下标和get方法。例子：`$('#a')[index]`和`$('#a').get(index); `

###index
`JQuery对象.index([selector|element])`


###进行页面跳转
1. 使用JS
	- 使用重定向： `window.location.replace('网址')`
	- 使用href： `window.location.href = '网址'`
2. 使用JQuery页面跳转
	-  $(location).attr('href', '网址');
 	- $(window).attr('location','网址');
 	- $(location).prop('href','网址')