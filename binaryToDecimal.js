const binaryToDecimal = (number) => {
  let answer = 0;
  let i = 0;
  while (number !== 0) {
    let digit = number % 10;
    if (digit === 1) {
      answer = answer + 2 ** i;
    }
    number = Math.floor(number / 10);
    i++;
  }

  return answer;
};

//NOTE :- (lang specific) ASSUMING NO LEADING 0's IN THE NUMBER BECAUSE THE JAVASCRIPT REPRESENTS THE LEADING 0's VALUES AS THE OCTAL VALUES
console.log(binaryToDecimal(001));
