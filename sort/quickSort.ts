import { testSort } from "./utils";

function quickSort(arr: number[]): number[] {
  partition(0, arr.length - 1);

  function partition(left: number, right: number) {
    if (left >= right) return;
    // 寻找基准元素
    const pivot = arr[right];

    // 双指针几乎操作(左边为比pivot小的元素,右边为比pivot大的元素)
    let i = left;
    let j = right - 1;

    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }

      while (arr[j] > pivot) {
        j--;
      }

      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }

    // 将pivot放在正确位置
    [arr[i], arr[right]] = [arr[right], arr[i]];

    // 继续划分区域
    // 左侧
    partition(left, j);
    // 右侧
    partition(i + 1, right);
  }

  return arr;
}

testSort(quickSort);
