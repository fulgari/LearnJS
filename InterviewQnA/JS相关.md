<!-- JS相关.md -->

###JavaScript 中数组是如何存储的？
1. 同种类型数据的数组分配连续的内存空间
2. 存在非同种类型数据的数组使用**哈希映射**分配内存空间【注1】

【注1】：哈希存储的键冲突（散列碰撞）可以有哪些解决方案（开链法、线性探测法、红黑树等）？

###如何获取首屏时间和白屏时间？
白屏时间 = 地址栏输入网址后回车 - 浏览器出现第一个元素
首屏时间 = 地址栏输入网址后回车 - 浏览器第一屏渲染完成

Performance接口可以获取到当前页面中与性能相关的信息。该类型的对象可以通过调用只读属性 Window.performance 来获得。

- 白屏时间：`performance.timing.responseStart - performance.timing.navigationStart`
- 首屏时间：
```
window.onload = () => {
    new Date() - performance.timing.responseStart
}
```
