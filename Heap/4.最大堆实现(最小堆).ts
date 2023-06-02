class Heap<T> {
  // 属性
  data: T[] = [];
  private length: number = 0;

  constructor(arr: T[] = []) {
    if (arr.length === 0) return;
    this.buildHeap(arr);
  }

  // 私有工具方法
  private swap(i: number, j: number) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  // 方法
  /** 插入操作 */
  insert(value: T) {
    // 1.将元素放到数组的尾部
    this.data.push(value);
    this.length++;

    // 2.维护最大堆的特性(最后位置的元素需要进行上滤操作)
    this.heapify_up();
  }

  private heapify_up() {
    let index = this.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.data[parentIndex] <= this.data[index]) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  /** 提取操作 */
  extract(): T | undefined {
    // 1.判断元素的个数为0或者1的情况
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.length--;
      return this.data.pop()!;
    }

    // 2.提取并且需要返回的最大值
    const topValue = this.data[0];
    this.data[0] = this.data.pop()!;
    this.length--;

    // 3.维护最大堆的特性: 下滤操作
    this.heapify_down(0);

    return topValue;
  }

  private heapify_down(start: number) {
    // 3.1.定义索引位置
    let index = start;

    while (2 * index + 1 < this.length) {
      // 3.2.找到左右子节点
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = leftChildIndex + 1;

      // 3.3.找到左右子节点较大的值
      let largerIndex = leftChildIndex;
      if (
        rightChildIndex < this.length &&
        this.data[rightChildIndex] <= this.data[leftChildIndex]
      ) {
        largerIndex = rightChildIndex;
      }

      // 3.4.较大的值和index位置进行比较
      if (this.data[index] <= this.data[largerIndex]) {
        break;
      }

      // 3.5.交换位置
      this.swap(index, largerIndex);
      index = largerIndex;
    }
  }

  /** 其他方法 */
  peek(): T | undefined {
    return this.data[0];
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  buildHeap(arr: T[]) {
    // 1.使用arr的值: 数组/长度
    this.data = arr;
    this.length = arr.length;

    // 2.从第一个非叶子节点, 开始进行下滤操作
    const start = Math.floor((this.length - 1) / 2);
    for (let i = start; i >= 0; i--) {
      this.heapify_down(i);
    }
  }
}

const arr = [19, 100, 36, 17, 3, 25];
// 1.测试插入操作
// const heap = new Heap<number>()
// for (const item of arr) {
//   heap.insert(item)
// }
// console.log(heap.data)

// 2.测试提取/删除操作
// while (!heap.isEmpty()) {
//   console.log(heap.extract())
// }

// 3.测试批量建堆
const heap = new Heap<number>(arr);
console.log(arr);
console.log(heap.extract());

export {};
