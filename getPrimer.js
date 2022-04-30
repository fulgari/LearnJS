/**
 * O(n) 求素数
 * 这里介绍一种算法——快速线性素数筛法（欧拉筛法），时间复杂度O(n)。
 * 诀窍在于：筛除合数时，保证每个合数只会被它的最小质因数筛去。因此每个数只会被标记一次，所以算法时间复杂度为O(n)。
 */

function getPrime(n) {
  let isPrime = []; //作为判断是否为素数的数组
  let res = [], cnt = 0;
  for(let i=0; i<=n; i++) {
    if(i==0 || i==1) isPrime[i] = false;
    else isPrime[i] = 1;
  }
  for(let i=2; i<=n ; i++) {
    if(isPrime[i]) {
      res.push(i); //用来保存素数结果
      cnt++;
    }
    for(let j=0; j<cnt; j++) { // 保证每个素数i乘以一个比自己小的素数res[j]之后变成合数
      if(i * res[j] > n) break;
      isPrime[i * res[j]] = 0;
      // if(i % res[j] == 0) break; 
    }
  }
  return res;
}

console.log(getPrime(1000));