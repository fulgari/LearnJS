// 笔试

// 1.	合并二叉树
// 给定两棵二叉树，这两棵树的部分节点是重叠的，部分没重叠。
// 现在要将它们合并到一个新的二叉树中。合并规则是，如果两个节点重叠，则将两个节点的值相乘，作为合并节点的新值；否则，非空节点的父节点的值作为新树的节点。
// 例如：
// Input: 
// 	   Tree 1                        Tree 2                  
//           1                           2                             
//          /  \                        /  \                            
//         3   2                       1    3                        
//        /                             \     \                      
//       5                              4     7                  
// Output: 
// Merged tree:
// 	      2
// 	     /  \
// 	   3     6
// 	  /  \     \ 
// 	 3   1      3


/**
 * 已有函数：生成一个二叉树
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
 // 使用递归的方式，添加多一个参数用来保存父节点的值
var mergeTrees = function(t1, t2, tparent) {
    let t
    if(t1 != null && t2 != null) {
        t = new TreeNode(t1.val * t2.val)
        t.left = mergeTrees(t1.left, t2.left, t)
        t.right = mergeTrees(t1.right, t2.right, t)
    } else if ((t1 != null && t2 == null) || (t1 == null && t2 != null)) {
        t = new TreeNode(tparent.val)
    } else {
        return null
    }
    return t
};

// 2.	奇偶链表
// 给定一个单向链表，将所有奇数节点组合在一起，然后是偶数节点。需要注意的是，这里指的是节点序号而不是节点中的值。
// 例：
// 输入1-> 2-> 3-> 4-> 5-> NULL，
// 输出1-> 3-> 5-> 2-> 4-> NULL。
// 注意：
// 1）偶数和奇数组内的相对顺序应与输入时保持相同。
// 2）第1个节点是奇数，第2个节点是偶数，以此类推。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 通过使用两个链表，一个保存奇数位，一个保存偶数位，最后拼起来
var oddEvenList = function(head) {
    if (!head) {
        return head
    }

    let oddList = head
    let eventList = head.next
    let oddHead = head
    let evenHead = head.next

    while(oddList.next && oddList.next.next) {
        oddList.next = oddList.next.next
        eventList.next = eventList.next.next

        oddList = oddList.next
        eventList = eventList.next
    }
    oddList.next = evenHead
    return oddHead

};

// 3.	子串问题
// 两个字符串s1和s2，当s2包含s1的任一排列，则返回true。
// 也就是说，字符串s1的排列之一，是字符串s2的子串。
// 例1：
// Input: s1 = "qw", s2 = "eidwqooo"
// Output: True
// 说明: s2包含s1的一个排列("wq")

// 例2：
// Input: s1= "qw", s2 = "eidwoqoo"
// Output: False
// 注：
// 1）输入的字符串只包含小写字母。
// 2）两个字符串的长度在[1, 10,000]范围内。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // 求 s1 的全排列
    let arr = s1.split("")
    let stack = []
    let words = []
    let dfs = function(arr) {
        for(let i=0; i<arr.length; i++) {
            let char = arr.splice(i, 1)[0]
            stack.push(char)
            if(arr.length == 0) {
                words.push([...stack])
            }
            dfs(arr)
            arr.splice(i, 0, char)
            stack.pop()
        }
        return words
    }
    let allOrders = dfs(arr)
    let result = "False"
    // 判断是否有存在子串
    allOrders.forEach(a => {
        let str = a.join("")
        if(s2.includes(str)) {
            result = "True"
        }
    })
    return result
};
// 4.	Combo url
// 页面page的主函数入口在page.js，以下为其依赖树。
  
// 为了性能要求，我们页面会组装一个combo请求：
// http://res.wx.qq.com/F.js,E.js,D.js,C.js,B.js,A.js,page.js
// 请设计genUrl(requireTree)，输出如上所示的combo url。
// requireTree的数据结构如下页。

// requireTree = { 
// 	"name" : "page.js"
// 	"require" : [
// 		{
// 			"name":"A.js"
// 			"require" : [
// 				{
// 					"name":"C.js",
// 					"require" : [
// 						{
// 							"name":"F.js"
// 						}
// 					]
// 				}
// 			]
// 		},
// 		{
// 			"name":"B.js"
// 			"require" : [
// 				{
// 					"name":"D.js",
// 					"require" : [
// 						{
// 							"name":"F.js"
// 						}
// 					]
// 				},
// 				{
// 					"name":"E.js",
// 					"require" : []
// 				}
// 			]
// 		},
// 	]
// }

/**
 * @param {object} requireTree
 * @return {string}
 */

// 通过 BFS 最后再将数据反转拼合得到结果
var genUrl = function(requireTree) {
    let stack = [requireTree]
    let arr = []
    let occ = {}
    while(stack.length > 0) {
        let level = []
        for(let i=0; stack.length; i++) {
            let cur = stack.shift()
            if(occ[cur['name']]) {
                break
            }
            level.push(cur.name)
            if(cur['require'] && cur['require'].length > 0) {
                cur['require'].forEach(obj => {
                    stack.push(obj)
                })
            }
            occ[cur['name']] = cur['name']
        }
        arr.push(...level)
    }
    return `http://res.wx.qq.com/${arr.reverse().join(',')}`
};

