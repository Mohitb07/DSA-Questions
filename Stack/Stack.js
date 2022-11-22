class Stack {
    count;
    stack;
    top;
    size;
    constructor(){
      this.stack = [];
      this.top = -1;
      this.size = 5
      this.count = 0;
    }
  
    push(element) {
      if(this.size - this.length() > 1){
        this.top++;
        this.stack[this.top] = element;
      }else {
        return 'Stack Overflow'
      }
    }

    length(){
      return this.top;
    }
    
    pop(){
      if(this.top > 0){
        const item = this.stack[this.top] 
        this.top--;
        this.stack.pop()
        return item;
      }else {
        return 'Stack Underflow'
      }
    }
  
    peek(){
      if(this.top > 0){
        return this.stack[this.top];
      }else {
        return 'Stack is Empty'
      }
    }
  
    showStack(){
      return this.stack;
    }

    isEmpty(){
      if(this.top === -1){
        return true;
      }else{
        return false;
      }
    }
  }
  
  const s = new Stack()
  s.push(10)
  s.push(20)
  s.push(30)
  s.push(40)
  s.push(50)
  console.log(s.pop())
  console.log(s.length())
  console.log(s.showStack())
  console.log(s.peek());
  console.log(s.isEmpty());
