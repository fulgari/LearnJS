### 简介
在Vue的使用中，经常看见一些“方法”或者是“对象”，如data、methods、computed等。这些实际上是Vue实例的**选项**，或者说是它的属性。

### 数据和方法
1. 数据选项： data() { return {} } 或 data: {} 可接受的类型有对象和函数两种。
2. 属性选项： props: {} 指定键和默认值/必须/校验器，从父组件传输过来的数据
3. 方法选项： methods: { fn(){} }
4. 计算属性： computed() {}
5. 侦听属性： watch() {}

### DOM方法
1. 指定被挂载元素：三种方式。
    - `el: '#app'` --- CSS选择器
    - `el: document.getElementById('app)` --- DOM节点对象
    - `let handleMount = function(){ this.$mount('#app') }` --- 手动挂载
2. 视图的字符串模板
Vue实例中制定了template，将会把template的内容所代表的节点取出来并替换当前实例所挂载的那个原有DOM节点
`template: '<h1>template element</h1>'`
3. render函数
同样可以用于渲染视图，它提供了回调方法createElement以供创建DOM节点
*三个参数：HTML标签字符串，节点特性对象，子节点（们）
```
render(createElement) {
    return createElement('app', {slot:'fly-table'}, [createElement('h2', this.$slots.title)])
}
```

### 渲染优先级
el/render/template三者同时存在，render优先。
el/template两者共存，template

### filters
作用：用来过滤组件中的相关表达式的值。每户的value就是代标