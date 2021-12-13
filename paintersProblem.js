function isPossible(arr, board, painters, mid) {
  let countPainters = 1;
  let boardSum = 0;

  for (let i = 0; i < board; i++) {
    if (boardSum + arr[i] <= mid) {
      boardSum += arr[i];
    } else {
      countPainters++;
      if (countPainters > painters || arr[i] > mid) {
        return false;
      }
      boardSum = arr[i];
    }
  }
  return true;
}
const paintersProblem = (arr, board, painters) => {
  let start = 0;
  let arrSum = 0;

  arr.map((val) => (arrSum += val));
  let end = arrSum;
  let mid = start + Math.floor((end - start) / 2);
  let result = 0;

  while (start <= end) {
    if (isPossible(arr, board, painters, mid)) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    mid = start + Math.floor((end - start) / 2);
  }

  return result;
};

console.log(paintersProblem([5, 5, 5, 5], 4, 2));
