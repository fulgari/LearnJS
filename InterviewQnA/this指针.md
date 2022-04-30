JS中使用的是的静态作用域规则（lexical scoping）。
```
function foo() {
    console.log( a ); // 2
}
function bar() {
    var a = 3;
    foo();
}
var a = 2;
bar(); //2
```

但*this指针*除外，它是动态绑定的。

### 普通函数
this指向它的直接调用者，一个简单的方法就是看函数前面有没有点，有点就指向这个点前面的对象。如果是setTimeout这些就指向全局对象。

### 箭头函数
箭头函数的this指向函数所在的那个作用域。注意理解作用域，只有函数的大括号{}才能形成作用域，而对象的{}和if的{}都不构成作用域。

当我们使用`var log = console.log`这样的语句想使用console.log中的log方法时，会报错。原因是因为console.log中可能存在`this.xxx()`的语句，而在全局变量中却没有此类方法，因此报错。

只需要经该方法绑定到console中即可使用log代替console.log，即`var log = console.log.bind(console)`