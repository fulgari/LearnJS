/**
 * 简单硬编码
 */
function sumCurry() {
  let _args = [].slice.call(arguments);

  let _addFn = function() {
    _args.push(...arguments);
    return _addFn;    
  }

  _addFn.toString = function() {
    return _args.reduce((a,b)=>(a+b));
  }

  return _addFn;
}

console.log(sumCurry2(1)(2)(3)(4,3).toString());

/**
* 传入一个func
*/
function curry(fn) {
  var _args = [];

  var _fn = function() {
    _args.push(...arguments);
    return _fn;
  }

  _fn.toString = function() {
    if(_args.length < _fn.length) return "less arguments than expected!";
    return fn.call(this, ..._args);
  }

  return _fn;
}

console.log(curry((a,b,c)=>a+b+c)(1)(5)(9));