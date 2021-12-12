const isPossible = (arr, books, students, mid) => {
  let studentsCount = 1;
  let pageSum = 0;

  for (let i = 0; i < books; i++) {
    if (pageSum + arr[i] <= mid) {
      pageSum += arr[i];
    } else {
      studentsCount++;
      if (studentsCount > students || arr[i] > mid) {
        return false;
      } else {
        pageSum = arr[i];
      }
    }
  }
  return true;
};
const bookAllocation = (arr, books, students) => {
  let start = 0;
  let sum = 0;
  for (let i = 0; i < books; i++) {
    sum += arr[i];
  }
  let end = sum;
  let result = 0;
  let mid = (start + end) >>> 1;

  while (start <= end) {
    if (isPossible(arr, books, students, mid)) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    mid = (start + end) >>> 1;
  }

  return result;
};

console.log(bookAllocation([10, 20, 30, 40], 4, 2));
