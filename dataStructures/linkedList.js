class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// const n=new Node(1)
// console.log(n)

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert first node

  insertFirst = (data) => {
    this.head = new Node(data, this.head);
    this.size++;
  };

  // insert last Node
  insertLast = (data) => {
    let node = new Node(data);
    let current;

    //if empty make this head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
      console.log("from insert last method ", current);
    }
    this.size++;
  };

  // insert at index

  // get at index

  // remove at index

  // clear list index

  // print list data
  printListData = () => {
    let current = this.head;

    while (current) {
      console.log("this is current data", current.data);
      current = current.next;
    }
  };
}

let q = new LinkedList();

q.insertFirst(100);
q.insertFirst(200);
q.insertLast(500);

console.log(q);
