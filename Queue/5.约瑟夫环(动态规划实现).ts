function lastRemaining2(n: number, m: number) {
  let position = 0;

  for (let i = 2; i <= n; i++) {
    position = (position + m) % i;
  }

  return position;
}

console.log(lastRemaining2(5, 3)); // 3
console.log(lastRemaining2(10, 17)); // 2
