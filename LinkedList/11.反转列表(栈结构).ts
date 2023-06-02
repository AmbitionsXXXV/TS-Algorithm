import ListNode from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  // 不用处理的情况
  // 1.head本身为null的情况
  if (head === null) return null;
  // 2.只有head一个节点
  if (head.next === null) return head;

  // 数组模拟栈结构
  const stack: ListNode[] = [];
  let current: ListNode | null = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }

  // 从栈结构中取出元素，放到一个新的链表中
  const newHead: ListNode = stack.pop()!;
  let newCurrent = newHead;
  while (stack.length) {
    const node = stack.pop()!;
    newCurrent.next = node;
    newCurrent = newCurrent.next;
  }

  // 把最新的尾部节点的next指向null
  newCurrent.next = null;

  return newHead;
}

// 测试
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);

console.log(reverseList(list));

export {};
