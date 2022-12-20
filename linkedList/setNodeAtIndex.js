class node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}

// let list=new node(5)

// list.next=new node(6)

// list.next.next=new node(8)

// console.log(list)

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newely=new node(val)
        if(!this.head){
            this.head=newely
            this.tail=newely
        }
        else{
            this.tail.next=newely
            this.tail=newely
        }
        this.length++;
    }
    traverse(){
        let cur=this.head
        while(cur){
            console.log(cur.val)
            cur=cur.next
        }
    }

    getNodeAtIndex(index){
        if(index>=this.length || index<0) return null
        let currentNode=this.head
        let currentIndex=0;

        while(currentIndex!=index){
            currentNode=currentNode.next
            currentIndex++
        }
        return currentNode
    }
    setNodeAtIndex(val,index){
        let foundNode=this.getNodeAtIndex(index)

       if(foundNode) {
        foundNode.val=val
        return foundNode
       }
       else return undefined
    }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("Ashish")
list.push("Tripathi")
list.traverse()
// console.log(list.getNodeAtIndex(0))
console.log(list.setNodeAtIndex("shivam",0))
list.traverse()