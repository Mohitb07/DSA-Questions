const getPivot = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = (start + end) >>> 1;
  while (start < end) {
    if (arr[mid] >= arr[0]) {
      start = mid + 1;
    } else {
      end = mid;
    }
    mid = (start + end) >>> 1;
  }

  return start;
};

console.log(getPivot([4, 5, 1, 2, 3]));
