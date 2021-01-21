/* 
*  *note = we store the pointer of our last element, due
*           in languages like JS, with gargabe collector
*           if you don't store the reference, 
*           it will get sweep, from memory.
*/

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top
  }
  push(value){
    const newNode = new Node(value)
    if (this.length === 0) {
      this.bottom = newNode
      this.top = newNode
    } else {
      const holdingPointer = this.top // *note
      this.top = newNode
      this.top.next = holdingPointer
    }
    this.length++
    return this
  }
  pop(){
    if (!this.top) {
      return null
    } 
    if (this.top === this.bottom) {
      this.bottom = null
    }
    const holdingPointer = this.top // *note1
    this.top = this.top.next
    this.length--
    return this
  }
  //isEmpty
}

const myStack = new Stack();
myStack
.push('google')
.push('Udemy')
.push('Discord')
.pop()
.pop()
.pop()
  
//Discord
//Udemy
//google  