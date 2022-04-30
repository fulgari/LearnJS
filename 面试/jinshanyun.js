/**
 * 首先按照从上到下、从左到右的顺序输入一棵满二叉树中每一个结点对应的权重，例如输入1、1、2表示二叉树的根结点的权重为1，它的左、右两个子节点的权重分别为1和2。

然后判断该满二叉树中是否存在这样的非叶子结点：它的左子树上所有结点的权重之和等于右子树上所有结点的权重之和。

现在给你一棵满二叉树的所有结点的权重，请编写一个程序，寻找是否存在满足要求的非叶子结点，如果存在输出“Yes”，否则输出“No”。
 */

 /**
  * 多组输入。

第1行输入一个正整数T表示测试数据的数量。(T<=100)

接下来T行对应T组输入，每组输入数据占一行，该行包含n个正整数（n满足2^k-1），两两之间用空格隔开，1<n<=1000。
  */

 /**
  * 对于每组输入数据，如果能够找到满足要求的非叶子结点（左子树上所有结点的权重之和等于右子树上所有结点的权重之和），输出“Yes”，否则输出“No”。
  */

if((line = "1 2 2 1 3 2 2") != ''){
    let tree = line.split(' ');
    console.log(tree)
    let hasNode = false;
    for(let i=0; i<tree.length && 2*i+1<tree.length; i=i*2+1) {
        if(i===0) continue;
        // console.log(i)
        // console.log(getSum(tree, i))
        // console.log(getSum(tree, i+1))
        if(getSum(tree, i) === getSum(tree,i+1)) {
            hasNode = true;
        } 
    }
    if(hasNode) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}

function getSum(arr, index) {
    if(index*2+1 > arr.length) {
        return Number(arr[index])+Number(arr[index+1]);
    }
    console.log(index+","+arr[index]+","+arr[index+1])
    console.log(Number(getSum(arr, index*2+1)) +"<" + Number(getSum(arr, index*2+2)));
    return Number(getSum(arr, index*2+1)) + Number(getSum(arr, index*2+2));
}


/**
 * 小明最喜欢的数字是5。他在班上的学号是5号，也是学校足球队的5号队员。

现在小明希望你帮他编写一个程序，输入一个正整数n，输出从数字1到数字n中，一共出现了多少个5。
 */

 /**
  * 单组输入。

输入一个正整数n，1<n<=100000。
  */
 /**
  * 输出一个整数，即1到n的数字中5出现的个数。
  */

  console.log("==============")

  function get5(n) {
      let count = 0;
      for(let i=1; i<=n; i++) {
        String(i).split('').forEach(e=>{
            if(e==='5') {
                count++;
            }
        });
      }
      return count;
  }

  console.log(get5(50))