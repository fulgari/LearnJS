let arr = [5,3,4,2,1];

let quickSort = (arr) => {
  if(arr.length<=1) return arr;
  let pivotIndex = Math.floor(arr.length/2);
  let pivot = arr[pivotIndex];
  let left = [], right = [];
  for(let i=0; i<arr.length; i++) {
    if(i==pivotIndex) continue;
    if(arr[i]>pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(arr));