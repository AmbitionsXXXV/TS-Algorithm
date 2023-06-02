import { testSort } from "./utils";

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  // 递归分解切割
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const newLeft = mergeSort(left);
  const newRight = mergeSort(right);

  let i = 0;
  let j = 0;
  const newArr: number[] = [];
  while (i < newLeft.length && j < newRight.length) {
    if (newLeft[i] <= newRight[j]) {
      newArr.push(newLeft[i]);
      i++;
    } else {
      newArr.push(newRight[j]);
      j++;
    }
  }

  // 判断是否还有剩余元素
  // 左侧部分
  if (i < newLeft.length) {
    newArr.push(...newLeft.slice(i));
  }
  if (j < newRight.length) {
    newArr.push(...newRight.slice(j));
    console.log("newArr", newArr);
  }

  return newArr;
}

testSort(mergeSort);
