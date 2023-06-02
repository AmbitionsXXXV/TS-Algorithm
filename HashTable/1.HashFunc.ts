function hashFunc(key: string, max: number): number {
  // 1.计算hashCode cats => 60337(27为底的时候)
  let hashCode = 0;
  const length = key.length;
  for (let i = 0; i < length; i++) {
    // 霍纳法则计算hashCode
    hashCode = 31 * hashCode + key.charCodeAt(i);
  }

  // 2.求出索引值
  const index = hashCode % max;

  return index;
}

// 测试哈希函数
console.log(hashFunc("aimyon", 7));
console.log(hashFunc("oor", 7));
console.log(hashFunc("taka", 7));
