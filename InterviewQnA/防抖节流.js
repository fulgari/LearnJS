// 防抖节流.js

function debounce(fn, delay) {
	var timeout
	return function() {
		var self = this
		var args = arguments
		clearTimeout(timeout)
		timeout = setTimeout(function() {
			fn.call(this, ...args)
		}, delay)
	}
}

function throttle(fn, delay) {
	var last = 0
	return function() {
		var self = this
		var args = arguments
		var now = +new Date()
		if(now-last > delay) {
			fn.apply(self, args)
			last = now
		}
	}
}
