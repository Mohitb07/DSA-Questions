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
// console.log(duplicate([1,3,4,2,2]))
// 2) SECOND APPROACH (Working on it!)
function duplicate2(arr){
    const newArr = new Array(arr.length)
    for(let i = 0; i <= arr.length; i++){      
        console.log('check', arr[i])
        if(newArr[arr[i]] !== arr[i]){
            console.log('!', arr[i])
            newArr[arr[i]] = 1
        }else {
            console.log('includes', arr[i])
            newArr[arr[i]] = newArr[arr[i]] + 1;
        }
    }
    console.table(newArr)
}

console.log(duplicate2([3,1,3,4,2]))

// 3) THIRD APPROACH Linked List Cycle Approach
function duplicate3(arr){
    var slow = arr[0]
    var fast = arr[0]

    do{
        slow = arr[slow]
        fast = arr[arr[fast]]
    }while(slow !== fast)

    fast = arr[0]
    while(slow != fast){
        slow = arr[slow]
        fast = arr[fast]
    }
    return slow;
}

console.log(duplicate3([3,1,3,4,2]))
