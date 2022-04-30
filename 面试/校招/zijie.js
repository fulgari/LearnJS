async function fn1(next) {
  console.log("1");
  return next();
}

async function fn2(next) {
  console.log("2");
  await next();
  console.log("4");
}

async function fn3(next) {
  console.log("3");
  return next();
}

function compose(arr) {
  return function() {
    let dispatch = function(i) {
      let cur = arr[i];
      if(!cur) return Promise.resolve();
      return Promise.resolve( // 为什么这里放Promise.resolve?
        cur(
          function next(){
            return dispatch(i+1);
          }
        )
      )
    }
    return dispatch(0);
  }
}

/*
function compose(arr) {
  return function() {
    while(arr.length>0) {
      let p = new Promise(arr.shift());
      let last = arr[0];
      setTimeout(()=>{
        p.then(()=>last);
      }, 0);
    }
  }
}
*/

let fn = compose([fn1, fn2, fn3]);
fn();