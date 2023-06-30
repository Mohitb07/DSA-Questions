// Construct BST from given array (sorted)
// Given a sorted array. Write a function that creates a Balanced Binary Search Tree using array elements.
// Examples:
// Input:  Array {1, 2, 3}
// Output: A Balanced BST
//      2
//    /  \
//   1    3
//
// Input: Array {1, 2, 3, 4}
// Output: A Balanced BST
//       3
//     /  \
//    2    4
//  /
// 1
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// Solution 1: Recursive
// Time Complexity: O(n)
// Space Complexity: O(n)
const sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  const left = 0;
  const right = nums.length - 1;
  const mid = left + Math.floor((right - left) / 2);
  const node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1));

  return node;
};

console.log('Recursive', sortedArrayToBST([1, 2, 3])); // [2, 1, 3]

// Solution 2: Iterative
// Time Complexity: O(n)
// Space Complexity: O(n)
const sortedArrayToBST2 = function (nums) {
  if (!nums.length) return null;
  const stack = [];
  const left = 0;
  const right = nums.length - 1;
  const mid = left + Math.floor((right - left) / 2);
  const root = new TreeNode(nums[mid]);
  stack.push([root, left, right]);

  while (stack.length) {
    const [node, left, right] = stack.pop();
    const mid = left + Math.floor((right - left) / 2);
    if (left <= mid - 1) {
      node.left = new TreeNode(nums[left + Math.floor((mid - 1 - left) / 2)]);
      stack.push([node.left, left, mid - 1]);
    }
    if (mid + 1 <= right) {
      node.right = new TreeNode(
        nums[mid + 1 + Math.floor((right - mid - 1) / 2)]
      );
      stack.push([node.right, mid + 1, right]);
    }
  }

  return root;
};

console.log('Iterative', sortedArrayToBST2([1, 2, 3])); // [2, 1, 3]
