const hash = (string, max) => {
  let hash = 0;

  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  console.log("sdasdas", hash % max);
  return hash % max;
};

let HashTable = function () {
  let storage = [];

  const storageLimit = 5;

  this.print = () => {
    return storage;
  };

  this.add = function (key, value) {
    const index = hash(key, storageLimit);

    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;

      //   console.log("from add method", storage[index]);
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function (key) {
    const index = hash(key, storageLimit);

    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
          //   storage[index].length --;
        }
      }
    }
  };

  this.lookup = function (key) {
    const index = hash(key, storageLimit);

    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i] && storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
       return undefined;
    }
  };
};

const p = new HashTable();

p.add("Spain", "sagar");
p.add("name", "sagar");
p.add("ǻ", "oshan");

p.remove("Spain");
var value = p.lookup("ǻ");

p.print();

var q = p.print();

console.log(q);
