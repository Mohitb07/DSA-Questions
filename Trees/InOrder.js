class Node {
    constructor(root){
        this.val = root
        this.left = null;
        this.right = null;
    }
}

const InOrderTraversalIterative = (root) => {
    if(!root) return [] 
    const stack = []
    const result = []
    while(stack.length > 0 || root){
        while(root){
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        result.push(root.val)
        root = root.right
    }
    return result;
}

const InOrderTraversalRecursive = (root) => {
    const result = []
    const traversal = (root) => {
        if(!root) return []
        traversal(root.left)
        result.push(root.val)
        traversal(root.right)
    }

    traversal(root)
    return result;
}

const node1 = new Node(1)
const node3 = new Node(2)
const node4 = new Node(3)

node1.left = null
node1.right = node3
node3.right = null
node3.left = node4

console.log(InOrderTraversal(node1))