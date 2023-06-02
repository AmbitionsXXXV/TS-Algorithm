// 实现一个TS的栈结构
class ArrayStack {
  // 定义一个数组/链表，用于存储元素
  private data: any[] = []

  // 实现栈中相关的方法
  // push(element)方法：将一个元素压入栈中
  push(element: any): void {
    this.data.push(element)
  }

  // pop()方法：从栈中弹出一个元素,并从栈顶移除
  pop(): any {
    return this.data.pop()
  }

  // peek()方法：返回栈顶元素,但不对栈结构做任何操作
  peek(): any {
    return this.data[this.data.length - 1]
  }

  // isEmpty()方法：判断栈是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // size()方法：返回栈中元素的个数
  size(): number {
    return this.data.length
  }
}

// 创建Stack的实例
const stack = new ArrayStack()
stack.push('oor')
stack.push('aimyon')
stack.push('taka')

console.log(stack.peek())
console.log(stack.pop())

console.log(stack.size())

export {}
