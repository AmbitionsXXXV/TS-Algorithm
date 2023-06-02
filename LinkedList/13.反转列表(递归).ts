import ListNode from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  // 不用处理的情况
  if (head === null || head.next === null) return head;

  const newHead = reverseList(head?.next ?? null);
  // 完成整个操作
  // 第一次来到这里的时候是倒数第二个节点
  head.next.next = head;
  head.next = null;

  return newHead;
}

// 测试
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);

console.log(reverseList(list));

export {};
