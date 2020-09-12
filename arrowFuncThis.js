/**
 * 1.箭头函数：箭头函数的this是默认继承外部作用域的，且不能够rebind箭头函数的this
 * 2.普通函数：函数完整的调用方法是使用call方法，包括test.call(context, name)和obj.greet.call(context,name)，
 *   这里的context就是函数调用时的上下文（就是我平时所说的**直接调用**该普通函数的那个对象），也就是this，只不过这个this是可以通过call方法来修改的；
 *   构造函数稍微特殊一点，它的this直接指向new之后返回的对象；window.setTimeout()和window.setInterval()默认的是this是window对象。
 * # 对setTimeout等系统函数，里面的this都指向window
 * 3.匿名普通函数：因为是匿名函数，它的调用并没有绑定到任何一个上下文中（没有人能够**直接调用**匿名函数，除了window），因此它的this都指向window对象，严格模式下为undefined。
 */

let obj1 = function() {
  return {
    start: function() {
      console.log(this);
    }
  }
}

let obj2 = function() {
  return {
    start: ()=>{
      console.log(this);
    },
    timeout: ()=>setTimeout(()=>{console.log(this);}, 0)
  }
}

let o1 = obj1();
o1.start();
o1.start.call(o1); //这行代码是上一行代码实际上真正的本体，上一行代码实际上是一个简写（语法糖）。

let o2 = obj2();
o2.start(); //这行代码却不会被解析成o2.start.call(o2)，因为o2.start()是一个箭头函数，它会自动做一件事：自动绑定当前调用它的。
o2.start.call({a:1}); // 箭头函数不能够重新指定它的this的值。

o2.timeout(); //箭头函数的this默认**继承外层作用域的**，因此输出为window/global

