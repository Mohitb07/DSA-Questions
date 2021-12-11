// Find the element in a rotated array;

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

const binarySearch = (arr, s, e, key) => {
  let start = s;
  let end = e;
  let mid = (start + end) >>> 1;

  while (start <= end) {
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = (start + end) >>> 1;
  }

  return -1;
};

const findElement = (arr, key) => {
  const pivot = getPivot(arr);
  if (key >= arr[pivot] && key <= arr[arr.length - 1]) {
    return binarySearch(arr, pivot, arr.length - 1, key);
  } else {
    return binarySearch(arr, 0, pivot - 1, key);
  }
};

console.log(findElement([4, 5, 1, 2, 3], 3));
