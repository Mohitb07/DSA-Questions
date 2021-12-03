const countNumberOfBits = (number) => {
  let count = 0;
  while (number !== 0) {
    if (number & 1) {
      count++;
    }
    number = number >> 1;
  }

  return count;
};

console.log(countNumberOfBits(7));
