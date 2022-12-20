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
        return currentNode.val
    }

  // ========================================== reverse ==============================================
  
  reverse(){
    if(this.length==0) return null
    if(this.length==1) return this

    let pre=null
    let nextNode=this.head
    let curr=this.head

    while(nextNode!=null){
        nextNode=curr.next
        curr.next=pre
        pre=curr
        curr=nextNode
       
        
    }
    this.tail=this.head
    this.head=pre
   console.log(this)
    
  }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("Ashish")
list.push("Tripathi")
list.reverse()
list.traverse()
