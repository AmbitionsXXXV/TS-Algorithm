import ArrayStack from './1.2重构优化Stack'

function decimalToBinary(decimal: number): string {
  // 1.创建一个栈，用于存放余数
  const stack = new ArrayStack<number>()

  // 2.使用循环
  // while(不确定循环次数，只知道循环结束条件)
  // for(已知循环次数时)
  while (decimal > 0) {
    const result = decimal % 2
    stack.push(result)

    decimal = Math.floor(decimal / 2)
  }

  // 3.所有的余数都已经存到stack中，将栈中的元素逐个取出并打印
  let binary = ''
  while (!stack.isEmpty()) {
    binary += stack.pop()
  }
  return binary
}

console.log(decimalToBinary(35))
console.log(decimalToBinary(3636))
