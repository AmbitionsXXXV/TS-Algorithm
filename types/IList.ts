export default interface IList<T> {
  // peek
  peek(): T | undefined;
  // 判断是否为空
  isEmpty(): boolean;
  // 元素个数
  // get size(): number // 加了get关键字后调用size方法时，不用queue.size(),而可以直接queue.size直接调用
  size(): number;
}
