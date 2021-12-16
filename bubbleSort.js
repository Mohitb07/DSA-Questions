const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (isSwapped === false) {
      // already sorted
      break;
    }
  }
  return arr;
};

console.log(bubbleSort([1, 6, 7, 9, 10, 14]));
