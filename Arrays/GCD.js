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