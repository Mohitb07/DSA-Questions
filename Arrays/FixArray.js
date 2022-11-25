// Given an array of elements of length N, ranging from 0 to N – 1. All elements may not be present in the array. If the element is not present then there will be -1 present in the array. Rearrange the array such that A[i] = i and if i is not present, display -1 at that place.

const fixArray = (arr, size) => {
    let temp;
    for(let i =0; i < size; i++){
        for(let j = 0; j < size; j++){
            if(arr[j] === i){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    for(let i = 0; i < size; i++){
        if(arr[i] != i){
            arr[i] = -1;
        }
    }
    return arr;
}

const fixArray = (arr, size) => {
    for(let i = 0; i < size; i++){
        if(arr[i] !== -1 && arr[i] !== i){
            let x = arr[i]
            while(arr[x] !== -1 && arr[x] !== x){
                let y = arr[x]
                arr[x] = x
                x = y
            }
            arr[x] = x
            if(arr[i] !== i){
                arr[i] = -1
            }
        }
    }
    return arr;
}



const arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
// Output : [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]
console.log(fixArray(arr, arr.length))