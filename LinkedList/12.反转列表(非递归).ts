import ListNode from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  // 不用处理的情况
  if (head === null || head.next === null) return head;

  // 反转链表结构
  let newHead: ListNode | null = null;
  while (head) {
    let current: ListNode | null = head.next;
    head.next = newHead;
    newHead = head;
    head = current;
  }

  return newHead;
}

// 测试
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);

console.log(reverseList(list));

export {};
