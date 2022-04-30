/**
 * XML 的 get 和 post
 */
function reqListener() {
    var data = JSON.parse(this.responseText)
    console.log(data)
}

function reqError(err) {
    console.log('Fetch Error :-S', err)
}

var oReq = new XMLHttpRequest()
oReq.onload = reqListener
oReq.onerror = reqError
// XML get
oReq.open('get', './api/some.json', true)
oReq.send()

// XML post
oReq.open('post', url, true)
oReq.send("hello")

/**
 * AJAX 的 get 和 post
 */
function sendAjax() {
    let json = {
        user: "jack",
        password: "123"
    }
    $.ajax({
        type: "post",
        url: "http://localhost:8080/test/params",
        data: JSON.stringify(json),
        dataType: "json",
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log(error)
        }
    })
}

function getAjax() {
    $.ajax({
        type: "get",
        url: "http://localhost:8080/test/params",
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log(error)
        }
    })
}

/**
 * AXIOS 的 get 和 post
 */

// axios API 有两种用法：axios(config) 以及 axios(url[, config])
function getAxios() {
    axios({
        method: "get",
        url: "http://localhost:8080/test/params",

    }).then(function (response) {
        console.log(response.status)
    })
}
/**
 * 《config》
{
    // `url` 适用于请求服务器的 url
    url: "/user",

    // `method` 是创建请求时使用的方法
    method: "get", // 默认是 get

    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 url
    baseURL: "https://some-domain.com/api/",

    // 转换请求数据。`transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 PUT/POST/PATCH 这三个请求方法，后面数组中的函数必须返回一个字符串，或 ArrayBuffer / Stream
    transformRequest: [
        function (data) {
            // 对 data 进行转换处理
            return data;
        }
    ],

    // 转换响应数据，在传输到 then/catch 前，允许对数据进行修改
    transformResponse: [
        function (data) {
            // 对 data 进行转换处理
            return data;
        }
    ],

    // `params` 是一个对象（无格式对象/URLSearchParams对象），它包含与请求一起发送的 URL 参数
    params: {
        ID: 123
    },

    // 对 `params` 进行序列化的函数
    paramsSerializer: function(params) {
        return Qs.stringify(params, {arrayFormat: "brackets"})
    },

    // `data` 是作为请求主体被发送的数据
    // 只适用于 PUT/POST/PATCH 三个请求方法
    // 可用数据类型：
    // 1. string/plainObject/ArrayBuffer/ArrayBufferView/URLSearchParams
    // 2. 浏览器专属：FormData/File/Blob
    // 3. Node 专属：Stream
    data: {
        firstName: "Fred"
    },

    // 如果请求超过指定毫秒数请求将被中断，0 表示无超时时间
    timeout: 1000,

    // 跨域时是否需要凭证
    withCredentials: false, // 默认的

    // `adapter` 允许自定义处理请求，返回一个 Promise 并应用一个有效的响应
    adapter: function(config) {
        // some code
    },

    // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
    // 会设置一个覆盖当前的 `Authorization` 头
    auth: {
        username: "johndoe",
        password: "johndoe"
    },

    // `responseType` 指定服务器响应的数据类型，可以是 arraybuffer/blob/document/json/text/stream
    responseType: "json", // 默认的

    // `xsrfCookieName` 用作 xrsf token 的值的 cookie 的名称
    xsrfCookieName： "XSRF-TOKEN", // default

    // `xsrfHeaderName` 用作 xsrf token 的值的 HTTP 头的名称
    xsrfHeaderName: "X-XSRF-TOKEN", //default

    // `onUploadProgress` 用来为上传处理进度事件
    onUploadProgress: function(progressEvent) {
        // 对原生事件的处理
    },

    // `onDownloadProgress` 允许为下载处理及你都事件
    onDownloadProgress: function(progressEvent) {
        // 对原生事件的处理
    },    

    // 定义允许的响应内容的最大尺寸
    maxContentLength: 2000,

    // validateStatus 定义对于给定的 HTTP 响应状态码是 resolve 或 reject 的 Promise
    // 如果 validateStatus 返回 True，则 Promise 被 resolve，否则 reject
    validateStatus: function (status) {
        return status >= 200 && status < 300; // default
    },

    // 定义在 node.js 中 follow 的最大重定向数目。置0就不会 follow 任何重定向
    maxRedirects: 5, // default

    // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。
    // `keepAlive` 默认没有启用
    httpAgent: new http.Agent({ keepAlive: true }),
    httpsAgent: new https.Agent({ keepAlive: true }),

    // `proxy` 定义代理服务器的主机名称和端口
    // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
    // 这将会设置一个 `Proxy-Authorization` 头，复写掉已有的通过 `header` 设置的自定义 `Proxy-Authorization` 头
    proxy: {
        host: "127.0.0.1",
        port: 9000,
        auth: {
            username: "mickymike",
            password: "mickymike"
        }
    },

    // 指定用于取消请求的 cancel token
    cancelToken: new CancelToken(function (cancel) {
    })
}
 */

/**
 * 《response》或者《error》
 * 某个请求的响应中（then里面回调函数接受的参数 response，或者是 ），包含以下信息：
    {
        // `data` 由服务器提供的响应
        data: {},

        // `status` 来自服务器响应的 HTTP 状态码
        status: 200,

        // `statusText` 来自服务器响应的 HTTP 状态信息
        statusText: 'OK',

        // `headers` 服务器响应的头
        headers: {},

        // `config` 是为请求提供的配置信息
        config: {}
    }
 */
// 速记：DSSHC，diss 这些 HC 不够的企业


function postAxios() {
    axios({
        method: "post",
        url: "http://localhost:8080/test/params",
        data: {
            firstname: "Fred",
            lastname: "Bills"
        }
    })
}

// 此外，axios 为所有的请求方法都提供了别名
// 在使用别名时，url、method、data 这些属性都不必放在 config 中了
/**
 * axios.request(config)
 * axios.get(url[, config])
 * axios.delete(url[, config])
 * axios.head(url[, config])
 * axios.post(url[, data[, config]])
 * axios.put(url[, data[, config]])
 * axios.patch(url[, data[, config]])
 */

// 处理并发请求的助手函数
/**
 * axios.all(iterable)
 * axios.spread(callback)
 */

// 可以通过自定义配置新建一个 axios 实例
/**
 * axios.create([config])
 * */
var inistance = axios.create({
    baseURL: "https://some-domain.com/api/",
    timeout: 1000,
    headers: {"X-Custom-Header": "foobar"}
})

// 配置默认值 defaults
axios.defaults.baseURL = "https://api.example.com"
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = "application/x-www-urlencoded"

// 拦截器
// 添加对请求的拦截器，如果是对响应的拦截器，只需把 request 改成 response
axios.interceptors.request.use(function(config) {
    // 再发送请求之前做些什么
    return config
}, function(error) {
    // 对请求错误处理
    return Promise.reject(error)
})

/**
 * Fetch 的 get 和 post
 */

// Fetch 语法： fetch(input[, init]).then(scb).catch(fcb)
// 返回：一个 Promise，resolve 时回传 Response 对象
// 在处理 Response 对象时，需要对它使用 .json() 方法去解析返回的文本来获得 json 对象
// Fetch 不是基于 XHR 的，而是基于 Promise 的，使用的是原生的 JS

// fetch get
fetch("./api/some.json", {
    method: "GET",
    headers: {
        "Accept-Charset": "UTF-8",
        "Content-Type": "application/json"
    },
    mode: "cors"
}).then(function(response){
    console.log(response.headers.get('Content-Type'))
    console.log(response.headers.get('Accept-Charset'))

    console.log(response.status)
    console.log(response.statusText)
    console.log(response.type)
    console.log(response.url)

    return response.text()
}) 

/**
 * input: 定义要获取的资源。可以是一个 USVString 字符串，包含要获取资源的 URL。一些浏览器会接受 blob 和 data；也可以是 Request 对象。
 * init: 一个配置项对象，包括所有对请求的设置。如下：
 {
    method: "GET",
    headers: {
        "Accept-Charset": "UTF-8",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({a:1}), // 请求的 body 信息，因为是请求体，因此需要 stringify 的
    mode: cors, // 请求的模式，如 cors、no-cors、same-origin
    credentials: include, //请求的 credentials，如 omit、same-origin、include。为了在当前域名内自动发送 cookie，必须设置这个选项。
    cache: default, // 请求的 cache 模式，default、no-store、reload、no-cache、force-cache、only-if-cached
    redirect: follow, // 可用的redirect模式，follow（自动重定向）、error（如果产生重定向将自动终止并抛出一个错误）、manual（手动处理重定向）
    referer: no-referer, // 是否显示用户来源的网站，默认 client
    referrerPolicy: origin, // 指定了 HTTP 头部 referer 字段的值，可以为：no-referrer、no-referrer-when-downgrade、origin、origin-when-cross-origin、unsafe-url
    integrity: xxx // 包含请求的 subresource integrity 值 （ 例如： sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=）
 }
 */

//fetch post
fetch(url, {
    method: 'post',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: "foo=bar&lorem=ipsum"
})
.then(json)
.then(function (data) {
    console.log('Request succeeded with JSON response', data)
})
.catch(function (error) {
    console.log('Request failed', error)
})