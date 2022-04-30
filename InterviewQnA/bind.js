// bind.js

Function.prototype.bind2 = function() { //写在了Function原型上
	if(typeof this !== 'function') {
		throw new Error("")
	}
	var self = this // 因此，this指代原函数
	var context = [].shift.call(arguments) // context指代要被原函数绑定的对象
	var args = [].slice.call(arguments) // args指代参数
	return function() {
		self.apply(context, args.concat([].slice.call(arguments))) // 两个括号内都可以加参数，最后都会拼在一起
	}
}

/*测试*/
function func(x) {
	console.log(x, this.y)
}

func.bind2({y:'Boy'})('Girl')
func.bind2()('x', 'y')
func.bind2({x:'1', y:'2'})()

/*
output:
Girl Boy
x undefined
undefined 2
*/
