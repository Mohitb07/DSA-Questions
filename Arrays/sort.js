// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function sort012() that takes an array arr and N as input parameters and sorts the array in-place.

function sort(arr){
    let left = 0;
    let right = arr.length - 1;
    let mid = 0;
    while(mid <= right){
        if(arr[mid] === 0){
            swap(arr, left, mid);
            left++;
            mid++;
        }
        else if(arr[mid] === 1){
            mid++;
        }
        else{
            swap(arr, mid, right);
            right--;
        }
    }

    return arr;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(sort([0, 1, 2, 0, 1, 2]));