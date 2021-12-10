const mountainPeak = (array) => {
  let start = 0;
  let end = array.length - 1;
  let mid = (start + end) >>> 1;

  while (start < end) {
    if (array[mid] < array[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
    mid = (start + end) >>> 1;
  }
  return mid;
};

console.log(mountainPeak([1, 2, 5, 4, 3]));
