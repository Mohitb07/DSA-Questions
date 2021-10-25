// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets.Return the solution in any arbitrary order.
[], 1, 2 , [1,2],3,[1,3],[2,3],[1,2,3]
const findSubsets = (nums) => {
    const subsets = [[]];
    for (let i = 0; i < nums.length; i++) {
        const len = subsets.length;
        for (let j = 0; j < len; j++) {
        subsets.push([...subsets[j], nums[i]]);
        }
    }
    return subsets.sort((a, b) => a - b);
    }

    console.log(findSubsets([1,2,3]));