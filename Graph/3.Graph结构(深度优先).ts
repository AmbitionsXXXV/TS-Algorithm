class Graph<T> {
  // 锚点
  private vertexes: T[] = [];
  // 边：邻接表
  private adjList: Map<T, T[]> = new Map();

  // 添加顶点和边的方法
  addVertex(vertex: T) {
    // 将顶点添加数组中保存
    this.vertexes.push(vertex);
    //创建一个邻接表的数组
    this.adjList.set(vertex, []);
  }

  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2);
    this.adjList.get(v2)?.push(v1);
  }

  traverse() {
    this.vertexes.forEach((vertex) => {
      const edge = this.adjList.get(vertex);

      console.log(`${vertex} -> ${edge?.join(" ")}`);
    });
  }

  // 遍历
  // 广度优先算法
  bfs() {
    // 1.是否有顶点
    if (this.vertexes.length === 0) return;

    // 2.创建队列结构访问每一个顶点
    const queue: T[] = [];
    queue.push(this.vertexes[0]);

    // 3.创建set结构，记录某一个顶点是否被访问过
    const visited = new Set<T>();
    visited.add(this.vertexes[0]);

    // 4.遍历队列中每一个顶点
    while (queue.length) {
      // 访问队列中第一个顶点
      const vertex = queue.shift();
      console.log(vertex);

      // 相邻的顶点
      const neighbors = this.adjList.get(vertex);
      if (!neighbors) continue;
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  // 深度优先算法
  dfs() {
    // 1.判断有没有顶点，没有直接返回
    if (this.vertexes.length === 0) return;

    // 2.创建栈结构
    const stack: T[] = [];
    stack.push(this.vertexes[0]);

    // 3.创建Set结构
    const visited = new Set<T>();
    visited.add(this.vertexes[0]);

    // 4.从第一个顶点开始访问
    while (stack.length) {
      const vertex = stack.pop();
      console.log(vertex);

      const neighbors = this.adjList.get(vertex);
      if (!neighbors) continue;
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
  }
}

export {};
