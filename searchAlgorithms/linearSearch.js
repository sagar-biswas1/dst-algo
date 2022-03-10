const linearSearch = (arr, searchValue) => {

if(arr.length )

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element == searchValue) {
      return {
        index: i,
        isFound: true,
        value: element,
      };
    }
  }

  return {
    index: -1,
    isFound: false,
    value: searchValue,
  };
};


const p=[]

console.log(linearSearch(p,7))
console.log(p.length)
