<!-- https.md -->

## 特点

1. TCP 是一个面向连接的、可靠的、基于字节流的*传输层*协议。
2. 而 UDP 是一个面向无连接的*传输层*协议。(就这么简单，其它 TCP 的特性也就没有了)。

（http/https 都是*应用层*协议，还有如 DNS/FTP/SMTP/SNMP/Telnet 等常见到的协议其实就是应用层的）

- https 使用了非对称加密算法来传输密钥（并且生成的一个随机数）
- https 使用对称算法传输数据
- https 传输性能比 http 低，加密算法耗时
- https 不推荐在公共服务中使用自签名证书。通常 SSL 证书是需要专业权威的证书颁发机构（CA）来生成的，如果是自签名证书安全隐患大：1024 位 RSA 算法不安全；连接可能被黑客劫持；浏览器警告；无法像收信任证书一样被撤销。
- HTTPS 无法完全避免中间人攻击。比如使用了自签名证书就容易被攻击

## 过程

1. （非对称加密）客户端向服务端请求，如果是 http 请求，服务端可能会重定向到 https；然后服务端收到请求后，返回公钥。
2. 客户端收到公钥，和证书中的公钥进行比对，确定公钥来自于服务端的身份。
   1. 证书 = 服务器公钥 + 服务器名称、主机名 + 颁发机构名称、签名等，即证书为加强版公钥
   2. 证书需要向 Certificate Authority 购买，通常大 CA 的证书内置在浏览器里的证书池里，可以直接使用。
3. 客户端生成随机数，并使用服务端公钥进行加密，传输回服务端
4. 服务端收到数据后，使用服务端私钥进行解密，获取客户端随机数，并使用该随机数对应用数据进行对称加密
5. （对称加密）双端使用随机数进行传输数据
