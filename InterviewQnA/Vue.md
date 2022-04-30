

单页应用的优缺点
computed 和 watch 的区别
v-for 和 v-if 的区别
双向绑定的原理：在组件初始化时去递归一个对象，给其中每一个属性都用 getter/setter 去挂载到实例的 this 上。
哪些操作不会触发视图更新：对象新属性的增加、数组元素的直接修改不会触发响应式机制
- Vue3使用了proxy来代替传统的双向绑定
组件通信的方法，父子、隔代、兄弟，如果能再说说Vuex就更不错了
nextTick是干嘛的
vue-router，history hash 的区别，需不需要后端配置，守卫，路由钩子
写一个通用组件需要考虑哪些问题

# 选项（实例中的key）
## 选项之数据相关
### data - 纯对象/函数
Vue 实例的数据对象，可以是对象或者返回一个对象的方法（用于组件，保证不同组件不会共享同一个数据对象）。
- Vue 将会递归 data 的 property 转换为 getter/setter，从而让 data 的 property 能够响应数据变化。
- `_`以及`$`开头的 property 不会被 Vue 实例代理

### props - 数组/对象
用于接受父组件的数据。
- 额外的语法，可添加选项进行过滤：type（数据类型）、default（指定默认值）、required（规定是否必填）、validator（验证函数，不符合将报错）

### propsData - 数组/对象
只用于 `new` 创建的实例中，不能用于 Vue.extend 创建的实例。

### computed - 对象（值是函数）
计算属性将会被混入到 Vue 实例中。所有的 getter/setter 的 this 上下文自动地绑定为 Vue 实例。
- 只计算一次，会被缓存
- 箭头函数的 `this` 不会指向组件的实例，可以将其实例作为函数的第一个参数来访问。用 `vm => vm.a` 来访问。

### methods - 对象（值是函数）
methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问到这些方法，或在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。

### watch - 对象（值是函数/string/对象/数组）
一个对象，键是用来观察的表达式，值是对应的回调函数。值也可以是方法名，或者包含选项的对象。
- Vue 实例在实例化时会调用 `$watch()`，遍历 watch 对象的每一个 property。
- 不能用箭头函数来定义 watch 函数，因为它限定了父作用域的上下文，因此会指向 undefined 而非 Vue 实例。


## 选项之 DOM 相关
### el - string（CSS选择器）/元素
提供一个在页面中已经存在的 DOM 元素作为 Vue 实例的挂载目标。
- 在实例挂载之后，可以用 `vm.$el` 访问它。
- 如果在实例化时存在这个选项，实例将立即进入编译过程。否则需要显式调用 `vm.$mount()` 手动开始编译。
- 只能在用 `new` 创建实例时生效

### template - string
用这里面的模板去替换掉挂载的元素内的 HTML，挂载元素的内容都将被忽略（除非模板的内容由分发插槽）。
- 如果模板值以 `#` 开始，它会被当做选择符，并使用匹配元素的 `innerHTML` 作为模板。

### render - (createElement: ()=>VNode) => VNode
字符串模板的代替方案，允许使用 JS 编写模板。该函数接受一个 `createElement` 方法作为第一个参数来创建 `VNode`。
- 如果组件是一个函数组件，渲染函数还会接受一个额外的参数 `context`，为没有实例的函数提供上下文信息。
- 优先级：render > template > $el 中的HTML

### renderError - (createElement: ()=>VNode) => VNode
当 `render` 函数遇到错误时，提供另外一种渲染输出。其错误会作为第二个参数传递到 `renderError`。这个功能配合 hot-reload 使用。

```Javascript
new Vue({
    render(h) {
        throw new Error('oops')
    },
    renderError(h, err) {
        return h('pre', { style: { color: 'red' }}, err.stack)
    }
})
```

## 选项之生命钩子
所有生命周期的钩子自动绑定到 `this` 上下文到实例中，因此我们可以访问数据，对 property 和方法进行运算。
- 这同时意味着我们*不能用箭头函数去定义一个生命周期方法*，因为箭头函数绑定了父上下文，因此 this 并不等于当前的 Vue 实例。
### 钩子们
- beforeCreate：实例初始化后，数据观测（data observer）和 event/watcher（事件配置）之前
- created：实例创建完之后，完成数据观测（data observer）、property和方法的运算、watch/event 的回调。尚未挂载，`$el` 目前尚不可用。
- beforeMounted：在挂载之前被调用，相关的 `render` 函数首次被调用。
- mounted：实例被挂载后调用，这时 `el` 被新创建的 `vm.$el` 替换了。如果根实例挂载到了一个文档内的元素，当 `mounted` 被调用时 `vm.$el` 也在文档内；`mounted` 不会保证所有的子组件都被挂载，如果希望整个视图都渲染完毕（子组件挂载完），可以在 `mounted` 内部使用 `vm.$nextTick`。
- beforeUpdate：数据更新时调用，发生在虚拟 DOM 打补丁之前，适合更新前访问现有 DOM，比如手动移除事件监听器。
- updated：数据更改导致虚拟 DOM 更新渲染和打补丁，在这些操作完了之后会调用该钩子；和 `mounted` 一样，`updated` 不能保证所有的子组件也都一起被重绘，因此要在内部用 `vm.$nextTick`。
- beforeDestroy：实例销毁之前，这时实例完全可用
- destroyed：实例销毁后使用，此时对应 Vue 实例的所有指令+事件监听器+子实例 都将被销毁。

## 选项之资源相关
### directives - 对象
指令包含 Vue 实例可用指令的哈希表。
- Vue 自带的两个语法糖（v-model/v-show）也是内置指令
- 使用 Vue.directive(name, { options }) 注册全局自定义指令
- 使用 directives 键注册
- 一个指令定义对象可以提供如下几个钩子函数（均可选）：
    - bind：只可调用一次，指令第一次**绑定**到元素时调用，用于初始化设置
    - inserted：被绑定元素插入父节点时调用（仅保证父节点存在，但不一定已被插入文档中）
    - update：所在组件的 VNode 更新时调用，但有可能发生在其子 VNode 更新之前。
    - componentUpdated：指令所在组件的 VNode **及其子组件**全部更新后调用。
    - unbind：只可调用一次，指令于元素解绑时调用。
- 指令的钩子函数参数：
    - el：指令绑定的哪个元素，可以用它来直接操作 DOM
    - binding：一个对象，包含 name、value（算出值）、oldValue（用于更新）、expression（不算出值）、arg（用冒号分开的）、modifiers（用`.`分开的） 这几个常用指令相关的变量
    - vnode：Vue 编译生成的虚拟节点
    - oldVnode：上一个虚拟节点，仅用于更新
### filters - 对象
包含 Vue 实例可用过滤器的哈希表。
- 参考 Vue.filter
### components - 对象
包含 Vue 实例可用组件的哈希表。
- 参考组件

## 选项之组合相关
### parent - Vue 实例
指定已创建实例的父实例，在两者之间建立父子关系。
- 子实例可以通过 `this.$parent` 访问父实例，子实例被推进父实例的 `$children` 数组中
### mixins - 对象的Array
`mixins` 选项接受一个混入对象的数组。这些混入对象可以像正常对象一样包含实例选项，并被合并到最终的选项中。
- 选用的是和 `Vue.extend()` 一样的选项合并逻辑：
    - 数据：内部递归合并，冲突时使用**组件**数据
    - 钩子函数：合并为一个数组，组件和 mixin 两者的钩子函数都被调用
    - 选项值：methods/components/directives 等，合并为一个对象，冲突时使用**组件**的键值对
- 全局混入 `Vue.mixin` 需要格外小心，因为会影响所有 Vue 实例
- 自定义合并策略 `Vue.config.optionMergeStrategies`
### extends - 对象/函数
允许声明拓展另外一个组件（可以是一个简单的选项对象/构造函数），而无需使用 `Vue.extend`，主要是为了方便拓展单文件组件。
- 类似 mixins
### provide - 对象/返回对象的函数 / inject - 数组/键值对
需要两个一起使用，目的是允许一个祖先组件向所有后代注入一个一代，不论层次。
`provide` 包含可注入其后代的 property。
`inject` 的选项为：一个字符串数组；一个对象，key 是本地的绑定名，value 可用注入内容中的一个 key/一个对象（有 from/default 的property）。
- 和 React 的上下文特性相似
- 主要用于开发高阶插件/组件库

## 选项之其他


# 实例上的
## 实例属性

## 实例方法之数据相关
### vm.$watch(expOrFn, cb, [options])
观察 Vue 实例上的一个表达式或者一个函数计算结果的变化。回调函数得到的参数为新值和旧值。
- 返回：一个方法，执行就能取消侦听
- 底层应该用 Watcher 收集依赖的处理，Watcher 类负责监听功能（普通数据是监听变化时触发，对象是替换为另外一个对象时触发）
### vm.$set(target, propertyName/index, value)
- 返回：设置的值
这是全局 `Vue.set` 的别名，用于向响应式对象中添加一个 property。（手动添加这个属性不会被监听哦）
### vm.$delete(target, propertyName/index)
这是全局 `Vue.delete` 的别名，用于删除对象的 property。

## 实例方法之事件相关
### vm.$on(event, cb)
监听当前实例上的自定义事件。事件可以由 `vm.$emit` 触发，回调函数会接受其所有额外参数。
- 底层应该用 element.addEventListener(event, fn, useCapture) 实现的
### vm.$once(event, cb)
只执行一次的 `vm.$on`
### vm.$off([event, cb])
- 无参，移除所有事件监听器
- 事件参数，移除该事件的所有监听器
- 事件与回调，只移除该事件的该回调的监听器
### vm.$emit(eventName, [args...])
触发当前实例上的事件，附加参数都会传给监听器回调。


# Vue指令
### v-bind
等价于 HTML Attribute 中的 Mustache 语法。
（运行中动态）添加属性 Attribute 或传输到子组件中的 Props 中的数据。

速记：BAP：v-Bind -> Attribute + Props

`<img v-bind:src='imageSource'>` 这句代码的意思是将变量 imageSource 的值动态地添加到 img 标签的 src 属性中去。

当属性名也需要动态指定时，需加上一个中括号：

`<img v-bind:[key]='imageSource'>` 
其中变量 key 需要在 js 代码中指定其值。

### v-model
用于表单数据的双向绑定，其实它就是一个**语法糖**，该语法糖背后做了这两个工作：
1. v-bind 绑定一个 value 属性
2. v-on 指令给当前元素绑定 `input` 事件。这里非常关键，因为我们可以在子组件中使用 `this.$emit('input', val)` 来响应该事件。

示例：
普通组件中
`<input v-model="inputValue>` 
相当于
`<input v-bind:value="inputValue" v-on:input="inputValue=$event.target.value">`

在自定义组件中
`<my-component v-model="inputValue"></my-component>`
相当于
`<my-component v-bind:value="inputValue" v-on:input="inputValue = arguments[0]"></my-component>`
这个时候，inputValue 接收的值就是 input 事件的回调函数的第一个参数，所以在自定义组件中，要实现数据绑定，还需要 $emit 去触发 input 的事件。`this.$emit('input', value)` 

### v-text
更新整个的 `textContent` ，如需部分更新，使用 `{{ Mustache }}` 语法

### v-html
更新元素的 `innerHTML` ，对应的字符串会被当做 HTML 代码渲染。注：这种做法很危险，会导致 XSS

eg:
```html
<p>Using mustaches: {{ rawHtml }}</p> <!-- 因为 Vue 双大括号会对 HTML 代码进行转码，结果显示 raw 字符串 -->
<p>Using v-html directive: <span v-html="rawHtml"></span></p> <!-- 直接渲染这句 HTML 代码-->
```

`rawHtml="<span style='color:red'>This should be red</span>"`

### v-show
有 DOM 结构，适合频繁切换条件的

### v-if
没有 DOM 结构，适合不经常切换条件的

### v-else / v-else-if
限制：前一兄弟元素必须有 `v-if` 或 `v-else-if`

### v-for
基于源数据多次渲染元素或模板。这个指令的值，必须采用特定的语法 `alias in expression`，为当前遍历的元素提供别名。

另外，也可以为**数组**索引指定别名（或者用于**对象**的键）：
`(cur, index) in items` -- 数组，从2.6开始，可以用 Map 和 Set 
`(val, key) in object` -- 对象
`(val, key, index) in object` -- 对象

如果需要强制使得元素重新排序，需要用特殊的 attribute `:key` 来提供一个排序提示：
```html
<div v-for="item in items" :key="item.id">
    {{ item.text }}
</div>
```

### v-on
缩写：@
能够绑定事件监听器。

在普通的元素上，**只能监听原生的 DOM 事件**。用在自定义元素组件上，也可以监听**子组件触发的自定义事件**。
