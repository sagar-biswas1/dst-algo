class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }
  // add data in the search tree
  add(data) {
    let node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  // find min value from the search tree

  findMin() {
    let current = this.root;

    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  //find max value from the search tree
  findMax() {
    let current = this.root;

    while (current.right !== null) {
      current = current.left;
    }
    return current.data;
  }

  //find at some value

  find(data) {
    let current = this.root;
    let i = 0;
    if (current.data === data) {
      return current;
    } else {
      while (current.data !== data) {
        console.log(`this is current data ${i}`, data, current.data);
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }

        if (current === null) {
          return null;
        }
      }
    }

    return current;
  }

  // is value present in the tree

  isPresent(data) {
    let current = this.root;

    while (current) {
      i++;
      if (data === current.data) {
        return true;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

const btree = new BTS();

// btree.add(50);
// btree.add(5);
// btree.add(9);

// btree.add(99);
// btree.add(90);
// console.log(btree.find(50));
// console.log(btree)
