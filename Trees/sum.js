class Node {
    constructor(root) {
        this.value = root
        this.left = null
        this.right = null
    }
}

// Iterative approach
// const depthFirstSum = (root) => {
//     if(root === null) return 0
//     let sum = 0;
//     const stack = [root]

//     while(stack.length > 0) {
//         const current = stack.pop()

//         sum += current.value

//         if(current.right) stack.push(current.right)
//         if(current.left) stack.push(current.left)
//     }

//     return sum;
// }

// Recursive approach

const depthFirstSum = (root) => {
    if(root === null) return 0;
    if(!root.left) return 0;
    if(!root.right) return 0;
    
    return root.value + depthFirstSum(root.left) + depthFirstSum(root.right)
}



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

console.log(depthFirstSum(node1))