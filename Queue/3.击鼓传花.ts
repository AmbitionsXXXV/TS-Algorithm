import ArrayQueue from "./1.手动实现Queue";

function hotPotato(names: string[], num: number) {
  // 1.创建队列结构
  const queue = new ArrayQueue<string>();

  // 2.将所有的name入队操作
  for (const name in names) {
    queue.enqueue(name);
  }

  // 3.淘汰的规则
  while (queue.size() > 1) {
    // 1/2 不淘汰
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue()!;
      queue.enqueue(name);
    }
    // 3.测试
    queue.dequeue();
  }

  // 4.取出最后一个人
  const leftName = queue.dequeue();
  const index = names.indexOf(leftName);

  return index;
}

hotPotato(["why", "james", "kobe", "curry", "abc", "cba", "nba", "mba"], 4);
