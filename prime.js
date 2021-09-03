//Count the number of prime numbers less than a non-negative number, n.

function countPrimes(n) {
    var count = 0;
    for (var i = 2; i < n; i++) {
        for (var j = 2; j <= i; j++) {
            if (i % j == 0 && i != j) {
                break;
            } else if (j == i) {
                count++;
            }
        }
    }
    return count;
}

console.log(countPrimes(10))