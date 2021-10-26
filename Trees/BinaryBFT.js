class Node {
    constructor(root){
        this.value = root;
        this.right = null;
        this.left = null;
    }
}

const breadthFirstValues = (root) => {
    if(root === null) return [];
    const result = []
    const queue = [root]

    while(queue.length > 0){
        const current = queue.shift()
        result.push(current.value)

        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }

    return result;
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

console.log(breadthFirstValues(node1))