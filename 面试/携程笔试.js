/**
 * 对二叉树的构建并访问
时间限制： 3000MS
内存限制： 589824KB
题目描述：
已知有平面坐标系的十组坐标点[[x1,y1], [x2,y2], ……, [x10,y10]]，每次找出距离最近的两组坐标进行合并，合并后的坐标取两者平均值，即[(x1+x2)/2 , (y1+y2)/2]（如有小数统一向下取整，即2.4取2），合并后的新坐标作为二叉树根节点，原坐标取X值较小的作为左节点，另一个为右节点，假设第一次计算后得出[x1,y1], [x2,y2]距离最近，且x1<x2，则构成如下二叉树：

 

         [(x1+x2)/2, (y1+y2)/2]

                /   \

               /     \

          [x1, y1]    [x2, y2]       [x3, y3] [x4, y4]  ……[x10, y10]

合并后的新坐标和余下没有在二叉树中的原始坐标构成新数组[[(x1+x2)/2, (y1+y2)/2], [x3,y3],[x4, y4] ……, [x10,y10]]继续重复上述步骤，直至二叉树构建完成，最后按前序优先输出二叉树的数组，假设只有3组坐标的话，可能的一种二叉树场景为：

 

              [(((x1+x2)/2)+x3]/2, (((y1+y2)/2)+y3]/2]

                             /                  \

                           /                      \

          [(x1+x2)/2, (y1+y2)/2]      [x3,y3]

                /         \

               /           \

          [x1, y1]    [x2, y2]

 

注：

两点之间距离的平方公式：(x1-x2)²+(y1-y2)²



输入描述
表示平面坐标系中坐标点的二维数组，如int a[10][2]

输出描述
前序遍历后的二叉树数据


样例输入
[[5,10], [3,15], [10,18]]
样例输出
7,15
4,12
3,15
5,10
10,18
 */

// let line = read_line();
// let arr = line.slice(1, -1).split(', ');
// arr.map(e => {
//     return e.slice(1, -1).split(',');
// });

// let res = getTree(arr);
// res.forEach((e)=>{
//     print(e[0]+','+e[1]);
// });

function getTree(arr) {
    
    let result = []
    let dfs = function(arr) {
        if(arr.length <= 0 ) return null;
        let tuple = getClosest(arr);
        let newTuple = [(arr[tuple[0]][0] + arr[tuple[1]][0] / 2), (arr[tuple[0]][1] + arr[tuple[1]][1] / 2)];
        let left = [arr[tuple[0]][0], arr[tuple[0]][1]];
        let right = [arr[tuple[1]][0], arr[tuple[1]][1]];
        result.unshift(newTuple);
        result.push(left);
        result.push(right);
        
        arr.splice(tuple[0], 1);
        arr.splice(tuple[1], 1);
        arr.unshift(newTuple);
        dfs(arr);
    }

    dfs(arr);
    return result;
}

function getClosest(arr) {
    let dist = Number.MAX_VALUE;
    let res = []
    for(let i=0; i<arr.length; i++) {
        for(let j=i; j<arr.length; j++) {
            let curDist = Math.pow(arr[i][0] - arr[j][0], 2) + Math.pow(arr[i][1] - arr[j][1], 2);
            if( curDist < dist ) {
                dist = curDist;
                res = [i, j];
            }
        }
    }
    return res;
}


getTree([[5,10], [3,15], [10,18]])


/**
 * 输入一个数组，排除掉非数字类型和负数的元素后，对数组中剩余的元素进行排列组合，求出组合后的最大数值。



输入描述
输入一个数组数组

输出描述
输出这个数组排列的最大值


样例输入
[1,0,2,3]
样例输出
3210
 */

// let line = read_line();
// let arr = line.slice(1, -1).split(',');

function getMax(arr) {
    return arr.sort().reverse().join('');
}

// print(getMax(arr));

/**
 * 对对碰
 * 输入描述
输入数据，两个单词之间以空格分隔，举例：

A提出：ABAC词型     B回答：jin sheng jin shi（ABAC），B回答正确，输出1

A提出：ABCD词型     B回答：xiao xin yi yi（ABCC），B回答错误，输出0

A提出：AABC词型     B回答：人 人 you ze（有中文），B回答错误，输出-1

输出描述
回答正确输出1，回答错误输出0，程序异常或回答中有非英文内容，输出-1


样例输入
ABAC
jin sheng jin shi
样例输出
1
 */

// let line = read_line();
// let rule = line;
// line = read_line();
// let str = line;
// let res = verify(rule, str);
// print(res);

function verify(rule, str) {
    if(!str.match(/^[A-Za-z ]+$/)) {
        return -1;
    }
    let map = {};
    let arr = str.split(' ');
    let code = 65;
    for(let i=0; i<arr.length; i++) {
        if(!map[arr[i]]) {
            map[arr[i]] = String.fromCharCode(code++);
        }
    }
    let type = arr.map(e => map[e]).join('');
    return rule === type ? 1 : 0;
}