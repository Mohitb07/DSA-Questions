// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function(nums) {
    const sortedSquare = nums.map((num) => num * num)
    sortedSquare.sort((a,b) => a - b )
    return sortedSquare
};

console.log(sortedSquares([-4,-1,0,3,10]))