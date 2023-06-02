import { testSort } from "./utils";

function insertionSort(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const num = arr[i];
    let j = i - 1;
    while (arr[j] > num && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = num;
  }

  return arr;
}

testSort(insertionSort);
