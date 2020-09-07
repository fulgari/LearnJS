const { clear } = require("console");

let debounce = (fn, delay) => {
  var last;
  return function() {
    var ctx = this, args = arguments;
    clearTimeout(last);
    last = setTimeout(function(){
      fn.apply(ctx, args);
    }, delay);
  }
}

let throttle = (fn, delay) => {
  var last = 0;
  return function() {
    var curr = +new Date();
    if(curr-last > delay) {
      fn.apply(this, arguments);
      last = curr;
    } 
  }
}
