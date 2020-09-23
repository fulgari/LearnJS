// NewAndInstanceof.js

/*实现一个new*/
function new_(constructor, ...args) {
    const obj = {}
    obj.__proto__ = constructor.prototype
    const result = constructor.apply(obj, args)
    return typeof result === 'object' ? result : obj;
}

function Foo(name) {
    this.name = name;
    return {"name":"酒"} // 加这句和不加这句是两个结果，因为当构造函数返回的是一个“对象”时，会把这个对象作为new的返回，否则就返回new自动创建的obj那个对象
}

let o = new_(Foo, "Misaki")
console.log(o.name)

/*实现一个instanceof*/
function instanceof_(left, right) {
    const obj = right.prototype
    left = left.__proto__
    while(true) {
        if(left === null) {
            return false
        }
        if(obj === left) {
            return true
        }
        left = left.__proto__
    }
}