// Find the GCD of two number;

const gcd = (m,n) => { 
    while(m!==n){
        if(m > n){
            m = m - n;
        } else n = n - m;
    }
    return m;    
}

console.log(gcd(12,8));