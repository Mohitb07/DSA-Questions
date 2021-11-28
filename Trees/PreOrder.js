class Node {
    constructor(root){
        this.val = root
        this.left = null;
        this.right = null;
    }
}

const PreOrderTraversal = (root) => {
    if(root === null) return []
    const stack = [root]
    while(stack.length > 0){
        const popedValue = stack.pop();
        console.log(popedValue.val)
        if(popedValue.right !== null){
            stack.push(popedValue.right)
        }
        if(popedValue.left !== null){
            stack.push(popedValue.left)
        }
    }
}

const node1 = new Node(10)
const node2 = new Node(8)
const node3 = new Node(3)
const node4 = new Node(2)
const node5 = new Node(50)
const node6 = new Node(6)
const node0 = new Node(5)

node1.left = node2
node1.right = node4
node4.left = node6
node2.left = node3
node2.right = node0

PreOrderTraversal(node1)