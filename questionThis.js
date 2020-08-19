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
a();
c();
b.a();
d(b.detail);
e();

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
