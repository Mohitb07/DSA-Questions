// Merge two Sorted Arrays
const merge  = (arr1, arr2, m, n) => {
    let i = 0; // Index for array1
    let j = 0; // Index for array2
    let k = 0; // Index for newArray
    let newArray = []
    while(i <=m && j <=n ){
        if(arr1[i] < arr2[j]){
            newArray[k++] = arr1[i++]
        }else newArray[k++] = arr2[j++]
    }

    // For remaining items of array1 if any
    for(;i<=m;i++){
        newArray[k++] = arr1[i++]
    }
    // For remaining items of array2 if any
    for(;j<=n; j++){
        newArray[k++] = arr2[j++]
    }

    return newArray;
}

const arr1 = [1,2,3]
const arr2 = [0,6,8]

console.log(merge(arr1, arr2, arr1.length, arr2.length))