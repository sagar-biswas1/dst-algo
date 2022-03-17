class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


var q=0
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

  //delete data from the tree

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }

      if (data === node.data) {
        //node has no children
        if (node.left === null && node.right === null) {
          return null;
        }

        // node has no left children
        if (node.left === null) {
          return node.right;
        }
        // node has no right children
        if (node.right === null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, data);

        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);

    return this.root;
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
          // 5 
        // 4    6  
  // find min height
  minHeight(node = this.root) {
    q++
    if (node === null) {
      return -1;
    }

    let left = this.minHeight(node.left);
    
    let right = this.minHeight(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }


// find max height

maxHeight(node=this.node){
   if (node === null) {
     return -1;
   }

   let left = this.maxHeight(node.left);
   let right = this.maxHeight(node.right);

   if (left > right) {
     return left + 1;
   } else {
     return right + 1;
   }
}

}

const btree = new BTS();

btree.add(50);
btree.add(5);
btree.add(55);
// btree.add(6);
// btree.add(97);

// btree.add(99);
// btree.add(90);

// console.log("before", btree.root);
// btree.remove(5);
console.log("this is tree,", btree.minHeight());





