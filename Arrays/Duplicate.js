// Find the Duplicate in an array of N+1 integers.
// Assume that there is only one duplicate number
// 1) FIRST APPROACH
function duplicate(arr){
    const newArr = arr.sort((a,b) => a - b)
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] === newArr[i+1]){
            return newArr[i]
        }
    }
}

console.log(duplicate([1,3,4,2,2]))
// function duplicate2(arr){
//     const newArr = new Array(arr.length)
//     for(let i = 0; i <= arr.length; i++){      
//         console.log('check', arr[i])
//         if(newArr[arr[i]] !== arr[i]){
//             console.log('!', arr[i])
//             newArr[arr[i]] = 1
//         }else {
//             console.log('includes', arr[i])
//             newArr[arr[i]] = newArr[arr[i]] + 1;
//         }
//     }
//     console.table(newArr)
// }

// console.log(duplicate2([3,1,3,4,2]))