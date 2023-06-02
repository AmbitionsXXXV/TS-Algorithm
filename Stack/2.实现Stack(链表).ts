import IStack from '../types/IStack'

class LinkedStack<T> implements IStack<T> {
  pop(): T {
    throw new Error('Method not implemented.')
  }
  peek(): T {
    throw new Error('Method not implemented.')
  }
  isEmpty(): boolean {
    throw new Error('Method not implemented.')
  }
  size(): number {
    throw new Error('Method not implemented.')
  }
  push(element: T) {}
}

export {}
