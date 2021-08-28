const reverseArray = (arr) => {
    for(let i=arr.length - 1; i >= 0; i--){
        console.log(arr[i])
    }
}

const reverseArray = (arr = []) => {
    const newArray = []    
    while(arr.length > 0){
        const popedValue = arr.pop()
        newArray.push(popedValue)
    }
    return newArray
}

const array = [1,2,3,4,5,6,7]
console.log(reverseArray(array))