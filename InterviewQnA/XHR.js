// 只有在浏览器端运行才能够执行，因为 node 里面是无法创建 XHR 和 ActiveX 的
function createXHR() {
    // 检测原生 XHR 对象是否存在
    if(typeof(XMLHttpRequest) != 'undefined') {
        return new XMLHttpRequest()
    // 原生 XHR 不存在，则检测 ActiveX 对象
    } else if (typeof ActiveXObject != 'undefined') {
        if(typeof arguments.callee.activeXString != 'string') {
            var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'],
                i, len
            for(i=0, len=versions.length; i<len; i++) {
                try {
                    new ActiveXObject(versions[i])
                    arguments.callee.activeXString = versions[i]
                    break
                } catch(ex) {
                    // skip
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString)
    } else {
        throw new Error('No XHR object available')
    }
}

// 创建一个 XHR 对象的语句
var xhr = createXHR()

// 可以通过 XHR 的 readyState 属性监测当前 XHR 对象处于请求/响应的哪个阶段。（可取值有五个：0 not-inited, 1 opened-not-send, 2 send-no-response, 3 received-partly, 4 completed）
// 每次 readyState 改变时，会触发 readystatechange 事件，可以用 onreadystatechange 函数进行监听
xhr.onreadystatechange = function() {
    // xhr 异常判断：readyState 和 status
    if(xhr.readyState == 4) {
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            alert(xhr.responseText)
        } else {
            alert('request was unsuccessful: '+xhr.status)
        }
    }
}

// open(method, url, async) 方法
/**
 * 提供的 url 遵循同源策略
 * open 方法的调用不会真正发送请求，而是启动一个请求以备发送。发送得调用 send 方法。
 */
xhr.open('get', 'www.baidu.com', false)

// 发送消息
xhr.send('message')

// 在接收到响应之前，还能够用 abort() 中止异步请求；此后将无法访问该 xhr 对象的属性，由于内存原因不建议重用该 xhr 对象。
xhr.abort()