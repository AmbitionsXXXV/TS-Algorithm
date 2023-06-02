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

  // 封装私有方法
  // 根据position货渠道当前的节点(不是节点的value，而是整个节点)
  private getNode(position: number): Node<T> | null {
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }

    return current;
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
      const previous = this.getNode(position - 1);
      newNode.next = previous?.next ?? null;
      previous!.next = newNode;
    }
    this.size++;

    return true;
  }

  // 删除方法
  removeAt(position: number): T | null {
    // 1.越界判断
    if (position < 0 || position >= this.size) return null;

    let current = this.head;
    // 2.判断是否是删除第一个节点
    if (position === 0) {
      this.head = current?.next ?? null;
    } else {
      const previous = this.getNode(position - 1);

      // 找到需要删除的节点
      previous!.next = previous?.next?.next ?? null;
    }
    this.size--;

    return null;
  }

  // 获取方法
  get(position: number): T | null {
    // 越界问题
    if (position < 0 || position >= this.size) return null;

    // 2.查找元素，并且返回元素
    return this.getNode(position)?.value ?? null;
  }

  // 更新方法
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false;
    // 获取对应位置的节点，直接更新即可
    const currentNode = this.getNode(position);
    currentNode!.value = value;
    return true;
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
