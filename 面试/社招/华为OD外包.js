/**
 * 消消乐游戏
 * @param {*} string
 * @returns
 */
const solution1 = (string) => {
  let str = string.slice(0, 100);
  const dedup = (str) => {
    let res = str.slice();
    for (let i = str.length - 1; i > 0; i--) {
      const cur = str[i];
      const prev = str[i - 1];
      if (cur === prev) {
        res = str.slice(0, i - 1) + str.slice(i + 1);
      }
    }
    return res === str ? str : dedup(res);
  };
  return dedup(str).length;
};

// console.log(solution1("mMbccbc")); // (mMc) res = 3

/**
 * 求字符串中所有整数的最小和
 * @param {*} string
 * @returns
 */
const solution2 = (string) => {
  let str = string.slice();
  let res = 0;
  const negs = [];
  str = str.replace(/-[0-9]+/g, (match) => {
    negs.push(
      parseInt(match)
    ); /**关键：处理字符串中的负数（使负数尽可能大，正则直接找，贪婪） */
    return "";
  });

  for (let i = 0; i < str.length; i++) {
    if (/[0-9]/.test(str[i])) {
      res += parseInt(
        str[i]
      ); /**关键：处理字符串中的正数（使正数尽可能小，逐个加） */
    }
  }

  negs.forEach((neg) => {
    res += neg;
  });
  return res;
};

// console.log(solution2("bb12-34aa-1")); // (1+2-34-1) res = -32

/**
 * 相同数字组成图形的周长
 */
const solution3 = (str) => {
  const line = str.split(" ").map((i) => parseInt(i));
  const pattern = line.shift();
  const arr = [];
  for (let i = 0; i < line.length; i += 2) {
    arr.push([line[i], line[i + 1]]);
  }
  const sum = arr.length * 4;
  let sub = 0;

  const checkIsInside = (arr) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
      const [x, y] = arr[i];
      const count =
        isInside(x - 1, y) +
        isInside(x + 1, y) +
        isInside(x, y - 1) +
        isInside(
          x,
          y + 1
        ); /**关键：判断上下左右的单元格是否在图形内部，如果在就需要减掉对应的边长 */
      if (isInside(x, y)) {
        res += count;
      }
    }
    return res;
  };

  const isInside = (x, y) => {
    for (let i = 0; i < arr.length; i++) {
      const [a, b] = arr[i];
      if (x === a && y === b) {
        return true;
      }
    }
    return false;
  };

  sub = checkIsInside(arr);
  return sum - sub;
};

// console.log(solution3("1 1 3 2 2 2 3 2 4 3 2 3 3 3 4 4 1 4 2 4 3 4 4 5 2 5 3"));
console.log(
  solution3(
    "2 3 7 3 8 4 5 4 6 4 7 4 8 5 4 5 5 5 6 5 7 5 8 6 4 6 5 6 6 6 7 6 8 7 4 7 5 7 6 7 7 7 8"
  )
);
