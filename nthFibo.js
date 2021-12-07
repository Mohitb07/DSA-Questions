function nthFibo(number) {
  if (number <= 1) {
    return number;
  }
  return nthFibo(number - 1) + nthFibo(number - 2);
}

console.log(nthFibo(8));
