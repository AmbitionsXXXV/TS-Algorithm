import { testSort } from "./utils";

function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  // 长度为1时不用排序
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // ES6的新语法 用于元素交换
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

testSort(bubbleSort);
