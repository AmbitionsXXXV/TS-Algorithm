function binarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const midNum = arr[mid];
    if (midNum === target) {
      return mid;
    } else if (midNum < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}
