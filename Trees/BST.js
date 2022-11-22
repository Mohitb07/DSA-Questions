class Node {
  constructor(root) {
    this.data = root;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insertNode(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNodeIntoBst(this.root, newNode);
    }
  }
  insertNodeIntoBst(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNodeIntoBst(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNodeIntoBst(root.right, newNode);
      }
    }
  }
  postOrderTraversal(node) {
    if (node !== null) {
      this.postOrderTraversal(node.left);
      console.log("node data", node.data);
      this.postOrderTraversal(node.right);
    }
  }

  getRootNode() {
    return this.root;
  }
}

const BST = new BinarySearchTree();

BST.insertNode(15);
BST.insertNode(25);
BST.insertNode(10);
BST.insertNode(7);
BST.insertNode(22);
BST.insertNode(17);
BST.insertNode(13);
BST.insertNode(5);
BST.insertNode(9);
BST.insertNode(27);

let root = BST.getRootNode();

console.log("PRE ORDER");
BST.postOrderTraversal(root);
