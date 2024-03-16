function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
  
  function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] < rightArr[0]) {
        sortedArr.push(leftArr.shift());
      } else {
        sortedArr.push(rightArr.shift());
      }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
  }
  
  const numArray1 = [3, 2, 1, 13, 8, 5, 0, 1];
  const numArray2 = [105, 79, 100, 110];
  console.log(mergeSort(numArray1));
  console.log(mergeSort(numArray2));