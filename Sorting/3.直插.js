let arr = [5, 3, 4, 2, 1];


// 交换
let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 三难兄难弟之一，如果已经有序就不需要进入if中操作，因此最好为O(n)，最坏和平均O(n^2)
let insertSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    for (let j = 0; j < i; j++) {
      //分情况，插开头只需要小就行，插中间的需要比前大比后小
      if(cur < arr[j] && j==0) {
        arr.splice(i, 1);
        arr.unshift(cur);
      } else if(cur > arr[j] && cur < arr[j+1] && j < i-1) {
        arr.splice(i, 1);
        arr.splice(j+1, 0, cur);
      }
    }
  }
  return arr;
}

console.log(insertSort(arr));