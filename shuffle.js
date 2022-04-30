let arr = [5, 3, 4, 2, 1];

// 交换
let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
let shuffle = (arr) => {
  for(let i=0; i<arr.length; i++) {
    let rIndex = Math.floor(Math.random() * (i+1));
    if(rIndex != i) swap(arr, rIndex, i);
  }
  return arr;
}

console.log(shuffle(arr));