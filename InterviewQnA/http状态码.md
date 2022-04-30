<!-- http状态码.md -->

[http结构](./asset/http_request.png)

###http请求和响应结构
HTTP响应结构：状态行、响应头、响应体
###Get与Post的区别
1、GET中的总字符数是有限的（取决于服务器）；
2、用GET发送数据会追加到URL后面，暴露在浏览器地址栏，所以最好不要用GET请求发送账号、密码等隐私数据。
3、用GET，URL可以被手动输入，URL可以被存在书签里。
前两个是POST的优势，第三个是GET的优势。

#1 继续执行
100：继续
101：switching protocol 切换协议 *

#2 响应成功
200：ok 成功
201：created 在POST之后产生了表单 *
202：accepted 收到未处理 *
203：Non-authentification information 没有验证信息 *
204：No content 响应体为空 *

#3 重定向
300：multiple choice 多个选择
301：永久重定向
302：暂时重定向
303：see another 能够在另外一个url中得到相同响应
304：not modified 能够在缓存中获取

#4 客户端错误
400：Bad request 请求链接、参数错误
401：Unauthorized 需要身份验证
402：交易错误
403：Forbidden 权限不够，被服务器禁止
404：Not Found 请求资源不存在
405：Mathod Not Allowed 请求方法不允许
406：Not Accepted 不满足请求header头部条件 *
407：Proxy Authentication Required 代理需要身份验证
408：Request Timeout 客户端发送请求超时

#5 服务端错误
500：Internal Server Error 服务器内出错
501：Not Implemented 请求方法不被服务器支持 *
502：Bad Gateway 服务器作为网关，得到一个错误的响应（nginx中经常见到） *
503：Service Unavailable 服务器停机、维护
504：Gateway Timeout 服务器作为网关，响应超时 *
505：HTTP Version not support 不支持该http版本 *
