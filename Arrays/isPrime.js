const isPrime = (range) => {
    const primeArray = [... new Array(range)].map(data => true)
    primeArray[0] = false; 
    primeArray[1] = false; 

    for(let i = 2; i*i <= range; i++){
        for(let j = 2*i; j <= range; j*=i ){
            primeArray[j] = false
        }
    }
    
    return primeArray.map((data,index) => `${index} ` + data)
}

console.log(isPrime(10))