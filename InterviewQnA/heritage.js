// heritage.js

/*构造继承*/
function Person1(name) {
	this.name = name
}
function Student1(name, age) {
	Person1.call(this, name)
	this.age = age
}
//能复用父类构造器，但没原型链
var s1 = new Student1("John") 
console.log(s1.name)
console.log(s1 instanceof Person1)


/*原型继承*/
function Person2() {
	this.name = "Theo"
}
function Student2(age) {
	this.age = age
}
Student2.prototype = new Person2()
//和构造继承反过来：有原型链，但不能用父类构造器
var s2 = new Student2(12)
console.log(s2.name)
console.log(s2 instanceof Person2)


/*组合继承*/
function Person3(name) {
	this.name = name
}
function Student3(name, age) {
	Person3.call(this, name)
	this.age = age
}
Student3.prototype = new Person3()
// 既有原型链，又能复用父类构造函数
var s3 = new Student3("Aria")
console.log(s3.name)
console.log(s3 instanceof Person3)
