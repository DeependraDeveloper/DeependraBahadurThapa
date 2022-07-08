// stacks -->>lifo []  
//application 
//-- js call stack
//-- undo / redo

//using arrays

// let stack=[]
// stack.unshift(10)
// stack.unshift(20)
// stack.shift()
// stack.shift()
// console.log(stack)

//using linked lists

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // []->[]->[]->
      newNode.next = this.first;
      this.first = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length == 0) console.log(new Error("empty list"))
    else if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      let temp = this.first.next;
      this.first.next = null;
      this.first = temp;
    }
    this.length--;
  }
}

const newStack = new Stack();
newStack.push(10);
newStack.push(20);
newStack.push(30);
newStack.pop()
newStack.pop()
newStack.pop()
newStack.pop()
console.log(newStack);
