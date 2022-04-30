let arr = [5,3,4,2,1];


// 交换
let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 三难兄难弟之一，选泡插（最坏、平均全为n^2，最好n^2,n,n）
let bubbleSort = (arr) => {
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length-i-1; j++) {
      if(arr[j+1]<arr[j]) {
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));