// Implement Binary Search (Iterative method)

const binarySearch = (arr, target) => {
    if(arr.length <= 0) return;
    var start = 0;
    var end = arr.length - 1;
    while(start <= end){
        var mid  = Math.floor(start + (end - start)/2);
        if(arr[mid] === target){
            return `Found at location ${mid}`
        }else if(target < arr[mid]){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return 'Not found'
}
console.log(binarySearch([12,20,55,98,123,500], 400))

// Implement Binary Search (Recursive Method)

const binarySearch = function(arr, target, start, end) {
    if(arr.length <= 0) return;
    if(start === end){
        if(arr[start] === target){
            return `Found at ${start}`;
        }else {
            return 'Not Found'
        };
    } else {
        var mid = Math.floor(start + (end - start)/2)
        if(arr[mid] === target){
            return mid;
        }
        if(arr[mid] < target){
            return binarySearch(arr, target, mid + 1, end)
        }
        if(arr[mid] > target){
            return binarySearch(arr, target, start, mid - 1)
        }
    }
}

const array = [12,20,55,98,123,500];
const target = 12;
console.log(binarySearch(array, target, 0, array.length - 1))