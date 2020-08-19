
function r(x) {
  return x;
}

function f(x) {
  console.log("args:"+Array.from(x))
  x[0] = x[0] + ">";
  return x;
}

function o() {
  var temp = r;
  r = function() {
    return temp.apply(this, f(arguments)); // `this` in temp is changed each call in the loop, return the value calculated
  }
}

function a() {
  o();
  console.log(r("="));
}

for(var i=0; i<10; i++){
  a();
}

