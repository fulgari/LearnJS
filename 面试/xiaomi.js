// xiaomi.js

/**
* FizzBuzz
时间限制： 3000MS
内存限制： 589824KB
题目描述：
实现 fizzBuzz 函数，参数 num 与返回值的关系如下： 
1、如果 num 能同时被 7 和 9 整除，返回字符串 fizzbuzz 
2、如果 num 能被 7 整除，返回字符串 fizz 
3、如果 num 能被 9 整除，返回字符串 buzz 
4、如果参数为空或者不是 Number 类型，返回 false 
5、其余情况，返回参数 num
输入描述
输入 N

输出描述
得到正确的结果 R
*/

function fizzBuzz(num) {
	if(num===undefined || typeof(num) !== 'number' || isNaN(num)) {
		return false
	}
	var temp = ''
	if(num%7 === 0) {
		temp += 'fizz'
	}
	if(num%9 === 0) {
		temp += 'buzz'
	}
	if(temp !== '') {
		return temp
	}
	return num
}

console.log(fizzBuzz(NaN))

/**
* 推倒多米诺骨牌
时间限制： 3000MS
内存限制： 589824KB
题目描述：
一行中有 N 张多米诺骨牌，我们将每张多米诺骨牌垂直竖立。

在开始时，我们同时把一些多米诺骨牌向左或向右推。

每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。

同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。

如果同时有多米诺骨牌落在一张垂直竖立的多米诺骨牌的两边，由于受力平衡， 该骨牌仍然保持不变。

就这个问题而言，我们会认为正在下降的多米诺骨牌不会对其它正在下降或已经下降的多米诺骨牌施加额外的力。

给定表示初始状态的字符串 "S" 。如果第 i 张多米诺骨牌被推向左边，则 S[i] = 'L'；如果第 i 张多米诺骨牌被推向右边，则 S[i] = 'R'；如果第 i 张多米诺骨牌没有被推动，则 S[i] = '.'。

返回表示最终状态的字符串。

输入描述
表示初始状态的字符串 S

输出描述
表示最终状态的字符串 R

样例输入
.L.R...LR..L..
样例输出
LL.RR.LLRRLL..

提示
输入: "RR.L"
输出: "RR.L"
解释: 第一张多米诺骨牌没有给第二张施加额外的力。
*/

function Solution(S) {
	var arr = S.split('')
	while(!isBalanced(arr.join(''))) {
		arr = arr.map((c,i,a)=>{
			if(c==='.') {
				if(i===0 && a[i+1]==='L') {
					c = 'L'
				} else if(i===a.length-1 && a[i-1]==='R') {
					c = 'R'
				} else if(a[i-1]==='R' && !(a[i-1]==='R' && a[i+1]==='L')) {
					c = 'R'
				} else if(a[i+1]==='L' && !(a[i-1]==='R' && a[i+1]==='L')) {
					c = 'L'
				}
			}
			return c
		})
	}
	return arr.join('')
}

function isBalanced(str) {
	var res = true;
	if(str.length<=1) return true;
	str.split('').forEach((c,i,a)=>{
		if(c==='.') {
			if(i===0 && a[i+1]==='L') {
				res = false
			} else if(i===a.length-1 && a[i-1]==='R') {
				res = false
			} else if((a[i-1]==='R' || a[i+1]==='L') && !(a[i-1]==='R' && a[i+1]==='L')) {
				res = false
			}
		}
	})
	return res
}

// console.log(isBalanced('.L.R...LR..L..'))
// console.log(isBalanced('LL.RR.LLRRLL..'))
// console.log(isBalanced('RR.L'))

// console.log(Solution('.L.R...LR..L..'))
// console.log(isBalanced('LL.RR.LLRRLL..'))
// console.log(isBalanced('RR.L'))