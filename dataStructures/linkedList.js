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
  insertAt = (data, index) => {
    if (index > 0 && index > this.size) {
      return;
    }
    // if first index
    if (index === 0) {
      this.insertFirst(data);

      return;
    }

    const node = new Node(data);

    let current, previous;

    // set current

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // note before index
      count++;

      current = current.next; //note after index
    }

    node.next = current;
    previous.next = node;
    this.size++;
  };

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
q.insertAt(500, 1);

console.dir(q);
