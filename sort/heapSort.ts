import { testSort } from "./utils";

function heapSort(arr: number[]): number[] {
  const len = arr.length;

  // 原地建堆
  const start = Math.floor(len / 2 - 1);
  for (let i = start; i >= 0; i--) {
    // 下滤操作
    heapifyDown(arr, len, i);
  }

  // 对最大堆进行排序
  for (let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, i, 0);
  }

  return arr;
}

function heapifyDown(arr: number[], len: number, index: number) {
  while (2 * index + 1 < len) {
    // 获取左右子节点的索引
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;

    // 找出更大的值
    let larger = leftChild;
    if (rightChild < len && arr[rightChild] > arr[leftChild]) {
      larger = rightChild;
    }

    // 判断index位置的值比更大的子节点大
    if (arr[index] >= arr[larger]) break;

    [arr[index], arr[larger]] = [arr[larger], arr[index]];
    index = larger;
  }
}

testSort(heapSort);
