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