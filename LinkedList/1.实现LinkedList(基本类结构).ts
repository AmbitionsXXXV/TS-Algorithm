// 1.创建Node节点类
class Node<T> {
  next: Node<T> | null = null;
  constructor(public value: T) {}
}

class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  get length() {
    return this.size;
  }
}

export {};
