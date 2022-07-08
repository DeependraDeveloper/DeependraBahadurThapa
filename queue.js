// queue-->fifo

// usings arrays

// let queue=[]
// queue.push(10)
// queue.push(20)
// queue.shift()
// console.log(queue)


class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

class Queue{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }

    enqueue(val){
        const newNode=new Node(val)

        if(this.length===0){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
        return this
    }

    deueue(){
        if(this.length===0) console.log(new Error("list is empty"))
        else if (this.length===1){
            this.head=null
            this.tail=null
        }else{
            let temp=this.head.next
            this.head=temp
        }
        this.length--
    }
}

const newQUE=new Queue()
newQUE.enqueue(10)
newQUE.enqueue(20)
newQUE.enqueue(30)
newQUE.deueue()
newQUE.deueue()
newQUE.deueue()
newQUE.deueue()
console.log(newQUE)