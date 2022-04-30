
### XHR 对象
- 虽然叫Xml，但是 Ajax 通信和数据格式无关；这种技术就是无需刷新页面即可从服务器获取到数据，但不一定是 XML 格式。
- 最初在IE5中，XHR 是通过 MSXML 库中的一个 ActiveX 对象实现的。


请简述XMLHttpRequest、JSONP的适用场景，并针对两种请求形式简述如何检测请求错误。
我的答案：
1. XHR对象的作用是异步进行数据请求，是AJAX应用的主要内容，主要用于页面部分更新。JSONP是利用`<script>`标签中请求可以绕过同源策略的办法，主要用于实现跨域数据传输。
2. 对XHR对象来说，如果它的readyState不等于4，说明请求响应没有完成，这时可能出现了异常，我们没办法使用响应数据。对JSONP来说，可以检测script标签的onerror事件，或者是使用计时器检测指定时间内是否接收到了响应。

正确答案：
1. XMLHttpRequest用于浏览器端与服务器端异步请求数据从面实现对页面的**无刷新修改**，支持GET/POST请求，一般用于非跨域的场景。如果需要使用XMLHttpRequest跨域请求数据，需要通过**CORS头**支持。 JSONP用于跨域请求数据的场景，**只支持GET**请求。
2. XMLHttpRequest异常判断一般通过该对象的readystate和http状态码status来判断，JSONP的异常判断一般是onerror事件和超时timer来判断。

### readyState的取值
0：未初始化，尚未调用open()方法。
1：启动，已经调用open方法，但尚未调用send方法。
2：发送，已经调用send方法，但尚未接收到响应。
3：接受，已经接收到部分响应数据。
4：完成，已经接收到全部数据，并且已经可以在客户端使用了。

### AJAX
参数速记：TUDDSE （type, url, data, dataType, success, error）
优缺点：原生，基于XHR，架构不清晰，安全问题（CSRF）没有Promise

### AXIOS
参数速记：MUD （mehtod, url, data
优缺点：Promise API，直接处理JSON对象；内置防止客户端CSRF攻击，截取器（截取请求/响应），转换器（转换请求/响应）
速记：BIT

### FETCH
参数速记：U + MBHM （url, {method, body, header, mode}
优缺点：Promise API，JSON需要转换为String；不能用Abort，不能够对网络错误请求进行处理（返回400，500当正常的，不触发reject），不能传cookie
速记：ARC
