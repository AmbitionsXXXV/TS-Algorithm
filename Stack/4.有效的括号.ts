import ArrayStack from './1.2重构优化Stack'

function isValid(s: string): boolean {
  // 1.创建栈结构
  const stack = new ArrayStack<string>()

  // 2.遍历字符串
  for (let i = 0; i < s.length; i++) {
    const a = s[i]
    switch (a) {
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break
      default:
        if (a !== stack.pop()) return false
        break
    }
  }

  return stack.isEmpty()
}

console.log(isValid('{()[]}'))
