const sortFlower = (size, array, k) => {
  const resultArray = [];
  const auxArray = [];
  for (let i = 0; i < k; i++) {
    resultArray.push(array[i]);
  }

  for (let i = k; i < size; i++) {
    auxArray.push(array[i]);
  }

  return [
    ...resultArray.sort((a, b) => a - b),
    ...auxArray.sort((a, b) => b - a),
  ];
};

console.log(sortFlower(8, [7, 43, 12, 4, 1, 3, 78, 6], 4));
