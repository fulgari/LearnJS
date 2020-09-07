let arr = [5, 3, 4, 2, 1];


// 交换
let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * xuan
 * select sort
 */
let selectSort = (arr) => {
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
/**
 * pao
 * bubble sort
 */
let bubbleSort = (arr) => {
  for(let i=0; i<arr.length-1; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if(arr[i]>arr[j]) swap(arr, i, j);
    }
  }
  return arr;
}

/**
 * cha
 * insert sort
 */
let insertSort = (arr) => {
  for(let i=0; i<arr.length; i++) {
    let cur = arr[i];
    for(let j=0; j<i; j++) {
      if(arr[j]>cur && j==0) {
        arr.splice(i, 1);
        arr.splice(j, 0, cur); 
      } else if(arr[j]<cur && arr[j+1]>cur && j<i-1) {
        arr.splice(i, 1);
        arr.splice(j+1, 0, cur);
      }
    }
  }
  return arr;
}

/**
 * ishell 好记，insert的高级版，希尔排序
 * ishell sort
 */
let ishellSort = (arr) => {
  let gap = 1, cur;
  while(gap<=arr/2) {
    gap = gap*2 + 1;
  }
  for(gap; gap>0; gap = Math.floor(gap/2)){
    for(let i=gap; i<arr.length; i++) {
      cur = arr[i];
      for(var j=i-gap; j>=0 && arr[j]>cur; j-=gap) {
        arr[j+gap] = arr[j];
      }
      arr[j+gap] = cur;
    }
  }
  return arr;
}

/**
 * 快排 高级冒泡
 * quicksort
 */
let quickSort = (arr) => {
  if(arr.length <= 1) return arr;
  let pivotIndex = Math.floor(arr.length/2);
  let pivot = arr[pivotIndex];
  let left = [], right = [];
  for(let i=0; i<arr.length; i++) {
    if(i==pivotIndex) continue;
    if(arr[i]<pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}


console.log(selectSort(Array.prototype.slice.call(arr)));
console.log(bubbleSort(Array.prototype.slice.call(arr)));
console.log(insertSort(Array.prototype.slice.call(arr)));
console.log(ishellSort(Array.prototype.slice.call(arr)));
console.log(quickSort(Array.prototype.slice.call(arr)));