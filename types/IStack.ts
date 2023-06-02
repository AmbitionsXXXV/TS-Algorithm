import IList from "./IList";

// 定义栈的结构
interface IStack<T> extends IList<T> {
  push(element: T): void;
  pop(): T | undefined;
}

export default IStack;
