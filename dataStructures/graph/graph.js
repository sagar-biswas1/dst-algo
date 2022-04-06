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

  toString() {
    let str = "";

    this.#adjacentList.forEach((val, key) => {
      str += `${key} -> [  ${Array.from(val).join(", ")}  ]\n`;
    });
    return str;
  }
}

const graph = new Graph();

// printing all the alphabet
const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 65)
);

const randomIndex = (max, min = 0) => {
  return Math.floor(Math.random() * Math.floor(max) + Math.floor(min));
};

// alphabet.forEach((letter) =>
//   graph.addEdge(letter, alphabet[randomIndex(alphabet.length - 1)])
// );

const vertices = ["a", "b", "c", "d", "e", "f"];

// graph.addEdge("a", "b");
// graph.addEdge("a", "c");
// graph.addEdge("a", "d");
// graph.addEdge("b", "e");
// graph.addEdge("b", "f");

// {
//   a: [ 'b', 'c', 'd' ],
//   b: [ 'a', 'e', 'f', 'c', 'd' ],
//   c: [ 'a', 'b' ],
//   d: [ 'a', 'b' ],
//   e: [ 'b' ],
//   f: [ 'b' ]
// }

// console.log(graph.vertices);
// console.log(graph.toString());

const COLORS = Object.freeze({
  GREEN: "green",
  YELLOW: "yellow",
  RED: "red",
});

// it follow the queue
const breathFirstSearch = (graph, fromVertex, callback) => {
  const { vertices, adjacentList } = graph;

  if (vertices.length === 0) {
    return;
  }

  const color = vertices.reduce((colors, vertex) => {
    return { ...colors, [vertex]: COLORS.GREEN };
  }, {});

  const queue = [];

  queue.push(fromVertex);

  while (queue.length > 0) {
    const vertex = queue.shift();

    const nearVertex = adjacentList[vertex];
    color[vertex] = COLORS.YELLOW;
    callback(color);
    nearVertex.forEach((nVertex) => {
      if (color[nVertex] === COLORS.GREEN) {
        color[nVertex] = COLORS.YELLOW;
        queue.push(nVertex);
      }
    });

    color[vertex] = COLORS.RED;
    callback(color);
    callback(vertex);
  }
};

//it follow stack
const depthFirstSearch = (graph, fromVertex, callback) => {
  const { vertices, adjacentList } = graph;
  const color = vertices.reduce((colors, vertex) => {
    return { ...colors, [vertex]: COLORS.GREEN };
  }, {});

  if (typeof callback == "function") {
    callback(fromVertex);
  }

  color[fromVertex] = COLORS.YELLOW;

  function visit(vertex) {
    if (color[vertex] === COLORS.GREEN) {
      if (typeof callback == "function") {
        callback(vertex);
      }
      color[vertex] = COLORS.YELLOW;
      adjacentList[vertex].forEach(visit);
    }
  }

  adjacentList[fromVertex].forEach(visit);

};

graph.addEdge("a", "b");
graph.addEdge("a", "c");
graph.addEdge("a", "d");
graph.addEdge("b", "e");
graph.addEdge("b", "f");

console.log(graph.toString());
// breathFirstSearch(graph, "a", console.log);
// depthFirstSearch(graph, "a", console.log);

// [a,b,c,d,e,f]
