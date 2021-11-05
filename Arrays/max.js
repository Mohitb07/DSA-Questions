// Find the maximum subsequence of Ones in an array

var findMaxConsecutiveOnes = function(nums) {
    var count = 0;
    var maxCount = 0;
    for(var i=0; i<nums.length; i++) {
        if(nums[i] !== 1) {
           
            maxCount = maxCount < count ? count : maxCount 

            count=0
        }
        
        if(nums[i] === 1){
            count++;
        }
           
    }
    
    if(count > maxCount) {
        return count
    }else {
        return maxCount;
    }
};

console.log(findMaxConsecutiveOnes(
    [1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1]
))