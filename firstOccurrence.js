function firstOcc(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = start + Math.floor((end - start) / 2); // (start + end) >>> 1;
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
    mid = start + Math.floor((end - start) / 2);
  }
  return ans;
}

console.log(firstOcc([1, 2, 3, 3, 3, 4, 5], 3));
