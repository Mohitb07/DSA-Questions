// Find the Greatest Common Divisor (GCD) of an array

const gcd = function(arr) {
    let max = Math.min.apply(Math, array)
    let min = Math.max.apply(Math, array)

    while(max !== min){
        if(min > max){
            min -= max
        }else max -= min
    }

    return max;
}

const array = [2,3,5,10]
console.log(gcd(array))

const gcd2 = (num1, num2) => {
    return num1 % num2 === 0 ? num2 : gcd2(num2, num1 % num2)
}

console.log(gcd2(24, 60))