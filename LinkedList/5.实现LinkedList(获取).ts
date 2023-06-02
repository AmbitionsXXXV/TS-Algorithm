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

  // 插入节点
  // 第一种处理异常
  // insert(value: T, position: number) {
  //   if(position < 0 || position > this.size) {
  //     throw new Error(`传入的${position}越界了`)
  //   }
  // }
  insert(value: T, position: number): boolean {
    // 1.越界判断
    if (position < 0 || position > this.size) return false;

    // 2.根据value创建新的节点
    const newNode = new Node(value);

    // 3.判断是否需要插入头部
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let index = 0;
      let previous: Node<T> | null = null;
      while (index++ < position && current) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous!.next = newNode;
    }
    this.size++;

    return true;
  }

  // 删除方法
  removeAt(position: number): T | null {
    // 1.越界判断
    if (position < 0 || position >= this.size) return null;

    // 2.判断是否是删除第一个节点
    if (position === 0) {
      this.head = this.head?.next ?? null;
    } else {
      let current = this.head;
      let previous: Node<T> | null = null;
      let index = 0;
      while (index++ < position && current) {
        previous = current;
        current = current.next;
      }

      // 找到需要删除的节点
      previous!.next = current?.next ?? null;
    }
    this.size--;

    return null;
  }

  // 获取方法
  get(position: number): T | null {
    // 越界问题
    if (position < 0 || position >= this.size) return null;

    // 2.查找元素，并且返回元素
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }

    return current?.value ?? null;
  }
}

// 测试append方法
const linkedList = new LinkedList<string>();
linkedList.append("oor");
linkedList.append("aimyon");
linkedList.append("taka");

// linkedList.traverse();

// 测试insert方法
linkedList.insert("ryota", 2);
linkedList.insert("tomoya", 0);
linkedList.insert("toru", 5);
linkedList.traverse();
console.log(linkedList.length);

linkedList.removeAt(2);
linkedList.traverse();

export {};
