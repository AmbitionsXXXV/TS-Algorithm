import IList from "./IList";

interface IQueue<T> extends IList<T> {
  // 入队方法
  enqueue(element: T): void;
  // 出队方法
  dequeue(): T | undefined;
}

export default IQueue;
