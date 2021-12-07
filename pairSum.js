function pairSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == targetSum) {
        console.log("(" + array[i] + "," + array[j] + ")");
      }
    }
  }
}

pairSum([1, 2, 3, 4, 5], 5);
