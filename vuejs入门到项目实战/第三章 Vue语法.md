### 插值
- 文本插值：双大括号{{}}
- HTML插值：v-html=插值的html字符串变量 
文本插值会被解析成节点的文本内容，而HTML的插值中的代码被渲染为视图节点。HTML插值是对文本插值的补充和拓展。Vue可以解析被绑定的内容为DOM节点，从而实现动态渲染视图的效果。
注：少用HTML，多用template；绝对不要相信用户的输入数据（XSS）；只对可信内容使用HTML插值。

### 绑定
- 属性绑定：v-bind绑定DOM节点的属性，属性也可以绑定变量、表达式、执行函数等
- 类名和样式绑定： 由于类名class和样式style在节点属性中是比较奇怪的存在，虽然他们的类型都是字符串，但类名实际上是由数组拼接而成的，而样式则是由对象属性键值对拼接而成的。

类名绑定。使用`bind:`绑定，简写`:`。语法`:class=变量名`

    ```
    <style>
        .color-gray {color: gray;}
        .size-18 {font-size: 18px;}
        .style-itatlic {style: italic}
    </style>
    <div id="app">
        <p class="color-gray size-18 style-italic">Hustle world!</p>
        <p :class="classStr">Hustle world!</p>
        <p :class="classArr">Hustle world!</p>
        <p :class="classObj1">Hustle world!</p>
        <p :class="classObj2">Hustle world!</p>
    </div
    <script>
        let vm = new Vue({
            el: '#app',
            data() {
                return {
                    classStr: 'color-gray size-18 style-italic',
                    classArr: ['color-gray size-18 style-italic'],
                    classObj1: {
                        'color-gray': 1,
                        'size-18': true,
                        'style-italic': {}
                    },
                    classObj2: {
                        'color-gray': 0,
                        'size-18': null,
                        'style-italic': false
                    }
                }
            }
        })
    </script>
    ```

    使用对象进行绑定类名的时候，应该把对象的键作为类名，将对象的值作为判断当前键能否被绑定到类名上。
2. 样式绑定：方式和类名类似，但是**不能够接受数组**绑定（因为style是通过键值对方式绑定的），语法：`:style=变量名`

事件绑定。使用`v-on:`来进行，缩写为`@`

### 修饰符
JS事件开发过程中，有event.preventDefault()（阻止节点默认行为）和event.stopPropagation()（阻止事件冒泡）.

|名称|说明|
|---|----|
|.stop|事件发生时，阻止事件冒泡|
|.prevent|事件触发时，阻止元素的默认行为(比如说，submit默认会导致页面刷新)|
|.capture|当事件触发时，阻止事件捕获|
|.self|限制事件仅作用于自身|
|.once|事件仅被触发一次后，解除监听|
|.passive|移动端，限制事件永不调用preventDefault|

- 有多个修饰符时，响应代码会按照排列顺序依次产生。如@click.prevent.self，点击后Vue会先执行event.preventDefault()，阻止了元素上所有点击事件，然后执行self限定只能对元素自身使用（其实是相当于没写的）。而@click.self.prevent由于事先配置self，使用只会阻止对元素自身的点击。

按键修饰符： Vue为一些常用的按键键值进行了配对，只需要写他的别名就能够监听他是否被按下
如：`<input type="text" @keyup.enter="console.log($event)"`
别名修饰符  键值修饰符
.delete     .8/.46
.tab        .9
.enter      .13
.esc        .27
.space      .32
.left       .37
.up         .38
.right      .39
.down       .40

按键的别名和键值都是能够作为修饰符的。

组合修饰符：实现了一些系统按键如ctrl、alt、shift、meta(即win键）的监听
`<h1 @mousepressed.ctrl="函数名">`