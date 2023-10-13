/*
You are given N elements and your task is to Implement a Stack in which you can get a minimum element in O(1) time.

Example 1:

Input:
push(2)
push(3)
pop()
getMin()
push(1)
getMin()
Output: 2 1
Explanation: In the first test case for
query 
push(2)  Insert 2 into the stack.
         The stack will be {2}
push(3)  Insert 3 into the stack.
         The stack will be {2 3}
pop()    Remove top element from stack 
         Poped element will be 3 the
         stack will be {2}
getMin() Return the minimum element
         min element will be 2 
push(1)  Insert 1 into the stack.
         The stack will be {2 1}
getMin() Return the minimum element
         min element will be 1

Your Task:
You are required to complete the three methods push() which takes one argument an integer 'x' to be pushed into the stack, pop() which returns an integer popped out from the stack, and getMin() which returns the min element from the stack. (-1 will be returned if for pop() and getMin() the stack is empty.)

Expected Time Complexity: O(1) for all the 3 methods.
Expected Auxiliary Space: O(1) for all the 3 methods.

Constraints:
1 <= Number of queries <= 100
1 <= values of the stack <= 100
         
*/

// Solution: 1
// O(1) Time | O(n) Space (because of minStack)

class Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(item) {
    this.stack.push(item);
    if (
      this.minStack.length === 0 ||
      item <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(item);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return -1;
    }
    const item = this.stack.pop();
    if (item === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return item;
  }

  getTop() {
    if (this.stack.length === 0) {
      return -1;
    }
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    if (this.minStack.length === 0) {
      return -1;
    }
    return this.minStack[this.minStack.length - 1];
  }
}

const stack = new Stack();
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.getMin());
stack.push(1);
console.log(stack.getMin());

// Solution: 2
// O(1) Time | O(1) Space (because of min variable)

class Stack2 {
  constructor() {
    this.stack = [];
    this.min = null;
  }

  push(item) {
    if (this.stack.length === 0) {
      this.min = item;
      this.stack.push(item);
      return;
    }
    if (item < this.min) {
      this.stack.push(2 * item - this.min);
      this.min = item;
    } else {
      this.stack.push(item);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return -1;
    }
    const item = this.stack.pop();
    if (item < this.min) {
      const prevMin = this.min;
      this.min = 2 * this.min - item;
      return prevMin;
    }
    return item;
  }

  getTop() {
    if (this.stack.length === 0) {
      return -1;
    }
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    if (this.min === null) {
      return -1;
    }
    return this.min;
  }
}

const stack2 = new Stack2();
stack2.push(2);
stack2.push(3);
stack2.pop();
console.log(stack2.getMin());
stack2.push(1);
console.log(stack2.getMin());
