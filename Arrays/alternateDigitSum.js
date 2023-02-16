const alternateDigitSum = (n) => {
    const stringVersion = n.toString()
    const size = stringVersion.length;
    let sum = 0;
    let sign = 1;
    for(let i = 0; i < size; i++){
        sum += stringVersion[i]*sign
        sign = -sign
    }
    return sum;
}

console.log(alternateDigitSum(521))
console.log(alternateDigitSum(111))
console.log(alternateDigitSum(886996))