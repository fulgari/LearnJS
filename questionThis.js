/**
 * You should run this in the browser
 */
var name = 'Red';

function a() {
  var name = 'White';
  console.log(this.name);
}

function d(i){
  return i();
}

var b = {
  name: 'Yellow',
  detail: function() {
    console.log(this.name);
  },
  bibi: function() {
    return function() {
      console.log(this.name);
    };
  }
}

var c = b.detail;
b.a = a;
var e = b.bibi(); // e = function() {console.log(this.name);}   `this` will bind dynamicly
a(); // Red
c(); // b.detail() : Red
b.a(); // a() : Red **WRONG**: 这里的a作为对象的一个方法去直接调用，是指向b对象的。
d(b.detail); // b.detail() : Red
e(); // b.bibi()() : Red

/**
 * output:
 * Red
 * Red
 * Yellow
 * Red
 * Red
 */



 function f() {
   this.x = function(x) {
     return x;
   }
 }
 f();
// console.log(f.x(4)); // ERROR: no such function
 console.log(global.x(4));
