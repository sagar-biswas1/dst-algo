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
      console.log(vertex.name)
      this.#adjacentList.set(vertex.name, new Set());
    }
  }

  addEdge(vertex1 = null, vertex2 = null, directed = true) {
    if (vertex1 !== null && vertex2 !== null && vertex1 !== vertex2) {
      if (!this.#adjacentList.has(vertex1.name)) {
        this.addVertex(vertex1);
      }
      if (!this.#adjacentList.has(vertex2.name)) {
        this.addVertex(vertex2);
      }

      this.#adjacentList.get(vertex1.name).add(vertex2);
      if (directed) {
        this.#adjacentList.get(vertex2.name).add(vertex1);
      }
    }
  }
}

const graph= new Graph()



const a={name:'a'}
const b={name:'b'}
const c={name:'c'}
const e={name:'e'}
const f={name:'f'}
const g={name:'g'}
const h={name:'h'}

graph.addEdge(a,b)
graph.addEdge(a,c)
graph.addEdge(b,c)
graph.addEdge(a,h)
graph.addEdge(h,g)
graph.addEdge(e,f)


console.log(graph.vertices)
console.log(graph.adjacentList)
