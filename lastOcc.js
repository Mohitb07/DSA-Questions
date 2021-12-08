function lastOccurrence(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = start + Math.floor((end - start) / 2);
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

console.log(lastOccurrence([1, 2, 3, 3, 3, 5], 3));
