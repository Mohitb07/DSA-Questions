class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const findHeightBFS = (root) => {
  if (root === null) return 0;
  let queue = [root];
  let height = 0;
  while (queue.length > 0) {
    let levelSize = queue.length;
    height++;
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return height;
};

const findHeightDFS = (root) => {
  if (root === null) return 0;
  let stack = [{ node: root, depth: 1 }];
  let height = 1;
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (depth > height) height = depth;
    if (node.right !== null) {
      stack.push({ node: node.right, depth: 1 + depth });
    }
    if (node.left !== null) {
      stack.push({ node: node.left, depth: 1 + depth });
    }
  }
  return height;
};

const findHeightRecursive = (root) => {
  if (root === null) return 0;
  let leftHeight = findHeightRecursive(root.left);
  let rightHeight = findHeightRecursive(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(findHeightBFS(root));
console.log(findHeightDFS(root));
console.log(findHeightRecursive(root));
