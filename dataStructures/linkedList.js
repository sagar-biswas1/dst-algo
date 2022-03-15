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
    //  { data: 500, next: Node { data: 100, next: Node:{ data: 300, next: null } } }
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
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current);
      }
      count++;
      current = current.next;
    }
    return;
  }

  // remove at index

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;

        current = current.next;
      }

      previous.next = current.next;
    }
    this.size--;
  }

  // clear list index
  clearList() {
    this.head = null;
    this.size = 0;
  }

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
q.insertAt(500, 0);
q.getAt(1);

q.removeAt(0);
console.log(q);
