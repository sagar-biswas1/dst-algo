const linearSearch = (arr, searchValue) => {
  if (arr.length === 0) return "Provide a perfect array";

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

const p = [12, 3, 3, 43, 4, 34];

console.log(linearSearch(p, 7));
