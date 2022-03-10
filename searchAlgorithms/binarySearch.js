

const binarySearch = (arr, value) => {
  let minIndex = 0;
  let maxIndex = arr.length - 1;

  while (minIndex <= maxIndex) {
    let middleIndex = Math.floor((minIndex + maxIndex) / 2);
    let currentElement = arr[middleIndex];
    if (currentElement == value) {
      return {
        indexNumber: middleIndex,
        isFound: true,
        value: currentElement,
      };
    }



    if(value> currentElement){
        minIndex=middleIndex+1
    }else{
        maxIndex=middleIndex-1
    }
  }

  return {
    indexNumber: -1,
    isFound: false,
    value
  };
  
};
console.log(binarySearch([1, 3, 4, 5, 6], 3));