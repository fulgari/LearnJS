const { get } = require("http");

function getDay(y, m, d, wd, yy, mm, dd) {
    let d1 = new Date(y, m+1, d);
    let d2 = new Date(yy, mm+1, dd);

    let curDay = wd;
    let curDate = new Date(+d1);
    let lastMonth = curDate.getMonth();
    let startDay = wd;
    while(+curDate < +d2) {
        curDate = new Date(+curDate + 1000*60*60*24);
        curDay = (curDay+1) % 7;
        if(curDate.getMonth() !== lastMonth) {
            curDay--;
            lastMonth = curDate.getMonth();
        }
    }


    return curDay;
}
// console.log(getDay(2020, 8, 10, 3, 2020, 8,11));

function cal(str) {
    let stack = [];
    if(str.match(/\(.*\)/)) {
        str = str.replace(/(\(.*\))/, cal($1));
    }
    let arr = str.split("");
    let cur;

    let stack = [];
    let sign = "";
    let res = 0;
    let num = [];
    while(cur.match(/[0-9]/)) {
        num.push(cur);
        if(!arr[0].match(/[0-9]/)) {
            break;
        }
    }
    let res = num.join('');
    while(cur = arr.shift()) {

        if(cur.match(/\*|\+/)){
            sign = cur;
        }
        num = [];
        while(cur.match(/[0-9]/)) {
            num.push(cur);
            if(!arr[0].match(/[0-9]/)) {
                break;
            }
        }
        let num2 = num.join('');

        if(sign === '+') {
            res =  res + num2;
        } 
        if(sign === '*') {
            res =  res * num2;
        }
    }
    return res;
}