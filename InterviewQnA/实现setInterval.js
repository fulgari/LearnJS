// 实现setInterval.js


function mySetInterval(fn, wait) {
	/*用命名函数*/
	/*
	setTimeout(function cb(){ 
		fn()
		setTimeout(cb, wait)
	}, wait)
	*/
	/*用arguments.callee*/
	setTimeout(function (){
		fn()
		setTimeout(arguments.callee, wait)
	}, wait)

	/*注意哈，这里外层的setTimeout里的匿名函数不能替换为箭头函数，因为：箭头函数不能够拥有自己的this、arguments、super和new.target*/

}

let count = 0
mySetInterval(()=>console.log('ok'+count++), 1000)

