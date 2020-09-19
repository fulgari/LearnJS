// promise.js

/*一个简陋的Promise*/

//Promise.all // 需要用一个result数组存结果，一个count在promises[i]的then里计数并把结果存到result[i]中，count等于promises的长度时，可以输出result了。

//Promise.race // 一旦其中一个有结果了就resolve/reject的了，然后**return**整个函数
/*
Promise.all_ = function(promises) {
	return new Promise((resolve, reject)=>{
		promises = Array.from(promises)
		if(promises.length===0) {
			resolve([])
		}
		var res = []
		var count = 0
		for(let i=0; i<promises.length; i++) {
			// promises[i]也可能是普通值，因此要用Promise.resolve包起来
			Promise.resolve(promises[i]).then((data)=>{
				res[i] = data
				++count
				if(count === promises.length) {
					// 所有的promise状态都是fulfilled，promise.all返回的实例才变成fulfilled状态
					resolve(res)
				}
			}, (err)=>{
				reject(err)
				return
			})
		}
	})
}

Promise.race_ = function(promises) {
	return new Promise((resolve, reject)=>{
		promises = Array.from(promises)
		if(promises.length===0) {
			return
		}
		for(let i=0; i<promises.length; i++) {
			Promise.resolve(promises[i]).then((data)=>{
				resolve(data)
				return
			}, (err)=>{
				reject(err)
				return
			})
		}
	})
}
*/
/********************/
/* Promise类完整实现 */
/********************/
//ES6 的模块自动开启严格模式，不管你有没有在模块头部加上 use strict;。
class Promise {
	constructor(fn) {
		/*note: Promise核心的私有变量(用this)：状态+两个list */
		this.status = 'pending' //三种状态：pending，fulfilled，rejected
		this.resolveList = [] //成功后的回调函数
		this.rejectList = [] //失败后的cb

		/*note：用下面自己写的resolve/reject作参（注意要bind(this)否则这两个函数内的this指针不是指向new出来的Promise而是window或(strict模式)undefined）调用fn*/
		fn(this.resolve.bind(this), this.reject.bind(this))
	}

	// then(success callback, failure callback)
	then(scb, fcb) {
		if(scb) {
			this.resolveList.push(scb)
		}
		if(fcb) {
			this.rejectList.push(fcb)
		}
		return this //返回当前Promise对象
	}

	catch(cb) {
		if(cb) {
			this.rejectList.push(cb)
		}
		return this
	}

	resolve(data) {
		if(this.status !== 'pending') {
			return
		}
		this.status = 'fulfilled'
		setTimeout(() => {
			this.resolveList.forEach(s => {
				s(data)
			})
		})
	}

	reject(err) {
		if(this.status !== 'pending') {
			return
		}
		this.status = 'rejected'
		setTimeout(() => {
			this.rejectList.forEach(f => {
				f(err)
			})
		})
	}


    /**
     * 实现Promise.resolve
     * 1.参数是一个 Promise 实例, 那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
     * 2.如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。
    */ 
	static resolve(data) {
		if(data instanceof Promise) {
			return data
		} else {
			return new Promise((resolve, reject) => {
				resolve(data)
			})
		}
	}

	static reject(err) {
		if(err instanceof Promise) {
			return err
		} else {
			return new Promise((resolve, reject) => {
				reject(err)
			})
		}
	}
    /**
     * 实现Promise.all
     * 1. Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
     * 2. 返回值组成一个数组
    */
	static all(promises) {
		return new Promise((resolve, reject) => {
			promises = Array.from(promises)
			let count = 0
			let res = []
			let length = promises.length

			if(length === 0) {
				resolve([])
			} else {
				for(let i=0; i<length; i++) {
					// 考虑到promise[i]可能是thenable对象也可能是普通值
					Promise.resolve(promises[i]).then(data => {
						res[i] = data
						if(++count === length) {
							resolve(res)
						}
					}, err => {
						reject(err)
						return //Promise.all一旦有一个err就会reject(err)并直接返回
					})
				}
			}

		})
	}
    /**
     * 实现Promise.race
     * 1. Promise.race方法的参数与Promise.all方法一样，如果不是 Promise 实例，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
     * 2. 返回那个率先改变的 Promise 实例的返回值
    */
	static race(promises) {
		return new Promise((resolve, reject) => {
			promises = Array.from(promises)
			if(promises.length === 0) {
				return
			} else {
				for(let i=0; i<promises.length; i++) {
					Promise.resolve(promises[i]).then(data => {
						resovle(data)
						return
					}, err => {
						reject(err)
						return //一旦有resolve或reject都会直接返回，停止执行了
					})
				}
			}
		})
	}
}

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('resolve');
        resolve(222);
    }, 1000)
})

p.then(data => {
    setTimeout(() => {
        console.log('data', data);
    })
    return 3333;
}).then(data2 => {
    console.log('data2', data2);
}).catch(err => {
    console.error('err', err);
});

/*练习默写*/
class Promise1{
	constructor(fn) {
		this.status = 'pending'
		this.resolveList = []
		this.rejectList = []
	}
	then(scb, fcb) {
		if(scb) {
			this.resolveList.push(scb)
		}
		if(fcb) {
			this.rejectList.push(fcb)
		}
		return this
	}
	catch(fcb) {
		if(fcb) {
			this.rejectList.push(fcb)
		}
		return this
	}
	resolve(data) {
		if(this.status !== 'pending') {
			return
		}
		this.status = 'fulfilled'
		setTimeout(()=>{
			this.resolveList.forEach(s=>{
				s(data)
			})
		})
	}
	reject(err) {
		if(this.status !== 'pending') {
			return
		}
		this.status = 'rejected'
		setTimeout(()=>{
			this.rejectList.forEach(f=>{
				f(err)
			})
		})
	}
	static resolve(data) {
		if(data instanceof Promise) {
			return data
		} else {
			resolve(data)
		}
	}
	static reject(err) {
		if(err instanceof Promise) {
			return err
		} else {
			reject(err)
		}
	}
	static all(promises) {
		return new Promise((resolve, reject)=>{
			promises = Array.from(promises)
			let count = 0
			let length = promises.length
			let result = []
			for(let i=0; i<length; i++) {
				Promise.resolve(promises[i]).then(data=>{
					result[i] = data
					++count
					if(count === length){
						resolve(result)
					}
				}, err=>{
					reject(err)
					return
				})
			}
		})
	}

	static race(promises) {
		return new Promise((resolve, reject)=>{
			promises = Array.from(promises)
			let length = promises.length
			for(let i=0; i<length; i++) {
				Promise.resolve(promises[i]).then(data=>{
					resolve(data)
					return
				}, err=>{
					reject(err)
					return
				})
			}
		})
	}
		
}