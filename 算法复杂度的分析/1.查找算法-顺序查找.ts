function sequentSearch(arr: number[], target: number) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === target) {
      return i;
    }
  }
  return -1;
}

const index = sequentSearch([1, 2, 3, 5, 2, 64, 23, 55, 22], 23);
console.log(index);
