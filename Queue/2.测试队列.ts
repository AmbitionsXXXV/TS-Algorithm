import ArrayQueue from "./1.手动实现Queue";

const queue = new ArrayQueue<string>();

queue.enqueue("oor");
queue.enqueue("aimyon");
queue.enqueue("taka");

console.log(queue.dequeue());
console.log(queue.peek());

console.log(queue.isEmpty());
