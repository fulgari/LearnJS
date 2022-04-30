function getPair(n) {
    let total = [];
    let cur, reversed;
    for(let i=1; i<n/4; i++){
        cur = i;
        reversed = getReverse(cur);
        if(cur*4 === reversed) {
            total.push(cur);
        }
    }
    console.log(total.length);
    while(total.length > 0) {
        let cur = total.shift();
        console.log(cur + " " + cur*4);
    }
}

function getReverse(num) {
  let res = 0, cur;
  while(num>1) {
    cur = num % 10;
    res += cur;
    num /= 10;
    num = Math.floor(num);
    res *= 10;
  }
  res /= 10;
  res += num;
  return res;
}

var n = 10000000;
getPair(n);




let line;
let map;
let start;
let str = "";

for(let i=0; i<n; i++){
    line = read_line();
    let start = line.split(" ")[0];
    let end = line.split(" ")[1];
    if(map[start]) {
        map[start].push(end);
    } else {
        map[start] = [end];
    }
}
consoloe.log(map)