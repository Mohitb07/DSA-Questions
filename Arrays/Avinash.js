// const FindSumOfIndices = (arr, n, target) => {

//     for(let i = 0; i < n ; i++){
//         for(let j = 1; j < n ; j++){
//             if(arr[i] + arr[j] === target){
//                 return i+j
//             }
//         }
//     }

//     return 0;
// }

// const arr = [1,2,3,4,5,6,7,8]

// console.log(FindSumOfIndices(arr, arr.length, 140))


// const distance = (direction, speed1, time1, speed2, time2) => {
//     const firstPersonDistance = speed1 * time1
//     const secondPersonDistance = speed2 * time2

//     let relativeDistance;
//     if(direction === 0){
//         relativeDistance = firstPersonDistance + secondPersonDistance    
//     }
//     if(direction === 1){
//         relativeDistance = firstPersonDistance - secondPersonDistance
//     }

//     return relativeDistance;
     
// }

// console.log(distance(0, 30, 12, 20, 6))


// Implement the function to replace each element of array with it's farthest co-prime number in range [2, 250] (both inclusive) and return the modified array.

const replaceWithFarthestCoPrime = (arr) => {
    const coPrime = (num) => {
        for(let i = 2; i <= 250; i++){
            if(num % i === 0 && num !== i){
                return i
            }
        }
    }

    for(let i = 0; i < arr.length; i++){
        arr[i] = coPrime(arr[i])
    }

    return arr;
}

console.log(replaceWithFarthestCoPrime([60, 246, 75, 103, 155, 110]))

