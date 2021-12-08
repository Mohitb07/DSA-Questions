// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function sort3(arr) {
  left = 0;
  mid = 0;
  right = arr.length - 1;
  while (mid <= right) {
    if (arr[mid] === 0) {
      let temp = arr[mid];
      arr[mid] = arr[left];
      arr[left] = temp;
      left++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      let temp = arr[right];
      arr[right] = arr[mid];
      arr[mid] = temp;
      right--;
    }
  }

  return arr;
}

console.log(sort3([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));
