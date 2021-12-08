function firstOcc(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(start + (end - start) / 2);
  let ans = -1;

  while (start <= end) {
    if (arr[mid] === key) {
      ans = mid;
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor(start + (end - start) / 2);
  }
  return ans;
}

function secondOcc(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(start + (end - start) / 2);
  let ans = -1;

  while (start <= end) {
    if (arr[mid] === key) {
      ans = mid;
      start = mid + 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor(start + (end - start) / 2);
  }
  return ans;
}

function totalOcc(arr, key) {
  const first = firstOcc(arr, key);
  const second = secondOcc(arr, key);
  return second - first + 1;
}

console.log(totalOcc([1, 2, 3, 3, 3, 3, 3, 4], 3));
