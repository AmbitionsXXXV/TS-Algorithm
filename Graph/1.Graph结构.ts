class Graph<T> {
  // 锚点
  private vertices: T[] = [];
  // 边：邻接表
  private adjList: Map<T, T[]> = new Map();

  // 添加顶点和边的方法
  addVertex(vertex: T) {
    // 将顶点添加数组中保存
    this.vertices.push(vertex);
    //创建一个邻接表的数组
    this.adjList.set(vertex, []);
  }

  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2);
    this.adjList.get(v2)?.push(v1);
  }

  traverse() {
    this.vertices.forEach((vertex) => {
      const edge = this.adjList.get(vertex);

      console.log(`${vertex} -> ${edge?.join(" ")}`);
    });
  }
}

export {};
