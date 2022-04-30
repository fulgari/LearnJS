let arr = [5, 3, 4, 2, 1];


// 交换
let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 三难兄难弟之一，相当于和当前元素的下一个最小的交换（而不是辗转向后冒泡）
// 任何情况O(n^2)
let selectSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let index = i; //存储最小的值的index
    for (let j = i+1; j < arr.length; j++) {
      if(arr[j]<arr[index]) {
        index = j;
      }
    }
    swap(arr, index, i);
  }
  return arr;
}

let selectSort = arr => {
  for(let i=0; i<arr.length; i++) {
    let index = i;
    for(let j=i+1; j<arr.length; j++) {
      if(arr[j] < arr[index]) {
        index = j;
      }
    }
    swap(arr, index, i);
  }
  return arr;
}

console.log(selectSort(arr));