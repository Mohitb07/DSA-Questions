const findPower = (base, power) => {
    let res = 1;
    while(power > 0){
        // If power is odd
        if((power&1) !== 0) {
            res = res * base;
        }

        base = base*base
        power = power >> 1; // Divide the power by 2.       
    }
    return res;
}

console.log(findPower(2,3))

// power of 2
const power = (n) => {
    if(n===0) return 1;

    let smallAnswer = power(n/2)

    if(n&1) {
        return 2*smallAnswer*smallAnswer
    }else {
        return smallAnswer*smallAnswer
    }
}

console.log(power(10))

const powerOf2 = (n) => {
    if(n <= 0) return false;
    while(n % 2 === 0){
        n /= 2;
    }

    return (n===1)
}

console.log(powerOf2(8))