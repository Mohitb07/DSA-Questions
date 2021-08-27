// QuickSort implemetation in an array;

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[0];
    let lessThanPivot = [];
    let greaterThanPivot = [];

    for(let i = 1 ; i< arr.length; i++){
        if(arr[i] <= pivot){
            lessThanPivot.push(arr[i])
        }else greaterThanPivot.push(arr[i])
    }

    return quickSort(lessThanPivot).concat(pivot).concat(quickSort(greaterThanPivot))
}

const arr = [15,5,611,6,1]
console.log(quickSort(arr))