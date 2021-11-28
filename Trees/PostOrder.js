class Node{
    constructor(root){
        this.val = root;
        this.right = null;
        this.left = null;
    }
}

const PostOrderTraversal = (root) => {
    if(root === null) return [];
    const stack = [root]
    const auxStack = []

    while(stack.length > 0){
        const currentValue = stack.pop()
        auxStack.push(currentValue.val)
        if(currentValue.left !== null){
            stack.push(currentValue.left)
        }
        if(currentValue.right !== null){
            stack.push(currentValue.right)
        }
    }

    console.log(auxStack.reverse())
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)
const node7 = new Node(7)

node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node3.right = node7
node3.left = node6 

PostOrderTraversal(node1)