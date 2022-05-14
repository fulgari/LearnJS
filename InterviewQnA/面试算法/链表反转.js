// 链表反转.js

/*

输入一个链表，反转链表后，输出新链表的表头。

function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  /*思路就是，用list存最后要返回的头部，p用来做链表右侧的切割者，q用来做中转者（将当前节点从右边head开始数起的第一个转移到最左，并把list迁移到list）*/
  let list = pHead;
  let p = pHead;
  let q = null;

  if (p == null) {
    return null;
  }

  while (p.next !== null) {
    q = p.next;
    p.next = p.next.next; /*也可以写成p.next = q.next，这里我想直观地看到p怎么把当前节点让给q去处理的*/
    q.next = list;
    list = q;
  }
  return list;
}
