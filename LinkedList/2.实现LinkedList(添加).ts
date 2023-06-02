// 1.创建Node节点类
class Node<T> {
  // value: T
  next: Node<T> | null = null;
  constructor(public value: T) {
    // this.value = value
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  get length() {
    return this.size;
  }

  // 增加节点
  append(value: T) {
    // 1.创建一个新节点
    const newNode = new Node(value);

    // 2.判断this.head是否为null
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      // current 肯定是指向最后一个节点的
      current.next = newNode;
    }
    // 3.size++
    this.size++;
  }

  // 遍历列表的方法
  traverse() {
    const value: T[] = [];

    let current = this.head;
    while (current) {
      value.push(current.value);
      current = current.next;
    }

    console.log(value.join(" >> "));
  }
}

// 测试append方法
const linkedList = new LinkedList<string>();
linkedList.append("oor");
linkedList.append("aimyon");
linkedList.append("taka");

console.log(linkedList.length);
linkedList.traverse();

export {};
