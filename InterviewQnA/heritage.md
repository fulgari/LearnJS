<!-- heritage.md -->


###在 JavaScript 可以有哪几种形式实现继承，各有什么优缺点？

类型					优缺点
构造函数模式			可以创建不同实例属性的副本，包括引用类型的实例属性，但是不能共享方法
原型模式				引用类型的属性对于实例对象而言共享同一个物理空间，因此可以共享方法
组合继承				属性的继承使用借用构造函数方法，方法的继承使用原型链技术，即解决了引用值类型共享的问题，又实现了方法的共享，但是子类的原型对象中还存在父类实例对象的实例属性
寄生组合继承			寄生组合式继承可以解决在继承的过程中子类的原型对象中还存在父类实例对象的实例属性的问题。【注1】
ES6的extends			继承的语法上不仅继承了类的原型对象，还继承了类的静态属性和静态方法

【注1】：组合继承已经可以解决大部分问题，但是也有缺陷，就是会**调用两次父类的构造函数**，一次是实现原型时使子类的原型等于父类的实例对象调用了父类构造函数（同时在子类的原型对象中还存在了父类实例对象的实例属性），一次是使用子类构造函数时调用了一次父类构造函数。