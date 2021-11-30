function sumPallin(n){
    let rem = 0;
    let sum = 0;
    let sumReverse = 0;

    while(n){
      rem = n%10
      sum += rem
      n = Math.floor(n/10)
    }
    const originalSum = sum;

    while(sum){
        rem = sum%10
        sumReverse = (sumReverse*10) + rem
        sum = Math.floor(sum/10)
    }

    console.log('sum', originalSum)
    console.log('reverse', sumReverse)
    if(originalSum === sumReverse){
      return 1
    }
    return 0
  }

  console.log(sumPallin(68))