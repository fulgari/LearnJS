let arr = [5, 3, 4, 2, 1];


// 交换
let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


// shell 是升级版插入排序，最好最坏都是和直插一样的：最好-n，最坏-n^2，但是因为间隔是缩小的原因，平均能有-n^1.3
let shellSort = (arr) => {

  let gap = 1, len = arr.length, cur;
  //动态定义间隔
  while(gap < len/3) {
    gap = gap*3+1;
  }

  for(gap; gap > 0; gap = Math.floor(gap/3)) { // gap递除三直到0
    for(let i = gap; i<len; i++) { // 对于每个gap的第一个数
      cur = arr[i];
      // 插入排序，从(i-gap,i)只要arr[j]比arr[i]（cur)大都要往后挪，i-gap开始挪位，以此类推，（i-gap-gap, i-gap) ... 直到arr[j]不再比arr[i]大时
      // 保持从后到前j->i有序
      for(var j=i-gap; j>=0 && arr[j] > cur; j -= gap) {
        arr[j+gap] = arr[j];
      }
      arr[j+gap] = cur; //插入
       
    }
  }
  return arr;
}

console.log(shellSort(arr));