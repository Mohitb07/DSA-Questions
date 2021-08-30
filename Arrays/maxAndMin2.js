// Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the Kth smallest element in the given array. It is given that all array elements are distinct.

const findKthSmallest = (arr, k) => {
    if (arr.length === 0) {
        return null;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    if (arr.length === 2) {
        return arr[0] < arr[1] ? arr[0] : arr[1];
    }
    if (arr.length === 3) {

        if (arr[0] < arr[1]) {
            if (arr[0] < arr[2]) {
                return arr[0];
            } else {
                return arr[2];
            }
        } else {
            if (arr[1] < arr[2]) {
                return arr[1];
            } else {
                return arr[2];
            }
        }
    }

    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }   
    if (k <= left.length) {
        return findKthSmallest(left, k);
    }
    if (k > left.length + 1) {
        return findKthSmallest(right, k - left.length - 1);
    }
    return pivot;
}

console.log(findKthSmallest([7, 10, 4, 3 ,20 ,15], 3));