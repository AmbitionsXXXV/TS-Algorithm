class Heap<T> {
  // 属性
  private data: T[] = [];
  private length: number = 0;

  private swap(i: number, j: number) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  // 方法
  insert(value: T) {}

  extract(): T | undefined {
    return undefined;
  }

  peek(): T | undefined {
    return this.data[0];
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  buildHeap(arr: T[]) {}
}

export {};
