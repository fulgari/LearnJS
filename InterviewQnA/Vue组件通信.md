Vue 的框架实际上就是用一个个 JS 的对象（也叫 VUE 实例）去将项目的不同组件部分联合起来，该对象上的参数或属性都会加个`$`。


方法/事件的基础：
`target.addEventListener(type, listener, useCapture)` - 将指定的监听器（类似回调函数，但有一些选项）注册到EventTarget上，当该对象出发指定的事件时，指定的回调函数就会被执行。

VUE 实例上的方法/事件
1. `vm.$on(event, callback)` - 添加一个监听器，创建一个当前实例上的自定义事件（相当于自定义一个如 click、mouseover 这样的事件，只需要在 v-on: 后面加上该事件即可调用），**事件可以由 vm.$emit 触发**。回调函数会接收所有传入事件触发函数的额外参数。
2. `vm.$once()` - 监听一个自定义事件，但是只触发一次。一旦触发后，监听器就会被移除。
3. `vm.$off(event, callback)` - 移除自定义事件的监听器
4. `vm.$emit(eventName, [...args])` - 触发当前实例上的事件，附加参数都会传给 `vm.$on` 中的监听器回调。

### 组件间常见的通信方法
1. 父子： props / $emit自定义事件 
2. 兄弟： eventBus
3. 多级组件嵌套需要传递数据，仅传递不处理数据时： $attr / $listeners
4. 爷孙： provide / inject
5. 父子，在父组件直接取到子组件的方法： $ref
6. vuex