function sortZerosAndOnes(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    while (arr[start] === 0 && start < end) {
      start++;
    }
    while (arr[end] === 1 && start < end) {
      end--;
    }

    if (start < end) {
      arr[start] = 0;
      arr[end] = 1;
      start++;
      end--;
    }
  }
  return arr;
}

console.log(sortZerosAndOnes([0, 1, 0, 0, 1, 1]));
