class Node { 
    constructor(root){
        this.value = root;
        this.left = null;
        this.right = null;
    }
}

// Iterative approach
const depthFirstValues = (root) => {
    if(root === null) return []
    const result = []
    const stack = [root]
    while(stack.length > 0){
        const currentNode = stack.pop()
        result.push(currentNode.value)

        if(currentNode.right) stack.push(currentNode.right)
        if(currentNode.left) stack.push(currentNode.left)
    }

    return result;
}

// Recursive approach

// const depthFirstValues = (root) => {
//     if(root === null) return [];
//     const leftTree = depthFirstValues(root.left)
//     const rightTree = depthFirstValues(root.right)
    
//     return [root.value, ...leftTree, ...rightTree]
// }

const node1 = new Node(10)
const node2 = new Node(20)
const node3 = new Node(30)
const node4 = new Node(40)
const node5 = new Node(50)
const node6 = new Node(60)

node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5

console.log(depthFirstValues(node1))