<!-- promise.md -->

要想自己实现一个Promise，我们首先要对Promise的用法有所了解；

###Promise.resolve的特点：
1. 参数是一个 Promise 实例, 那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
2. 如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。

###Promise.all的特点：
1. Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
2. 返回值组成一个数组
3. p1、p2、p3中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

###Promise.race的特点：
1. Promise.race方法的参数与Promise.all方法一样，如果不是 Promise 实例，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
2. 返回那个率先改变的 Promise 实例的返回值


###API
1. promise.all(iterable) 所有都resolve才返回的error，如果reject会返回这个error
2. promise.allSettled 所有的都结束（resolve或reject）