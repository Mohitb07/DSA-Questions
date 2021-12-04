const binaryToDecimal = (number) => {
  let answer = 0;
  let i = 0;
  let digit;
  while (number !== 0) {
    digit = number & 1;
    answer = digit * 10 ** i + answer;
    i++;
    number = number >> 1;
  }

  return answer;
};

console.log(reverseOfNumber(128));
