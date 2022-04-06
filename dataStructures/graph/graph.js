class Graph {
  #vertices = new Set();
  #adjacentList = new Map();

  get vertices() {
    return Array.from(this.#vertices);
  }

  get adjacentList() {
    const list = {};

    this.#adjacentList.forEach((v, k) => {
      list[k] = Array.from(v);
    });

    return list;
  }

  addVertex(vertex = null) {
    if (vertex !== null && vertex !== undefined) {
      this.#vertices.add(vertex);
      this.#adjacentList.set(vertex, new Set());
    }
  }

  addEdge(vertex1 = null, vertex2 = null, directed = true) {
    if (vertex1 !== null && vertex2 !== null && vertex1 !== vertex2) {
      if (!this.#adjacentList.has(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.#adjacentList.has(vertex2)) {
        this.addVertex(vertex2);
      }

      this.#adjacentList.get(vertex1).add(vertex2);
      if (directed) {
        this.#adjacentList.get(vertex2).add(vertex1);
      }
    }
  }
}

const graph = new Graph();

const vertices = ["a", "b", "c", "d", "e", "f"];

graph.addEdge("a", "b");
graph.addEdge("a", "c");
graph.addEdge("a", "d");
graph.addEdge("b", "e");
graph.addEdge("b", "f");
graph.addEdge("b", "b");
graph.addEdge("c", "b");
graph.addEdge("c", "b");
graph.addEdge("c", "b");
graph.addEdge("d", "b");

console.log(graph.vertices);
console.log(graph.adjacentList);
